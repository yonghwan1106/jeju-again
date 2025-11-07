import Slide from './components/Slide';
import Image from 'next/image';
import {
  ScribbleCircle,
  ChunkyArrow,
  WobblyUnderline,
  StarBurst,
  ExclamationDoodle,
  ScribbleX,
  CheckmarkScribble,
  MarkerHighlight,
  BrutalistBox,
  StampBox
} from './components/HandDrawn';

export const slides = [
  // Slide 1: Neo-Brutalist Title Slide
  <Slide key="1" backgroundColor="bg-[#FFFEF2]">
    <div className="h-full flex flex-col justify-between py-12">
      {/* Top-left corner */}
      <div className="relative">
        <div className="text-6xl mb-2">🏝️</div>
        <ScribbleCircle className="w-24 h-24 -top-4 -left-4 text-[#FF6B35]" style={{ strokeWidth: 4 }} />
        <h1 className="text-8xl font-black tracking-tight text-[#1A1A1A] mb-2" style={{ fontFamily: 'var(--font-geist-sans)' }}>
          JEJU-AGAIN
        </h1>
        <div className="border-b-4 border-[#1A1A1A] w-64 mb-3" />
        <p className="text-4xl font-bold text-[#1A1A1A]">제주어게인</p>
      </div>

      {/* Center-right, tilted box */}
      <div className="relative ml-auto w-3/4 transform -rotate-2">
        <BrutalistBox className="bg-white p-10" borderColor="border-[#FF6B35]">
          <p className="text-3xl font-bold text-[#1A1A1A] leading-relaxed">
            데이터 기반<br/>
            <span className="text-[#FF6B35]">'관광약자-지역상생'</span><br/>
            맞춤형 내비게이션
          </p>
        </BrutalistBox>
      </div>

      {/* Bottom section */}
      <div className="space-y-6">
        {/* Tagline with marker highlight */}
        <div className="text-left">
          <p className="text-4xl font-light text-[#1A1A1A]">
            가장 빠른 길이 아닌,
          </p>
          <MarkerHighlight className="text-4xl font-bold text-[#1A1A1A]" style={{ color: '#FF6B35' }}>
            가장 편안한 길
          </MarkerHighlight>
          <WobblyUnderline className="mt-2 text-[#FF6B35]" />
        </div>

        {/* Contest badge */}
        <div className="inline-block">
          <div className="border-4 border-[#FF6B35] bg-[#FF6B35] px-8 py-4 text-white text-xl font-bold shadow-[6px_6px_0px] shadow-black/30">
            2025 제주관광 데이터 활용 공모전 출품작
          </div>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 2: Problem Statement - Diagonal Collision
  <Slide key="2" backgroundColor="bg-[#FFFEF2]">
    <div className="h-full flex flex-col justify-center space-y-8">
      {/* Title banner */}
      <div className="relative mb-8">
        <h2 className="text-6xl font-black text-[#1A1A1A]">
          <span className="text-4xl">⚠️</span> 제주 관광의 민낯
        </h2>
        <div className="border-b-4 border-[#1A1A1A] w-full mt-4" />
      </div>

      {/* Two angled boxes with VS */}
      <div className="grid grid-cols-2 gap-12 items-center relative">
        {/* Left box - tilted left */}
        <div className="transform rotate-3">
          <BrutalistBox className="bg-white p-8" borderColor="border-[#E63946]" shadowColor="shadow-[#E63946]/40">
            <div className="text-center mb-6">
              <div className="text-8xl font-black text-[#E63946] mb-2" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                90%
              </div>
              <div className="text-3xl font-bold text-[#1A1A1A]">CROWDED</div>
            </div>
            <div className="space-y-3 text-[#1A1A1A] text-xl">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏖️</span>
                <span>관광객 과밀화</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">😫</span>
                <span>만족도 저하</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💢</span>
                <span>주민 피로</span>
              </div>
            </div>
          </BrutalistBox>
        </div>

        {/* VS symbol - hand-drawn style */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="text-6xl font-black text-[#F7F052] bg-[#1A1A1A] px-6 py-4 rotate-12 border-4 border-[#F7F052]">
            ⚡ VS ⚡
          </div>
        </div>

        {/* Right box - tilted right */}
        <div className="transform -rotate-3">
          <BrutalistBox className="bg-white p-8" borderColor="border-[#00B4D8]" shadowColor="shadow-[#00B4D8]/40">
            <div className="text-center mb-6">
              <div className="text-8xl font-black text-[#00B4D8] mb-2" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                10%
              </div>
              <div className="text-3xl font-bold text-[#1A1A1A]">NEGLECTED</div>
            </div>
            <div className="space-y-3 text-[#1A1A1A] text-xl">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏘️</span>
                <span>상권 침체</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📉</span>
                <span>수익 불균형</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🚫</span>
                <span>발전 저해</span>
              </div>
            </div>
          </BrutalistBox>
        </div>
      </div>

      {/* Bottom question - speech bubble style */}
      <div className="text-center mt-8">
        <div className="inline-block relative">
          <div className="bg-[#1A1A1A] text-white px-12 py-6 text-3xl font-bold border-4 border-[#1A1A1A] relative">
            "이 두 문제를 <span className="text-[#F7F052]">동시에</span> 해결한다면?"
            <div className="absolute -bottom-4 left-12 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#1A1A1A]" />
          </div>
          <ChunkyArrow className="absolute -right-24 top-1/2 w-20 h-10 text-[#FF6B35]" direction="right" />
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 3: 86% - Brutal Data Visualization
  <Slide key="3" backgroundColor="bg-[#FFFEF2]">
    <div className="h-full flex flex-col justify-center space-y-6">
      {/* Title */}
      <div className="relative">
        <h2 className="text-5xl font-black text-[#1A1A1A] mb-6">
          <span className="text-4xl">👥</span> 정책의 사각지대를 발견하다
        </h2>
        <div className="border-b-4 border-[#1A1A1A] w-full" />
      </div>

      {/* Massive 86% */}
      <div className="relative flex justify-center my-8">
        <BrutalistBox className="bg-white p-12 text-center" borderColor="border-[#FF6B35]" shadowColor="shadow-black/50">
          <div className="relative">
            <div className="text-[12rem] font-black text-[#1A1A1A] leading-none mb-4" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              86%
            </div>
            <ScribbleCircle className="absolute inset-0 w-full h-full text-[#FF6B35]" />
            <div className="border-t-4 border-[#1A1A1A] w-3/4 mx-auto my-6" style={{ borderStyle: 'dashed' }} />
            <div className="text-4xl font-bold text-[#1A1A1A] mb-2">148만 명</div>
            <div className="text-3xl font-bold text-[#1A1A1A]">관광약자</div>
          </div>
        </BrutalistBox>
        {/* Exclamation marks */}
        <ExclamationDoodle className="absolute -right-12 top-0 w-8 h-20 text-[#FF6B35]" />
        <ExclamationDoodle className="absolute -left-12 top-12 w-8 h-20 text-[#E63946]" />
      </div>

      {/* Data bars */}
      <div className="space-y-4 max-w-4xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="flex-1 bg-[#FF6B35] h-12 flex items-center px-4 border-4 border-[#1A1A1A]" style={{ width: '51%' }}>
            <span className="text-white font-bold text-xl">■■■■■■■■■■</span>
          </div>
          <span className="text-2xl font-black w-32 text-[#1A1A1A]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>51% 시니어</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-1 bg-[#FF6B35] h-12 flex items-center px-4 border-4 border-[#1A1A1A]" style={{ width: '35%' }}>
            <span className="text-white font-bold text-xl">■■■■■■■</span>
          </div>
          <span className="text-2xl font-black w-32 text-[#1A1A1A]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>35% 영유아</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-1 bg-gray-300 h-12 flex items-center px-4 border-4 border-[#1A1A1A]" style={{ width: '13.5%' }}>
            <span className="text-[#1A1A1A] font-bold text-xl">■■</span>
          </div>
          <span className="text-2xl font-black w-32 text-gray-500" style={{ fontFamily: 'JetBrains Mono, monospace' }}>13.5% 기존</span>
        </div>
      </div>

      {/* Hand-written annotation */}
      <div className="relative text-center">
        <div className="inline-block">
          <p className="text-3xl font-bold text-[#E63946] transform -rotate-3" style={{ fontFamily: 'Caveat, cursive' }}>
            "6.5배 더 큰 시장!"
          </p>
          <ChunkyArrow className="inline-block w-16 h-8 ml-4 text-[#E63946]" direction="up" />
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 4: Real Problem - Battle Card Style
  <Slide key="4" backgroundColor="bg-[#FFFEF2]">
    <div className="h-full flex flex-col justify-center space-y-8">
      {/* Title */}
      <h2 className="text-6xl font-black text-[#1A1A1A] text-center mb-6">
        <span className="text-4xl">💥</span> 진짜 불편함은 무엇인가?
      </h2>

      {/* Comparison cards */}
      <div className="grid grid-cols-2 gap-12 items-center relative">
        {/* Left card - existing policy */}
        <div className="transform -rotate-2">
          <div className="border-4 border-[#E63946] bg-red-50 p-8">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-black text-[#1A1A1A]">❌ 기존 정책</h3>
              <ScribbleX className="w-16 h-16 text-[#E63946]" />
            </div>
            <div className="space-y-4 text-xl text-[#1A1A1A]">
              <div className="flex items-start gap-3">
                <span className="text-2xl">•</span>
                <span>물리적 접근성<br/><span className="text-base text-gray-600">(휠체어, 경사로)</span></span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">•</span>
                <span><span className="font-bold">13.5%</span> 시장</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">•</span>
                <span>시설 개선 중심</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right card - real problem */}
        <div className="transform rotate-2">
          <BrutalistBox className="bg-green-50 p-8" borderColor="border-[#06FFA5]" shadowColor="shadow-[#06FFA5]/40">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-black text-[#1A1A1A]">✅ 진짜 문제</h3>
              <CheckmarkScribble className="w-16 h-16 text-[#06FFA5]" />
            </div>
            <div className="space-y-4 text-xl text-[#1A1A1A]">
              <div className="flex items-start gap-3">
                <span className="text-2xl">•</span>
                <span>경험적 장벽<br/><span className="text-base text-gray-600">(혼잡, 소음)</span></span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">•</span>
                <span><span className="font-bold text-[#06FFA5]">86%</span> 시장</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">•</span>
                <span>데이터 해결</span>
              </div>
            </div>
          </BrutalistBox>
        </div>
      </div>

      {/* Pain points as stamps */}
      <div className="flex justify-center gap-6 flex-wrap">
        {[
          { emoji: '😫', text: '혼잡' },
          { emoji: '🔊', text: '소음' },
          { emoji: '⏰', text: '대기' },
          { emoji: '❓', text: '불예측' }
        ].map((pain, i) => (
          <div key={i} className="border-3 border-[#1A1A1A] bg-white px-6 py-3 text-center shadow-[4px_4px_0px] shadow-black/30 transform hover:rotate-0 transition-transform" style={{ rotate: `${(i % 2 === 0 ? -2 : 2)}deg` }}>
            <div className="text-3xl mb-1">{pain.emoji}</div>
            <div className="text-xl font-bold text-[#1A1A1A]">{pain.text}</div>
          </div>
        ))}
      </div>
    </div>
  </Slide>,

  // Slide 5: Eureka - Lightbulb Explosion
  <Slide key="5" backgroundColor="bg-[#F7F052]">
    <div className="h-full flex flex-col justify-center items-center space-y-8">
      {/* Lightbulb explosion */}
      <div className="relative">
        <div className="text-9xl">💡</div>
        <StarBurst className="absolute -top-8 -left-8 w-32 h-32 text-[#FF6B35] opacity-80" />
        <StarBurst className="absolute -top-8 -right-8 w-28 h-28 text-[#E63946] opacity-70" />
        <StarBurst className="absolute -bottom-4 left-0 w-24 h-24 text-[#00B4D8] opacity-60" />
      </div>

      {/* EUREKA text */}
      <div className="text-9xl font-black text-[#1A1A1A] transform -rotate-3">
        EUREKA!
      </div>

      {/* Data insight box */}
      <BrutalistBox className="bg-[#FFFEF2] p-10 max-w-3xl" borderColor="border-[#1A1A1A]">
        <div className="text-3xl font-bold text-[#1A1A1A] text-center mb-6">
          86% 관광약자 선호:
        </div>
        <div className="space-y-4 text-2xl text-[#1A1A1A]">
          <div className="flex items-center justify-center gap-4">
            <span className="text-3xl">🌲</span>
            <span className="font-bold">숲·오름</span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <span className="text-3xl">🏘️</span>
            <span className="font-bold">읍면 지역</span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <span className="text-3xl">🎨</span>
            <span className="font-bold">체험 콘텐츠</span>
          </div>
        </div>
        <div className="border-t-4 border-[#1A1A1A] my-6" />
        <div className="text-4xl font-black text-center text-[#1A1A1A]">
          = 언더투어리즘 지역!
        </div>
      </BrutalistBox>

      {/* Equation at bottom */}
      <div className="flex items-center justify-center gap-6 text-2xl font-bold">
        <div className="bg-[#FF6B35] text-white px-6 py-3 border-4 border-[#1A1A1A]">
          관광약자 선호
        </div>
        <div className="text-5xl font-black text-[#1A1A1A]">＋</div>
        <div className="bg-[#00B4D8] text-white px-6 py-3 border-4 border-[#1A1A1A]">
          소외 지역
        </div>
        <div className="text-5xl font-black text-[#1A1A1A]">=</div>
        <div className="bg-[#06FFA5] text-[#1A1A1A] px-6 py-3 border-4 border-[#1A1A1A]">
          완벽한 매칭
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 6: Differentiation - Tournament Bracket
  <Slide key="6" backgroundColor="bg-[#FFFEF2]">
    <div className="h-full flex flex-col justify-center space-y-6">
      {/* Title */}
      <h2 className="text-6xl font-black text-[#1A1A1A] text-center mb-8">
        <span className="text-5xl">🆚</span> 왜 우리는 다른가?
      </h2>

      {/* Battle cards */}
      <div className="space-y-6 max-w-4xl mx-auto">
        {/* Card 1 */}
        <BrutalistBox className="bg-white p-6" borderColor="border-[#1A1A1A]">
          <div className="border-b-3 border-[#1A1A1A] pb-3 mb-4">
            <h3 className="text-2xl font-black text-[#1A1A1A]">vs 비짓제주 실시간혼잡도</h3>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="text-xl font-bold text-[#E63946]">THEM:</div>
              <div className="text-lg text-[#1A1A1A]">"여기 혼잡함" →<br/><span className="text-base text-gray-600">(정보만 제공)</span></div>
            </div>
            <div className="space-y-2 relative">
              <div className="text-xl font-bold text-[#06FFA5]">US:</div>
              <div className="text-lg text-[#1A1A1A]">"B 목장으로 변경" →<br/><span className="text-base font-bold">(문제 해결)</span></div>
              <div className="absolute -right-8 top-0 bg-[#F7F052] text-[#1A1A1A] px-3 py-1 border-2 border-[#1A1A1A] font-black rotate-12">
                WIN!
              </div>
            </div>
          </div>
        </BrutalistBox>

        {/* Card 2 */}
        <BrutalistBox className="bg-white p-6" borderColor="border-[#1A1A1A]">
          <div className="border-b-3 border-[#1A1A1A] pb-3 mb-4">
            <h3 className="text-2xl font-black text-[#1A1A1A]">vs 이지제주 / 휠내비길</h3>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="text-xl font-bold text-[#E63946]">THEM:</div>
              <div className="text-lg text-[#1A1A1A]">13.5% 시장<br/><span className="text-base text-gray-600">(무장애)</span></div>
            </div>
            <div className="space-y-2 relative">
              <div className="text-xl font-bold text-[#06FFA5]">US:</div>
              <div className="text-lg text-[#1A1A1A]">86% 시장<br/><span className="text-base font-bold">(시니어+영유아)</span></div>
              <div className="absolute -right-8 top-0 bg-[#F7F052] text-[#1A1A1A] px-3 py-1 border-2 border-[#1A1A1A] font-black rotate-12">
                WIN!
              </div>
            </div>
          </div>
        </BrutalistBox>
      </div>

      {/* Bottom highlight */}
      <div className="text-center">
        <div className="inline-block bg-[#1A1A1A] text-white px-12 py-6 border-4 border-[#1A1A1A] shadow-[8px_8px_0px] shadow-[#FF6B35]">
          <div className="text-4xl font-black">6.5배 더 큰 시장</div>
          <div className="text-2xl font-bold mt-2">+ 능동적 해결</div>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 7: Data Engine - Circuit Board
  <Slide key="7" backgroundColor="bg-[#1A1A1A]">
    <div className="h-full flex flex-col justify-center space-y-8">
      {/* Title */}
      <h2 className="text-5xl font-black text-white text-center mb-6">
        <span className="text-4xl">⚙️</span> 데이터 엔진 작동 원리
      </h2>

      {/* Three step boxes - stair step */}
      <div className="flex flex-col items-center space-y-6 relative">
        {/* Step 1 */}
        <div className="relative" style={{ marginLeft: '-200px' }}>
          <BrutalistBox className="bg-[#FFFEF2] p-8 w-80" borderColor="border-[#E63946]">
            <h3 className="text-3xl font-black text-[#1A1A1A] mb-4" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              ① 지역 정의
            </h3>
            <div className="space-y-2 text-lg text-[#1A1A1A]">
              <div>• 방문객 하위 20%</div>
              <div>• 매출 하위 20%</div>
            </div>
          </BrutalistBox>
          <ChunkyArrow className="absolute -right-12 top-1/2 w-16 h-8 text-[#F7F052]" direction="right" />
        </div>

        {/* Step 2 */}
        <div className="relative">
          <BrutalistBox className="bg-[#FFFEF2] p-8 w-80" borderColor="border-[#FF6B35]">
            <h3 className="text-3xl font-black text-[#1A1A1A] mb-4" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              ② 프로필 생성
            </h3>
            <div className="space-y-2 text-lg text-[#1A1A1A]">
              <div>• 선호 분석</div>
              <div>• 키워드 매칭</div>
            </div>
          </BrutalistBox>
          <ChunkyArrow className="absolute -right-12 top-1/2 w-16 h-8 text-[#F7F052]" direction="right" />
        </div>

        {/* Step 3 */}
        <div className="relative" style={{ marginLeft: '200px' }}>
          <BrutalistBox className="bg-[#FFFEF2] p-8 w-80" borderColor="border-[#06FFA5]">
            <h3 className="text-3xl font-black text-[#1A1A1A] mb-4" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              ③ 코스 생성
            </h3>
            <div className="space-y-2 text-lg text-[#1A1A1A]">
              <div>• 자동 매칭</div>
              <div>• 안심 루트</div>
            </div>
          </BrutalistBox>
        </div>
      </div>

      {/* Code block at bottom */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#2A2A2A] border-4 border-[#06FFA5] p-6 text-[#06FFA5]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          <div className="text-xl space-y-1">
            <div>$ node generate.js</div>
            <div className="text-white">&gt; 소외지역 + 약자선호</div>
            <div className="text-[#F7F052]">&gt; = 최적 안심 코스 ✓</div>
          </div>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 8: Profiling - Trading Cards with Screenshot
  <Slide key="8" backgroundColor="bg-[#FFFEF2]">
    <div className="h-full flex flex-col justify-center space-y-6">
      {/* Title */}
      <h2 className="text-5xl font-black text-[#1A1A1A] text-center mb-4">
        <span className="text-4xl">👥</span> [기능 1] 스마트 프로파일링
      </h2>

      {/* 5 Profile cards - fanned */}
      <div className="flex justify-center items-end gap-4 mb-6">
        {[
          { emoji: '🚶', title: 'ACTIVE', subtitle: 'SENIOR', color: 'border-[#00B4D8]' },
          { emoji: '☕', title: 'CARE', subtitle: 'SENIOR', color: 'border-[#FF6B35]' },
          { emoji: '👨‍👩‍👧', title: 'TODDLER', subtitle: 'FAMILY', color: 'border-[#06FFA5]' },
          { emoji: '👶', title: 'INFANT', subtitle: 'FAMILY', color: 'border-[#F7F052]' },
          { emoji: '✈️', title: 'GENERAL', subtitle: 'TOURIST', color: 'border-[#1A1A1A]' }
        ].map((profile, i) => (
          <div
            key={i}
            className={`bg-white ${profile.color} border-4 p-4 w-32 shadow-[4px_4px_0px] shadow-black/30 transform hover:scale-110 transition-transform`}
            style={{ rotate: `${(i - 2) * 3}deg`, marginTop: `${Math.abs(i - 2) * 10}px` }}
          >
            <div className="text-4xl text-center mb-2">{profile.emoji}</div>
            <div className="text-center">
              <div className="text-sm font-black text-[#1A1A1A]">{profile.title}</div>
              <div className="text-xs font-bold text-gray-600">{profile.subtitle}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Screenshot */}
      <div className="relative mx-auto transform -rotate-1">
        <BrutalistBox className="bg-white p-2 max-w-3xl" borderColor="border-[#1A1A1A]">
          <Image
            src="/screenshots/jeju-again-homepage-hero.png"
            alt="Profile Selection Interface"
            width={800}
            height={450}
            className="w-full h-auto"
          />
        </BrutalistBox>
        <div className="absolute -bottom-6 -right-6 bg-[#F7F052] text-[#1A1A1A] px-4 py-2 border-3 border-[#1A1A1A] font-bold text-sm rotate-6">
          실제 화면 →
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 9: Navigation Feature - Road Map with Screenshot
  <Slide key="9" backgroundColor="bg-[#FFFEF2]">
    <div className="h-full flex flex-col justify-center space-y-6">
      {/* Title */}
      <h2 className="text-5xl font-black text-[#1A1A1A] text-center mb-6">
        <span className="text-4xl">🗺️</span> [기능 2] 안심 & 상생 내비게이션
      </h2>

      {/* Comparison - side by side */}
      <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Left - General Nav */}
        <div className="border-4 border-[#E63946] bg-red-50 p-6">
          <h3 className="text-2xl font-black text-[#1A1A1A] mb-4 border-b-3 border-[#E63946] pb-2">
            일반 내비게이션
          </h3>
          <div className="space-y-3 text-xl text-[#1A1A1A]">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <span>최단시간</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔥</span>
              <span>유명지</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">👥</span>
              <span>혼잡 무시</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">❌</span>
              <span>획일적</span>
            </div>
          </div>
          <ScribbleX className="absolute top-2 right-2 w-12 h-12 text-[#E63946]" />
        </div>

        {/* Right - JejU-Again */}
        <BrutalistBox className="bg-green-50 p-6" borderColor="border-[#06FFA5]" shadowColor="shadow-[#06FFA5]/40">
          <h3 className="text-2xl font-black text-[#1A1A1A] mb-4 border-b-3 border-[#06FFA5] pb-2">
            JEJU-AGAIN
          </h3>
          <div className="space-y-3 text-xl text-[#1A1A1A]">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💚</span>
              <span className="font-bold">편안한 길</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏘️</span>
              <span className="font-bold">읍면지역</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🚫</span>
              <span className="font-bold">혼잡회피</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎯</span>
              <span className="font-bold">맞춤 POI</span>
            </div>
          </div>
          <CheckmarkScribble className="absolute top-2 right-2 w-12 h-12 text-[#06FFA5]" />
        </BrutalistBox>
      </div>

      {/* Screenshot placeholder - would show map with route */}
      <div className="text-center text-xl font-bold text-gray-500">
        (Map visualization integrated in actual app)
      </div>
    </div>
  </Slide>,

  // Slide 10: Real-time Alerts - Notification UI
  <Slide key="10" backgroundColor="bg-[#F7F052]">
    <div className="h-full flex flex-col justify-center items-center space-y-8">
      {/* Title */}
      <h2 className="text-5xl font-black text-[#1A1A1A] text-center mb-4">
        <span className="text-4xl">🔔</span> [기능 3] 실시간 안심 알림
      </h2>

      {/* Mock notification */}
      <div className="relative">
        <BrutalistBox className="bg-white p-8 w-[500px]" borderColor="border-[#1A1A1A]">
          <div className="bg-[#E63946] text-white px-4 py-2 font-bold text-xl mb-6 border-b-4 border-[#1A1A1A]">
            ⚠️ CONGESTION ALERT
          </div>

          {/* Current location - crowded */}
          <div className="mb-6">
            <div className="text-2xl font-bold text-[#1A1A1A] mb-3">"성산일출봉"</div>
            <div className="text-lg text-gray-600 mb-2">현재 혼잡도:</div>
            <div className="flex items-center gap-4">
              <div className="bg-[#E63946] text-white px-6 py-3 text-3xl font-black border-4 border-[#1A1A1A]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                80%
              </div>
              <div className="text-4xl">😡</div>
              <div className="text-2xl font-bold text-[#E63946]">CROWDED</div>
            </div>
          </div>

          {/* Alternative - quiet */}
          <div className="mb-6 bg-green-50 p-4 rounded-lg border-3 border-[#06FFA5]">
            <div className="text-2xl font-bold text-[#1A1A1A] mb-3">"섭지코지 숲길"</div>
            <div className="text-lg text-gray-600 mb-2">대안 장소 (10분):</div>
            <div className="flex items-center gap-4">
              <div className="bg-[#06FFA5] text-[#1A1A1A] px-6 py-3 text-2xl font-black border-4 border-[#1A1A1A]">
                QUIET
              </div>
              <div className="text-4xl">😊</div>
              <div className="text-2xl font-bold text-[#06FFA5]">한적함</div>
            </div>
          </div>

          {/* Action button */}
          <button className="w-full bg-[#00B4D8] text-white py-4 text-xl font-black border-4 border-[#1A1A1A] shadow-[4px_4px_0px] shadow-black/40 hover:shadow-[2px_2px_0px] transition-all">
            경로 변경하기
          </button>
        </BrutalistBox>

        {/* Hand pointer */}
        <div className="absolute -right-16 bottom-12 text-6xl animate-bounce">
          👈
        </div>
      </div>

      {/* Bottom highlight */}
      <div className="bg-[#1A1A1A] text-white px-12 py-4 text-3xl font-black border-4 border-[#1A1A1A]">
        능동적 개입 시스템 = 차별점
      </div>
    </div>
  </Slide>,

  // Slide 11: AI Engine - Tech Focus
  <Slide key="11" backgroundColor="bg-[#1A1A1A]">
    <div className="h-full flex flex-col justify-center items-center space-y-8">
      {/* Title */}
      <h2 className="text-5xl font-black text-white text-center mb-6">
        <span className="text-4xl">🤖</span> AI 맞춤형 코스 생성 엔진
      </h2>

      {/* Chip design */}
      <div className="relative">
        <BrutalistBox className="bg-[#00B4D8] p-12 text-center" borderColor="border-[#06FFA5]">
          <div className="text-6xl font-black text-white mb-4" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            CLAUDE SONNET
          </div>
          <div className="text-4xl font-bold text-white mb-6">4.0</div>
          <div className="flex justify-center gap-4 text-white text-3xl">
            <div>╱╲</div>
            <div>╱╲</div>
            <div>╱╲</div>
          </div>
          <div className="flex justify-center gap-4 mt-2 text-white text-2xl">
            <div>││</div>
            <div>││</div>
            <div>││</div>
          </div>
        </BrutalistBox>

        {/* Output boxes */}
        <div className="flex justify-center gap-6 mt-8">
          <BrutalistBox className="bg-[#FF6B35] p-6 text-center" borderColor="border-[#FF6B35]">
            <div className="text-white font-black text-2xl mb-2">DATA</div>
            <div className="text-white text-lg">분석</div>
          </BrutalistBox>
          <BrutalistBox className="bg-[#06FFA5] p-6 text-center" borderColor="border-[#06FFA5]">
            <div className="text-[#1A1A1A] font-black text-2xl mb-2">MATCH</div>
            <div className="text-[#1A1A1A] text-lg">최적화</div>
          </BrutalistBox>
          <BrutalistBox className="bg-[#F7F052] p-6 text-center" borderColor="border-[#F7F052]">
            <div className="text-[#1A1A1A] font-black text-2xl mb-2">REASON</div>
            <div className="text-[#1A1A1A] text-lg">설명</div>
          </BrutalistBox>
        </div>
      </div>

      {/* Code prompt */}
      <div className="bg-[#2A2A2A] border-4 border-[#06FFA5] p-6 max-w-2xl w-full" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        <div className="text-[#06FFA5] space-y-2">
          <div className="text-lg">$ generate_itinerary.sh</div>
          <div className="text-lg">--profile=ACTIVE_SENIOR</div>
          <div className="text-lg">--avoid=CROWDED</div>
          <div className="text-lg">--include=local_shops</div>
          <div className="text-lg">--output=JSON</div>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 12: Data Sources - Filing Cabinet with Screenshot
  <Slide key="12" backgroundColor="bg-[#FFFEF2]">
    <div className="h-full flex flex-col justify-center space-y-6">
      {/* Title */}
      <h2 className="text-5xl font-black text-[#1A1A1A] text-center mb-4">
        <span className="text-4xl">📊</span> 실제 데이터 활용
      </h2>

      <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Left - Data sources */}
        <div className="space-y-4">
          <BrutalistBox className="bg-white p-6" borderColor="border-[#00B4D8]">
            <div className="flex items-center gap-3 mb-4 border-b-3 border-[#00B4D8] pb-3">
              <span className="text-3xl">✈️</span>
              <h3 className="text-2xl font-black text-[#1A1A1A]">입도·이동 통계</h3>
            </div>
            <div className="space-y-2 text-lg text-[#1A1A1A]">
              <div>• 내국인 (2019-2025)</div>
              <div>• 외국인 (2019-2025)</div>
              <div>• 지역별 현황</div>
            </div>
          </BrutalistBox>

          <BrutalistBox className="bg-white p-6" borderColor="border-[#FF6B35]">
            <div className="flex items-center gap-3 mb-4 border-b-3 border-[#FF6B35] pb-3">
              <span className="text-3xl">💳</span>
              <h3 className="text-2xl font-black text-[#1A1A1A]">생산·소비 통계</h3>
            </div>
            <div className="space-y-2 text-lg text-[#1A1A1A]">
              <div>• 월간 소비 (2013-2025)</div>
              <div>• 업종별 분석</div>
              <div>• 지역별 매출</div>
            </div>
          </BrutalistBox>
        </div>

        {/* Right - Screenshot */}
        <div className="relative transform rotate-2">
          <BrutalistBox className="bg-white p-2" borderColor="border-[#1A1A1A]">
            <Image
              src="/screenshots/jeju-again-statistics.png"
              alt="Statistics Dashboard"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </BrutalistBox>
          <div className="absolute -bottom-4 -left-4 bg-[#E63946] text-white px-4 py-2 border-3 border-[#1A1A1A] font-bold text-sm -rotate-6">
            ← 실제 통계
          </div>
        </div>
      </div>

      {/* Data source stamp */}
      <div className="text-center">
        <StampBox className="inline-block px-8 py-4" color="border-[#E63946]">
          <div className="text-xl font-bold text-[#E63946]">📌 data.ijto.or.kr</div>
          <div className="text-lg text-[#1A1A1A]">공식 데이터 출처</div>
        </StampBox>
      </div>
    </div>
  </Slide>,

  // Slide 13: Impact - Medal Podium
  <Slide key="13" backgroundColor="bg-[#FFFEF2]">
    <div className="h-full flex flex-col justify-center space-y-8">
      {/* Title */}
      <h2 className="text-6xl font-black text-[#1A1A1A] text-center mb-6">
        <span className="text-5xl">🎉</span> 기대효과
      </h2>

      {/* Three podiums */}
      <div className="flex items-end justify-center gap-8 max-w-4xl mx-auto">
        {/* Silver - 2nd place */}
        <div className="w-64">
          <BrutalistBox className="bg-white p-6 text-center" borderColor="border-gray-400" shadowColor="shadow-gray-400/40">
            <div className="text-5xl mb-4">🥈</div>
            <div className="text-2xl font-black text-[#1A1A1A] mb-2">對 지역경제</div>
            <div className="border-t-4 border-gray-400 my-4" />
            <div className="text-4xl font-black text-[#1A1A1A] mb-2">소상공인</div>
            <div className="text-2xl font-bold text-gray-600">상생</div>
          </BrutalistBox>
        </div>

        {/* Gold - 1st place */}
        <div className="w-64">
          <BrutalistBox className="bg-white p-8 text-center" borderColor="border-[#F7F052]" shadowColor="shadow-[#F7F052]/60">
            <div className="text-6xl mb-4">🥇</div>
            <div className="text-3xl font-black text-[#1A1A1A] mb-2">對 관광객</div>
            <div className="border-t-4 border-[#F7F052] my-4" />
            <div className="text-5xl font-black text-[#1A1A1A] mb-2">128만 명</div>
            <div className="text-2xl font-bold text-gray-600">만족</div>
            <StarBurst className="absolute -top-8 -left-8 w-24 h-24 text-[#F7F052]" />
            <StarBurst className="absolute -top-8 -right-8 w-20 h-20 text-[#FF6B35]" />
          </BrutalistBox>
        </div>

        {/* Bronze - 3rd place */}
        <div className="w-64">
          <BrutalistBox className="bg-white p-6 text-center" borderColor="border-[#FF6B35]" shadowColor="shadow-[#FF6B35]/40">
            <div className="text-5xl mb-4">🥉</div>
            <div className="text-2xl font-black text-[#1A1A1A] mb-2">對 제주정책</div>
            <div className="border-t-4 border-[#FF6B35] my-4" />
            <div className="text-4xl font-black text-[#1A1A1A] mb-2">3대 난제</div>
            <div className="text-2xl font-bold text-gray-600">해결</div>
          </BrutalistBox>
        </div>
      </div>

      {/* Bottom highlight */}
      <div className="text-center">
        <BrutalistBox className="inline-block bg-[#06FFA5] px-12 py-6" borderColor="border-[#1A1A1A]">
          <div className="text-4xl font-black text-[#1A1A1A]">단일 솔루션으로</div>
          <div className="text-3xl font-bold text-[#1A1A1A] mt-2">→ 거대 임팩트 창출</div>
        </BrutalistBox>
      </div>
    </div>
  </Slide>,

  // Slide 14: Tech Stack - Sticker Bomb
  <Slide key="14" backgroundColor="bg-[#1A1A1A]">
    <div className="h-full flex flex-col justify-center items-center space-y-8">
      {/* Title */}
      <h2 className="text-5xl font-black text-white text-center mb-6">
        <span className="text-4xl">⚡</span> 기술 스택
      </h2>

      {/* Scattered tech stickers */}
      <div className="relative w-full max-w-4xl h-96">
        {/* Next.js */}
        <div className="absolute top-12 left-24 transform -rotate-6">
          <div className="bg-white border-4 border-[#1A1A1A] px-8 py-6 shadow-[6px_6px_0px] shadow-white/20">
            <div className="text-4xl mb-2">▲</div>
            <div className="text-2xl font-black text-[#1A1A1A]">Next.js</div>
            <div className="text-xl font-bold text-gray-600">16</div>
          </div>
        </div>

        {/* Claude */}
        <div className="absolute top-8 right-32 transform rotate-3">
          <BrutalistBox className="bg-[#FF6B35] px-8 py-6" borderColor="border-[#FF6B35]">
            <div className="text-2xl font-black text-white">Claude</div>
            <div className="text-xl font-bold text-white">Sonnet 4.0</div>
          </BrutalistBox>
        </div>

        {/* TypeScript */}
        <div className="absolute top-40 left-48 transform rotate-12">
          <BrutalistBox className="bg-[#00B4D8] px-8 py-6" borderColor="border-[#00B4D8]">
            <div className="text-2xl font-black text-white">TypeScript</div>
          </BrutalistBox>
        </div>

        {/* Tailwind */}
        <div className="absolute top-48 left-12 transform -rotate-12">
          <BrutalistBox className="bg-[#06FFA5] px-8 py-6" borderColor="border-[#06FFA5]">
            <div className="text-2xl font-black text-[#1A1A1A]">Tailwind</div>
            <div className="text-xl font-bold text-[#1A1A1A]">CSS v4</div>
          </BrutalistBox>
        </div>

        {/* Naver Maps */}
        <div className="absolute bottom-32 right-24 transform rotate-6">
          <BrutalistBox className="bg-white px-8 py-6" borderColor="border-green-600">
            <div className="text-2xl font-black text-[#1A1A1A]">Naver</div>
            <div className="text-xl font-bold text-gray-600">Maps</div>
          </BrutalistBox>
        </div>

        {/* Vercel */}
        <div className="absolute bottom-24 left-32 transform -rotate-3">
          <div className="bg-[#1A1A1A] border-4 border-white px-8 py-6 shadow-[6px_6px_0px] shadow-white/20">
            <div className="text-2xl font-black text-white">Vercel</div>
            <div className="text-xl font-bold text-gray-400">Deploy</div>
          </div>
        </div>

        {/* Framer Motion */}
        <div className="absolute top-56 right-48 transform rotate-9">
          <div className="bg-white border-4 border-[#1A1A1A] px-6 py-4 shadow-[4px_4px_0px] shadow-white/20">
            <div className="text-xl font-black text-[#1A1A1A]">Framer</div>
            <div className="text-lg font-bold text-gray-600">Motion</div>
          </div>
        </div>

        {/* Google Sheets */}
        <div className="absolute bottom-12 right-56 transform -rotate-6">
          <BrutalistBox className="bg-white px-6 py-4" borderColor="border-[#1A1A1A]">
            <div className="text-xl font-black text-[#1A1A1A]">Google</div>
            <div className="text-lg font-bold text-gray-600">Sheets</div>
          </BrutalistBox>
        </div>
      </div>

      {/* Bottom badge */}
      <div className="bg-[#F7F052] text-[#1A1A1A] px-12 py-4 text-2xl font-black border-4 border-[#F7F052]">
        ━━━━━━━━━━━━━━━━━━━━━━
        <div>PRODUCTION READY 2025</div>
        ━━━━━━━━━━━━━━━━━━━━━━
      </div>
    </div>
  </Slide>,

  // Slide 15: Proposal - Urgent Stamp Style
  <Slide key="15" backgroundColor="bg-[#FFFEF2]">
    <div className="h-full flex flex-col justify-center space-y-8">
      {/* Title */}
      <h2 className="text-6xl font-black text-[#1A1A1A] text-center mb-6">
        <span className="text-5xl">💡</span> 활용 제안
      </h2>

      {/* Critical request */}
      <div className="relative max-w-3xl mx-auto">
        <BrutalistBox className="bg-red-50 p-8" borderColor="border-[#E63946]" shadowColor="shadow-[#E63946]/60">
          <div className="bg-[#E63946] text-white px-6 py-3 text-2xl font-black text-center mb-6 border-b-4 border-[#1A1A1A]">
            🔴 CRITICAL REQUEST
          </div>

          <h3 className="text-3xl font-black text-[#1A1A1A] mb-6 text-center">
            실시간 데이터 API 공개
          </h3>

          <div className="bg-white border-4 border-[#1A1A1A] p-6 mb-6">
            <div className="space-y-3 text-xl text-[#1A1A1A]">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <span>관광객 분포</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🚗</span>
                <span>차량 분포</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⏱️</span>
                <span>5분 단위</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xl">
            <div className="flex items-center gap-3">
              <span className="text-3xl">❌</span>
              <span className="font-bold text-[#E63946]">현재: 불가능</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">✅</span>
              <span className="font-bold text-[#06FFA5]">요청: API 공개</span>
            </div>
          </div>
        </BrutalistBox>

        {/* Urgent overlay */}
        <div className="absolute -top-6 -right-6 bg-[#F7F052] text-[#1A1A1A] px-6 py-3 border-4 border-[#1A1A1A] font-black text-xl rotate-12 shadow-[4px_4px_0px] shadow-black/40">
          URGENT
        </div>
      </div>

      {/* Optional request */}
      <div className="max-w-2xl mx-auto">
        <div className="border-4 border-[#00B4D8] bg-blue-50 p-6">
          <div className="bg-[#00B4D8] text-white px-6 py-2 text-xl font-black text-center mb-4">
            🔵 OPTIONAL REQUEST
          </div>
          <h3 className="text-2xl font-black text-[#1A1A1A] text-center">
            무장애 데이터 통합
          </h3>
          <div className="text-center text-4xl mt-4">
            ♿🚼🅿️
          </div>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 16: Final Slide - Compact to fit viewport
  <Slide key="16" backgroundColor="bg-[#FFFEF2]">
    <div className="h-full flex flex-col justify-center items-center space-y-6 py-8">
      {/* Top - brand - Reduced size */}
      <div className="text-center">
        <div className="text-5xl mb-2">🏝️</div>
        <h1 className="text-6xl font-black text-[#1A1A1A] mb-2">
          JEJU-AGAIN
        </h1>
        <p className="text-3xl font-bold text-[#1A1A1A]">제주어게인</p>
      </div>

      {/* Tagline with marker - Reduced size */}
      <div className="text-center relative">
        <p className="text-2xl font-light text-[#1A1A1A]">
          "가장 빠른 길이 아닌,
        </p>
        <MarkerHighlight className="text-2xl font-bold text-[#1A1A1A] inline-block mt-1" style={{ color: '#FF6B35' }}>
          가장 편안한 길"
        </MarkerHighlight>
        <WobblyUnderline className="mt-1 text-[#FF6B35] w-72 mx-auto" />
      </div>

      {/* Live Demo Card - Reduced padding and size */}
      <div className="relative transform -rotate-1 max-w-lg">
        <BrutalistBox className="bg-white p-5" borderColor="border-[#FF6B35]" shadowColor="shadow-[#FF6B35]/40">
          <div className="text-3xl font-black text-[#1A1A1A] mb-4 flex items-center justify-center gap-2">
            <span>🚀</span>
            <span>LIVE DEMO</span>
          </div>
          <div className="relative">
            <Image
              src="/screenshots/jeju-again-homepage-hero.png"
              alt="Live Demo"
              width={350}
              height={220}
              className="w-full h-auto border-3 border-[#1A1A1A]"
            />
          </div>
        </BrutalistBox>
        <ChunkyArrow className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 text-[#FF6B35]" direction="down" />
      </div>

      {/* Contest badge at bottom - Reduced padding */}
      <div className="bg-[#FF6B35] text-white px-10 py-3 text-lg font-black border-4 border-[#1A1A1A] shadow-[6px_6px_0px] shadow-black/40">
        <div>2025 제주관광 데이터 활용 공모전</div>
      </div>
    </div>
  </Slide>,
];
