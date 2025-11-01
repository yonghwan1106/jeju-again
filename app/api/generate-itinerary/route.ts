import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { promises as fs } from 'fs';
import path from 'path';
import { ItineraryRequest, POI, CongestionLevel, LocalShop } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body: ItineraryRequest = await request.json();
    const { profile, date, duration, startLocation } = body;

    // Load mock data
    const dataDir = path.join(process.cwd(), 'data');
    const [poisData, congestionData, shopsData] = await Promise.all([
      fs.readFile(path.join(dataDir, 'mockPOIs.json'), 'utf-8'),
      fs.readFile(path.join(dataDir, 'mockCongestion.json'), 'utf-8'),
      fs.readFile(path.join(dataDir, 'mockLocalShops.json'), 'utf-8'),
    ]);

    const pois: POI[] = JSON.parse(poisData);
    const congestion: { levels: CongestionLevel[] } =
      JSON.parse(congestionData);
    const shops: LocalShop[] = JSON.parse(shopsData);

    // Check if API key is set
    if (!process.env.ANTHROPIC_API_KEY) {
      // Return mock itinerary if API key is not set
      return NextResponse.json(generateMockItinerary(body, pois, shops));
    }

    // Initialize Anthropic client
    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    // Create prompt for Claude with randomization seed
    const randomSeed = Math.random();
    const systemPrompt = `당신은 제주도 관광 전문가 'JejU-Again'입니다. 당신의 임무는 '관광약자' 프로필에 맞춰 '혼잡을 회피'하고 '지역 상생'을 돕는 여행 코스를 생성하는 것입니다.

# 지침
1. 사용자의 프로필(${profile})에 맞는 장소를 POI 목록에서 선택합니다.
2. 혼잡도 데이터를 참조하여 'CROWDED' 또는 'NORMAL' 상태인 장소는 *반드시* 제외합니다.
3. ${duration}시간에 맞춰 3~4개의 경유지를 선정합니다.
4. 경유지 중 최소 1개는 지역 상점(카페, 식당, 체험) 목록을 포함해야 합니다.
5. 각 경유지별로 프로필에 맞춰 "reason" (추천 사유)을 1-2줄로 작성해야 합니다.
6. 응답은 반드시 지정된 JSON 형식으로만 출력해야 합니다.

# 중요: 다양성 확보
- 매번 다양한 조합의 코스를 만들어주세요.
- 제주 전역(제주시, 서귀포, 동부, 서부)을 고루 활용하세요.
- 같은 지역에서만 선택하지 말고, 다양한 카테고리(숲, 해변, 문화, 정원 등)를 조합하세요.
- 출발지(${startLocation})에서의 거리를 고려하되, 너무 가까운 곳만 선택하지 마세요.
- 이 코스는 고유해야 합니다. (랜덤 시드: ${randomSeed})`;

    const userPrompt = `# 사용자 요청
- 프로필: ${profile}
- 날짜: ${date}
- 총 시간: ${duration}시간
- 출발지: ${startLocation}

# 활용 가능 데이터
- POIs: ${JSON.stringify(pois)}
- 혼잡도: ${JSON.stringify(congestion.levels)}
- 지역상점: ${JSON.stringify(shops)}

# 출력 JSON 형식
{
  "stops": [
    {
      "poiId": "...",
      "name": "...",
      "time": "HH:MM - HH:MM",
      "reason": "...",
      "lat": number,
      "lon": number
    }
  ]
}

중요: 반드시 JSON 형식으로만 응답하세요. 다른 텍스트는 포함하지 마세요.`;

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2000,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: userPrompt,
        },
      ],
    });

    // Parse Claude's response
    const responseText =
      message.content[0].type === 'text' ? message.content[0].text : '';

    // Extract JSON from response (in case Claude adds explanation)
    let jsonMatch = responseText.match(/\{[\s\S]*\}/);
    let responseData;

    if (jsonMatch) {
      responseData = JSON.parse(jsonMatch[0]);
    } else {
      throw new Error('Invalid response format from Claude');
    }

    const itinerary = {
      profile,
      date,
      duration,
      startLocation,
      stops: responseData.stops,
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json(itinerary);
  } catch (error) {
    console.error('Error generating itinerary:', error);
    return NextResponse.json(
      { error: 'Failed to generate itinerary' },
      { status: 500 }
    );
  }
}

// Generate mock itinerary when API key is not available
function generateMockItinerary(
  request: ItineraryRequest,
  pois: POI[],
  shops: LocalShop[]
) {
  const { profile, date, duration, startLocation } = request;

  // Filter POIs based on profile
  const suitablePOIs = pois.filter(
    (poi) =>
      poi.profile_target.includes(profile) || poi.profile_target.includes('GENERAL')
  );

  // Select 3-4 stops
  const numStops = Math.min(4, Math.max(3, Math.floor(duration / 2)));
  const selectedPOIs = suitablePOIs.slice(0, numStops - 1);

  // Add one local shop
  const suitableShops = shops.filter((shop) =>
    shop.profile_target.includes(profile)
  );
  const selectedShop = suitableShops[0];

  const stops = [
    ...selectedPOIs.map((poi, index) => ({
      poiId: poi.id,
      name: poi.name,
      time: `${9 + index * 2}:00 - ${10 + index * 2}:30`,
      reason: `${poi.name}은(는) ${profile} 프로필에 최적화된 한적한 장소입니다.`,
      lat: poi.lat,
      lon: poi.lon,
    })),
    {
      poiId: selectedShop.id,
      name: selectedShop.name,
      time: `${9 + (numStops - 1) * 2}:00 - ${10 + (numStops - 1) * 2}:30`,
      reason: `지역 상생을 위한 로컬 ${selectedShop.type === 'CAFE' ? '카페' : '맛집'}입니다.`,
      lat: selectedShop.lat,
      lon: selectedShop.lon,
    },
  ];

  return {
    profile,
    date,
    duration,
    startLocation,
    stops,
    createdAt: new Date().toISOString(),
  };
}
