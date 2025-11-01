import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const start = searchParams.get('start'); // "lng,lat" format
  const goal = searchParams.get('goal'); // "lng,lat" format
  const waypoints = searchParams.get('waypoints'); // "lng,lat|lng,lat" format

  if (!start || !goal) {
    return NextResponse.json(
      { error: 'Start and goal coordinates are required' },
      { status: 400 }
    );
  }

  try {
    const baseUrl = 'https://naveropenapi.apigw.ntruss.com/map-direction/v1/driving';
    let url = `${baseUrl}?start=${start}&goal=${goal}&option=traoptimal`;

    if (waypoints) {
      url += `&waypoints=${waypoints}`;
    }

    const response = await fetch(url, {
      headers: {
        'x-ncp-apigw-api-key-id': process.env.NEXT_PUBLIC_NAVER_CLIENT_ID || '',
        'x-ncp-apigw-api-key': process.env.NAVER_CLIENT_SECRET || '',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Directions API error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText,
        url,
        headers: {
          'x-ncp-apigw-api-key-id': process.env.NEXT_PUBLIC_NAVER_CLIENT_ID ? 'set' : 'missing',
          'x-ncp-apigw-api-key': process.env.NAVER_CLIENT_SECRET ? 'set' : 'missing',
        }
      });
      return NextResponse.json(
        { error: 'Failed to fetch directions', details: errorText },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching directions:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
