import Slide from './components/Slide';

export const slides = [
  // Slide 1: 임팩트 있는 표지
  <Slide key="1" backgroundColor="bg-gradient-to-br from-blue-700 via-purple-700 to-pink-600">
    <div className="text-center text-white space-y-10">
      <div className="text-8xl mb-12 animate-bounce">🏝️</div>
      <h1 className="text-7xl font-black mb-6 tracking-tight">
        JejU-Again
      </h1>
      <h2 className="text-5xl font-bold mb-8 text-blue-100">
        제주어게인
      </h2>
      <div className="bg-white/10 backdrop-blur-md px-12 py-6 rounded-2xl inline-block mb-8">
        <p className="text-3xl font-semibold leading-relaxed">
          데이터 기반 <span className="text-yellow-300">'관광약자-지역상생'</span><br/>
          맞춤형 내비게이션
        </p>
      </div>
      <div className="text-4xl font-light italic text-blue-100 mb-12 border-t-2 border-b-2 border-white/30 py-6">
        "가장 빠른 길이 아닌, 가장 편안한 길"
      </div>
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-5 rounded-xl inline-block shadow-2xl">
        <p className="text-2xl font-black">2025 제주관광 데이터 활용 공모전 출품작</p>
      </div>
    </div>
  </Slide>,

  // Slide 2: 충격적인 문제 제시 - 숫자로 말하다
  <Slide key="2" backgroundColor="bg-black">
    <div className="space-y-12">
      <h2 className="text-6xl font-black text-white mb-12 text-center">
        <span className="text-red-500">⚠️</span> 제주 관광의 민낯
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* 왼쪽: 오버투어리즘 */}
        <div className="bg-gradient-to-br from-red-600 to-red-800 p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform">
          <div className="text-center mb-8">
            <div className="text-9xl font-black text-white mb-4">90%</div>
            <div className="text-3xl font-bold text-red-100">쏠림 현상</div>
          </div>
          <div className="space-y-4 text-white text-xl">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🏖️</span>
              <span>특정 해안가에 관광객 과밀화</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">😫</span>
              <span>관광객 만족도 저하</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">💢</span>
              <span>주민 피로도 급증</span>
            </div>
          </div>
        </div>

        {/* 오른쪽: 언더투어리즘 */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-900 p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform">
          <div className="text-center mb-8">
            <div className="text-9xl font-black text-white mb-4">10%</div>
            <div className="text-3xl font-bold text-blue-100">소외 지역</div>
          </div>
          <div className="space-y-4 text-white text-xl">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🏘️</span>
              <span>읍면 지역 상권 침체</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">📉</span>
              <span>관광 수익 불균형</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">🚫</span>
              <span>지역 균형 발전 저해</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-8 rounded-2xl text-center">
        <p className="text-4xl font-black text-white">
          이 두 문제를 <span className="text-black">동시에</span> 해결할 수 있다면?
        </p>
      </div>
    </div>
  </Slide>,

  // Slide 3: 86% 충격 - 거대 시장 발견
  <Slide key="3" backgroundColor="bg-gradient-to-br from-orange-500 via-red-500 to-pink-600">
    <div className="space-y-10">
      <h2 className="text-6xl font-black text-white mb-8 text-center">
        <span className="text-yellow-300">👥</span> 정책의 사각지대를 발견하다
      </h2>

      {/* 거대한 86% 숫자 */}
      <div className="bg-white/20 backdrop-blur-xl p-12 rounded-3xl text-center mb-8">
        <div className="text-[12rem] font-black text-white leading-none mb-4">
          86%
        </div>
        <div className="text-4xl font-bold text-yellow-200 mb-6">
          연간 148만 명의 '진짜' 관광약자
        </div>
        <div className="text-2xl text-white/90">
          하지만 <span className="text-red-200 font-bold">정책 지원은 0%</span>
        </div>
      </div>

      {/* 구성 비율 */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-600 p-8 rounded-2xl shadow-xl">
          <div className="text-8xl text-center mb-4">👴👵</div>
          <div className="text-6xl font-black text-white text-center mb-2">51%</div>
          <div className="text-2xl font-bold text-blue-100 text-center mb-3">65세 이상 시니어</div>
          <div className="text-xl text-white text-center">연 75만 명</div>
        </div>

        <div className="bg-pink-600 p-8 rounded-2xl shadow-xl">
          <div className="text-8xl text-center mb-4">👶👨‍👩‍👧</div>
          <div className="text-6xl font-black text-white text-center mb-2">35%</div>
          <div className="text-2xl font-bold text-pink-100 text-center mb-3">4세 이하 영유아 동반</div>
          <div className="text-xl text-white text-center">연 52만 명</div>
        </div>
      </div>

      {/* 기존 정책 비교 */}
      <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-center">
            <div className="text-5xl font-bold text-red-400 mb-2">13.5%</div>
            <div className="text-xl text-white">기존 정책 대상<br/>(휠체어 등 무장애)</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-green-400 mb-2">6.5배</div>
            <div className="text-xl text-white">더 큰 시장<br/>(시니어 + 영유아)</div>
          </div>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 4: 진짜 불편함 - 경험적 장벽
  <Slide key="4">
    <div className="space-y-10">
      <h2 className="text-6xl font-black text-gray-800 mb-8 text-center">
        <span className="text-orange-600">💥</span> 진짜 불편함은 무엇인가?
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 border-4 border-red-400 p-8 rounded-2xl">
          <h3 className="text-3xl font-black text-red-700 mb-6 text-center">
            ❌ 기존 정책의 착각
          </h3>
          <div className="space-y-4 text-xl text-gray-700">
            <div className="bg-white p-4 rounded-lg">
              <p className="font-bold text-red-600 mb-2">물리적 접근성</p>
              <p>휠체어 경사로, 엘리베이터</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-bold text-red-600 mb-2">대상</p>
              <p>장애인 13.5% 시장</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-bold text-red-600 mb-2">접근</p>
              <p>시설 개선 중심</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-4 border-green-500 p-8 rounded-2xl">
          <h3 className="text-3xl font-black text-green-700 mb-6 text-center">
            ✅ 진짜 문제
          </h3>
          <div className="space-y-4 text-xl text-gray-700">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-bold text-green-600 mb-2">경험적 장벽</p>
              <p><strong>극심한 혼잡, 소음, 긴 대기시간</strong></p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-bold text-green-600 mb-2">대상</p>
              <p><strong>시니어 + 영유아 86% 시장</strong></p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-bold text-green-600 mb-2">접근</p>
              <p><strong>데이터 기반 혼잡 회피</strong></p>
            </div>
          </div>
        </div>
      </div>

      {/* 실제 고통 포인트 */}
      <div className="bg-gradient-to-r from-red-100 to-orange-100 p-8 rounded-2xl">
        <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">86% 관광약자가 겪는 실제 고통</h4>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-xl text-center">
            <div className="text-5xl mb-3">😫</div>
            <p className="font-bold text-red-600">극심한 혼잡</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center">
            <div className="text-5xl mb-3">🔊</div>
            <p className="font-bold text-orange-600">소음 스트레스</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center">
            <div className="text-5xl mb-3">⏰</div>
            <p className="font-bold text-yellow-600">긴 대기시간</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center">
            <div className="text-5xl mb-3">❓</div>
            <p className="font-bold text-purple-600">예측 불가능</p>
          </div>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 5: 유레카! - Nexus 발견
  <Slide key="5" backgroundColor="bg-gradient-to-br from-green-400 via-blue-500 to-purple-600">
    <div className="space-y-10 text-white">
      <div className="text-center mb-10">
        <div className="text-8xl mb-6">💡</div>
        <h2 className="text-7xl font-black mb-4">
          EUREKA!
        </h2>
        <p className="text-3xl font-semibold">두 문제의 교차점을 발견하다</p>
      </div>

      {/* 데이터 인사이트 */}
      <div className="bg-white/20 backdrop-blur-xl p-10 rounded-3xl mb-8">
        <h3 className="text-4xl font-bold mb-8 text-center text-yellow-300">
          🔍 데이터 분석 결과
        </h3>
        <div className="bg-white text-gray-800 p-8 rounded-2xl text-2xl leading-relaxed text-center">
          <p className="mb-6">
            <span className="text-orange-600 font-black text-4xl">86%</span> 관광약자는<br/>
            일반 관광객과 <strong className="text-blue-700">전혀 다른</strong> 선호도를 보인다
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="bg-green-100 p-6 rounded-xl">
              <div className="text-5xl mb-3">🌲</div>
              <p className="font-bold text-green-700">숲, 오름</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-xl">
              <div className="text-5xl mb-3">🏘️</div>
              <p className="font-bold text-blue-700">읍면 지역</p>
            </div>
            <div className="bg-purple-100 p-6 rounded-xl">
              <div className="text-5xl mb-3">🎨</div>
              <p className="font-bold text-purple-700">체험 콘텐츠</p>
            </div>
          </div>
        </div>
      </div>

      {/* 완벽한 매칭 */}
      <div className="bg-black/30 backdrop-blur-md p-8 rounded-2xl">
        <div className="flex items-center justify-center gap-6 text-3xl font-bold">
          <div className="bg-orange-500 px-8 py-6 rounded-xl text-center">
            <div className="text-5xl mb-2">👥</div>
            <div>86% 관광약자<br/>선호 콘텐츠</div>
          </div>
          <div className="text-6xl">⚡</div>
          <div className="bg-blue-600 px-8 py-6 rounded-xl text-center">
            <div className="text-5xl mb-2">🏘️</div>
            <div>언더투어리즘<br/>지역 자산</div>
          </div>
          <div className="text-6xl">=</div>
          <div className="bg-green-500 px-8 py-6 rounded-xl text-center">
            <div className="text-5xl mb-2">✨</div>
            <div>완벽한<br/>매칭!</div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-400 text-gray-900 p-8 rounded-2xl text-center">
        <p className="text-4xl font-black">
          단 하나의 솔루션으로 두 거대 난제 동시 해결!
        </p>
      </div>
    </div>
  </Slide>,

  // Slide 6: 차별성 - 우리가 다른 이유
  <Slide key="6">
    <div className="space-y-8">
      <h2 className="text-6xl font-black text-gray-800 mb-10 text-center">
        <span className="text-blue-600">🆚</span> 왜 우리는 다른가?
      </h2>

      {/* vs 비짓제주 */}
      <div className="bg-gradient-to-r from-red-50 to-blue-50 p-8 rounded-3xl shadow-2xl mb-8">
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
          vs. 비짓제주 '실시간 혼잡도'
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-100 border-4 border-red-400 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-6xl">❌</span>
              <span className="text-3xl font-bold text-red-700">기존 서비스</span>
            </div>
            <div className="bg-white p-6 rounded-xl mb-4">
              <p className="text-2xl text-gray-700 mb-3">"여기가 혼잡합니다"</p>
              <p className="text-xl text-red-600 font-bold">→ 수동적 정보 제공에 그침</p>
            </div>
            <div className="text-lg text-gray-600 space-y-2">
              <p>• 사용자가 직접 대안 찾아야 함</p>
              <p>• 어디로 가야 할지 모름</p>
              <p>• 결국 같은 곳으로 집중</p>
            </div>
          </div>

          <div className="bg-green-100 border-4 border-green-500 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-6xl">✅</span>
              <span className="text-3xl font-bold text-green-700">JejU-Again</span>
            </div>
            <div className="bg-white p-6 rounded-xl mb-4 shadow-lg">
              <p className="text-2xl text-gray-700 mb-3">"혼잡하니 <strong className="text-green-600">B 목장</strong>으로 변경합니다"</p>
              <p className="text-xl text-green-600 font-bold">→ 능동적 문제 해결</p>
            </div>
            <div className="text-lg text-gray-600 space-y-2">
              <p className="flex items-center gap-2">
                <span className="text-green-600">✓</span> AI가 즉시 대안 제시
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-600">✓</span> 프로필 맞춤 추천
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-600">✓</span> 자동 경로 변경
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* vs 이지제주/휠내비길 */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-3xl shadow-2xl">
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
          vs. 이지제주 / 휠내비길
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-purple-100 border-4 border-purple-400 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-6xl">❌</span>
              <span className="text-3xl font-bold text-purple-700">기존 서비스</span>
            </div>
            <div className="text-center bg-white p-8 rounded-xl mb-4">
              <div className="text-7xl font-black text-purple-600 mb-3">13.5%</div>
              <p className="text-xl font-bold text-gray-700">무장애 시장</p>
              <p className="text-gray-600 mt-2">(휠체어 등 물리적 접근성)</p>
            </div>
          </div>

          <div className="bg-green-100 border-4 border-green-500 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-6xl">✅</span>
              <span className="text-3xl font-bold text-green-700">JejU-Again</span>
            </div>
            <div className="text-center bg-white p-8 rounded-xl mb-4 shadow-lg">
              <div className="text-7xl font-black text-green-600 mb-3">86%</div>
              <p className="text-xl font-bold text-gray-700">다수 관광약자 시장</p>
              <p className="text-gray-600 mt-2">(시니어/영유아 경험적 접근성)</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center">
          <p className="text-4xl font-black">
            <span className="text-yellow-300">6.5배</span> 더 큰 시장 + 능동적 문제 해결
          </p>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 7: 데이터 엔진 - 3단계 로직
  <Slide key="7" backgroundColor="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
    <div className="space-y-8 text-white">
      <h2 className="text-6xl font-black mb-10 text-center">
        <span className="text-yellow-300">⚙️</span> 데이터 엔진 작동 원리
      </h2>

      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl mb-8">
        <h3 className="text-4xl font-bold text-center mb-8 text-yellow-300">
          3단계 과학적 알고리즘
        </h3>

        {/* 로직 1 */}
        <div className="bg-indigo-700 p-8 rounded-2xl mb-6 shadow-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-4xl font-black text-indigo-900">
              1
            </div>
            <h4 className="text-3xl font-bold">우선 유도 지역 정의</h4>
          </div>
          <div className="bg-white/20 p-6 rounded-xl mb-4">
            <p className="text-xl mb-4">플랫폼 데이터 융합 → <strong className="text-yellow-300">'비인기/저소비' 읍면지역</strong> 과학적 정의</p>
            <div className="bg-black/30 p-4 rounded-lg font-mono text-lg">
              <p><strong className="text-green-400">지역별 관광객 현황</strong> (방문객 하위 20%)</p>
              <p className="text-yellow-300">+</p>
              <p><strong className="text-blue-400">지역별 매출액</strong> (매출 하위 20%)</p>
              <p className="text-yellow-300">=</p>
              <p><strong className="text-pink-400">우선 유도 대상 지역 확정</strong></p>
            </div>
          </div>
        </div>

        {/* 로직 2 */}
        <div className="bg-purple-700 p-8 rounded-2xl mb-6 shadow-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-4xl font-black text-purple-900">
              2
            </div>
            <h4 className="text-3xl font-bold">관광약자 프로필 생성</h4>
          </div>
          <div className="bg-white/20 p-6 rounded-xl">
            <p className="text-xl mb-4">약자 유형별 선호 콘텐츠(POI) <strong className="text-yellow-300">데이터로 정의</strong></p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-500 p-4 rounded-lg">
                <p className="font-bold mb-2">지역별 여행 키워드</p>
                <p className="text-sm">'숲', '오름', '아이와', '체험'</p>
              </div>
              <div className="bg-green-500 p-4 rounded-lg">
                <p className="font-bold mb-2">한라산 탐방객</p>
                <p className="text-sm">저강도 탐방로 선호</p>
              </div>
              <div className="bg-pink-500 p-4 rounded-lg">
                <p className="font-bold mb-2">골프장 내장객</p>
                <p className="text-sm">액티브 시니어 선호</p>
              </div>
            </div>
          </div>
        </div>

        {/* 로직 3 */}
        <div className="bg-pink-700 p-8 rounded-2xl shadow-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-4xl font-black text-pink-900">
              3
            </div>
            <h4 className="text-3xl font-bold">안심 코스 자동 생성</h4>
          </div>
          <div className="bg-white/20 p-6 rounded-xl">
            <p className="text-xl mb-4"><strong className="text-yellow-300">[로직 1] 소외 지역</strong> + <strong className="text-green-300">[로직 2] 약자 선호 POI</strong> = <strong className="text-pink-300">최적 매칭</strong></p>
            <div className="bg-black/30 p-4 rounded-lg">
              <p className="mb-2">• <strong className="text-blue-400">차량분포도</strong> (이전/이후 방문지) 활용</p>
              <p className="mb-2">• 관광객의 <strong className="text-green-400">자연스러운 이동 동선</strong> 기반</p>
              <p>• <strong className="text-yellow-400">최적 안심 코스</strong> 자동 생성</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 8: 핵심 기능 1 - 프로파일링
  <Slide key="8" backgroundColor="bg-gradient-to-br from-blue-50 to-purple-50">
    <div className="space-y-8">
      <h2 className="text-6xl font-black text-gray-800 mb-10 text-center">
        <span className="text-blue-600">👥</span> [기능 1] 스마트 프로파일링
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* 액티브 시니어 */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-8 rounded-3xl shadow-2xl text-white transform hover:scale-105 transition-transform">
          <div className="text-7xl mb-4 text-center">🚶</div>
          <h3 className="text-3xl font-bold mb-3 text-center">액티브 시니어</h3>
          <div className="bg-white/20 backdrop-blur p-4 rounded-xl mb-4">
            <p className="text-xl font-semibold text-center">65-74세</p>
          </div>
          <ul className="space-y-2 text-lg">
            <li>✓ 걷기와 자연 선호</li>
            <li>✓ 한적한 오름, 숲길</li>
            <li>✓ 경치 좋은 카페</li>
          </ul>
        </div>

        {/* 케어 시니어 */}
        <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-8 rounded-3xl shadow-2xl text-white transform hover:scale-105 transition-transform">
          <div className="text-7xl mb-4 text-center">☕</div>
          <h3 className="text-3xl font-bold mb-3 text-center">케어 시니어</h3>
          <div className="bg-white/20 backdrop-blur p-4 rounded-xl mb-4">
            <p className="text-xl font-semibold text-center">75세 이상</p>
          </div>
          <ul className="space-y-2 text-lg">
            <li>✓ 짧은 산책 코스</li>
            <li>✓ 편안한 카페</li>
            <li>✓ 휴게 시설 필수</li>
          </ul>
        </div>

        {/* 유아 동반 */}
        <div className="bg-gradient-to-br from-green-500 to-green-700 p-8 rounded-3xl shadow-2xl text-white transform hover:scale-105 transition-transform">
          <div className="text-7xl mb-4 text-center">👨‍👩‍👧</div>
          <h3 className="text-3xl font-bold mb-3 text-center">유아 동반 가족</h3>
          <div className="bg-white/20 backdrop-blur p-4 rounded-xl mb-4">
            <p className="text-xl font-semibold text-center">3-6세 아이</p>
          </div>
          <ul className="space-y-2 text-lg">
            <li>✓ 체험 프로그램</li>
            <li>✓ 놀이 시설</li>
            <li>✓ 아이 친화 공간</li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* 영아 동반 */}
        <div className="bg-gradient-to-br from-pink-500 to-pink-700 p-8 rounded-3xl shadow-2xl text-white">
          <div className="text-7xl mb-4 text-center">👶</div>
          <h3 className="text-3xl font-bold mb-3 text-center">영아 동반 가족</h3>
          <div className="bg-white/20 backdrop-blur p-4 rounded-xl mb-4">
            <p className="text-xl font-semibold text-center">0-2세 아기</p>
          </div>
          <ul className="space-y-2 text-lg">
            <li>✓ 유모차 접근 가능</li>
            <li>✓ 수유실 필수</li>
            <li>✓ 기저귀 교환대</li>
          </ul>
        </div>

        {/* 일반 관광객 */}
        <div className="bg-gradient-to-br from-gray-500 to-gray-700 p-8 rounded-3xl shadow-2xl text-white">
          <div className="text-7xl mb-4 text-center">✈️</div>
          <h3 className="text-3xl font-bold mb-3 text-center">일반 관광객</h3>
          <div className="bg-white/20 backdrop-blur p-4 rounded-xl mb-4">
            <p className="text-xl font-semibold text-center">제약 없음</p>
          </div>
          <ul className="space-y-2 text-lg">
            <li>✓ 다양한 여행 스타일</li>
            <li>✓ 유명 관광지 포함</li>
            <li>✓ 유연한 일정</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <p className="text-3xl font-black">
          프로필 선택만으로 <span className="text-yellow-300">AI가 맞춤형 코스 자동 생성</span>
        </p>
      </div>
    </div>
  </Slide>,

  // Slide 9: 핵심 기능 2 - 안심 & 상생 내비게이션
  <Slide key="9" backgroundColor="bg-gradient-to-br from-green-600 via-blue-600 to-purple-700">
    <div className="space-y-8 text-white">
      <h2 className="text-6xl font-black mb-10 text-center">
        <span className="text-yellow-300">🗺️</span> [기능 2] 안심 & 상생 내비게이션
      </h2>

      <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl">
        <h3 className="text-4xl font-bold text-center mb-10 text-yellow-300">
          일반 내비게이션 vs JejU-Again
        </h3>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* 일반 내비게이션 */}
          <div className="bg-red-600 p-8 rounded-2xl shadow-2xl">
            <div className="text-center mb-6">
              <span className="text-7xl">❌</span>
              <h4 className="text-3xl font-bold mt-4">일반 내비게이션</h4>
            </div>
            <div className="bg-red-700 p-6 rounded-xl space-y-4 text-xl">
              <p className="flex items-center gap-3">
                <span>⚡</span>
                <span><strong>최단 시간</strong> 중심</span>
              </p>
              <p className="flex items-center gap-3">
                <span>🔥</span>
                <span>유명 관광지 집중</span>
              </p>
              <p className="flex items-center gap-3">
                <span>👥</span>
                <span>혼잡도 무관</span>
              </p>
              <p className="flex items-center gap-3">
                <span>🚫</span>
                <span>프로필 무시</span>
              </p>
            </div>
          </div>

          {/* JejU-Again */}
          <div className="bg-green-600 p-8 rounded-2xl shadow-2xl">
            <div className="text-center mb-6">
              <span className="text-7xl">✅</span>
              <h4 className="text-3xl font-bold mt-4">JejU-Again</h4>
            </div>
            <div className="bg-green-700 p-6 rounded-xl space-y-4 text-xl">
              <p className="flex items-center gap-3">
                <span>💚</span>
                <span><strong>가장 편안한 길</strong> 중심</span>
              </p>
              <p className="flex items-center gap-3">
                <span>🏘️</span>
                <span>소외 읍면지역 우선</span>
              </p>
              <p className="flex items-center gap-3">
                <span>🚫</span>
                <span>혼잡 지역 회피</span>
              </p>
              <p className="flex items-center gap-3">
                <span>🎯</span>
                <span>프로필 맞춤 POI</span>
              </p>
            </div>
          </div>
        </div>

        {/* 핵심 동작 원리 */}
        <div className="bg-blue-800 p-8 rounded-2xl">
          <h4 className="text-3xl font-bold mb-6 text-center text-yellow-300">핵심 동작 원리</h4>
          <div className="bg-white/20 p-6 rounded-xl text-2xl leading-relaxed">
            <p className="mb-6 text-center">
              사용자가 코스를 선택하면 <strong className="text-yellow-300">[로직 3]</strong>에 따라
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="bg-green-500 px-6 py-4 rounded-xl text-center">
                <p className="font-bold">소외된 읍면지역</p>
                <p className="text-lg">안심 POI</p>
              </div>
              <span className="text-4xl">+</span>
              <div className="bg-blue-500 px-6 py-4 rounded-xl text-center">
                <p className="font-bold">지역 소상공인</p>
                <p className="text-lg">파트너 상점</p>
              </div>
            </div>
            <p className="text-center">
              의도적으로 경유 → 동선과 소비를 <strong className="text-green-300">자연스럽게 분산</strong> 💰
            </p>
          </div>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 10: 핵심 기능 3 - 실시간 안심 알림
  <Slide key="10" backgroundColor="bg-gradient-to-br from-orange-500 via-red-500 to-pink-600">
    <div className="space-y-8 text-white">
      <h2 className="text-6xl font-black mb-10 text-center">
        <span className="text-yellow-300">🔔</span> [기능 3] 실시간 안심 알림
      </h2>

      <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl">
        <h3 className="text-4xl font-bold text-center mb-8 text-yellow-300">
          능동적 개입 시스템
        </h3>

        {/* 실시간 데이터 연동 */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-orange-700 p-8 rounded-2xl shadow-2xl">
            <div className="text-7xl mb-4 text-center">📊</div>
            <h4 className="text-3xl font-bold mb-4 text-center">관광객 분포도</h4>
            <div className="bg-orange-800 p-6 rounded-xl text-center">
              <p className="text-5xl font-bold mb-2">5분</p>
              <p className="text-xl">단위 실시간 업데이트</p>
            </div>
          </div>

          <div className="bg-red-700 p-8 rounded-2xl shadow-2xl">
            <div className="text-7xl mb-4 text-center">🚗</div>
            <h4 className="text-3xl font-bold mb-4 text-center">차량 분포도</h4>
            <div className="bg-red-800 p-6 rounded-xl text-center">
              <p className="text-5xl font-bold mb-2">5분</p>
              <p className="text-xl">단위 실시간 업데이트</p>
            </div>
          </div>
        </div>

        {/* 알림 예시 */}
        <div className="bg-white text-gray-900 p-10 rounded-3xl shadow-2xl">
          <h4 className="text-3xl font-bold mb-6 text-center text-red-600">
            ⚠️ 실제 알림 예시
          </h4>
          <div className="bg-gradient-to-r from-red-100 to-orange-100 p-8 rounded-2xl border-4 border-red-400">
            <div className="space-y-4 text-2xl">
              <p>
                "계획하신 <strong className="text-red-600">'성산일출봉' 주차장</strong>이
              </p>
              <p className="text-center">
                혼잡도 <span className="text-6xl font-black text-red-600">80%</span>입니다.
              </p>
              <p className="mt-6">
                10분 거리의 <strong className="text-green-600">'섭지코지 숲길'</strong>은
              </p>
              <p className="text-center">
                현재 <span className="text-5xl font-bold text-green-600">'한적'</span>합니다.
              </p>
              <div className="mt-8 text-center">
                <button className="bg-green-600 text-white px-12 py-6 rounded-2xl text-3xl font-bold shadow-2xl hover:bg-green-700">
                  경로 변경할까요?
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-900 p-6 rounded-2xl text-center">
          <p className="text-3xl font-bold">
            💡 단순 혼잡도 표시 → <span className="text-yellow-300">능동적 문제 해결</span>
          </p>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 11: AI 엔진 - Claude Sonnet 4.0
  <Slide key="11" backgroundColor="bg-gradient-to-br from-purple-700 via-pink-600 to-red-600">
    <div className="space-y-8 text-white">
      <h2 className="text-6xl font-black mb-10 text-center">
        <span className="text-yellow-300">🤖</span> AI 맞춤형 코스 생성 엔진
      </h2>

      <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl">
        {/* Claude Sonnet 4.0 강조 */}
        <div className="text-center mb-10">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-8 rounded-3xl shadow-2xl">
            <div className="text-6xl mb-4">🧠</div>
            <h3 className="text-5xl font-black mb-4">Claude Sonnet 4.0</h3>
            <p className="text-2xl">Anthropic 최신 AI 모델</p>
          </div>
        </div>

        {/* AI 능력 3가지 */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-blue-700 p-8 rounded-2xl shadow-2xl text-center">
            <div className="text-7xl mb-4">📊</div>
            <h4 className="text-3xl font-bold mb-4">데이터 분석</h4>
            <p className="text-xl">
              혼잡도, 프로필, 선호도<br/>
              <strong className="text-blue-300">종합 분석</strong>
            </p>
          </div>

          <div className="bg-green-700 p-8 rounded-2xl shadow-2xl text-center">
            <div className="text-7xl mb-4">🎯</div>
            <h4 className="text-3xl font-bold mb-4">최적 매칭</h4>
            <p className="text-xl">
              사용자 프로필에<br/>
              <strong className="text-green-300">완벽히 맞춤</strong>
            </p>
          </div>

          <div className="bg-purple-700 p-8 rounded-2xl shadow-2xl text-center">
            <div className="text-7xl mb-4">💡</div>
            <h4 className="text-3xl font-bold mb-4">이유 설명</h4>
            <p className="text-xl">
              각 장소 추천<br/>
              <strong className="text-purple-300">근거 제시</strong>
            </p>
          </div>
        </div>

        {/* AI 프롬프트 설계 */}
        <div className="bg-gray-900 p-8 rounded-2xl">
          <h4 className="text-3xl font-bold mb-6 text-yellow-300">AI 프롬프트 핵심 설계</h4>
          <div className="bg-black/50 p-6 rounded-xl space-y-3 text-xl font-mono">
            <p className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              <span>혼잡도 <strong className="text-red-400">CROWDED/NORMAL</strong> 지역 제외 (필수)</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              <span>지역 다양성 보장 (<strong className="text-blue-400">제주시/서귀포/동부/서부</strong>)</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              <span>로컬 상점 <strong className="text-yellow-400">1곳 이상</strong> 포함</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              <span>프로필별 맞춤 <strong className="text-purple-400">사유 생성</strong></span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              <span><strong className="text-green-400">JSON</strong> 구조화 응답</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 12: 데이터 활용 - 제주관광 빅데이터
  <Slide key="12" backgroundColor="bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600">
    <div className="space-y-8 text-white">
      <h2 className="text-6xl font-black mb-10 text-center">
        <span className="text-yellow-300">📊</span> 실제 데이터 활용
      </h2>

      <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl">
        <div className="text-center mb-10">
          <h3 className="text-5xl font-bold mb-4 text-yellow-300">
            제주관광 빅데이터 서비스 플랫폼
          </h3>
          <p className="text-3xl">data.ijto.or.kr</p>
        </div>

        {/* 데이터 카테고리 */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-700 p-8 rounded-2xl shadow-2xl">
            <div className="text-6xl mb-4 text-center">✈️</div>
            <h4 className="text-3xl font-bold mb-6 text-center">입도·이동 통계</h4>
            <ul className="space-y-3 text-xl">
              <li>✓ 내국인 입도 통계 (2019-2025)</li>
              <li>✓ 외국인 입도 통계 (2019-2025)</li>
              <li>✓ 지역별 관광객 현황 (블록별)</li>
              <li>✓ 지역별 여행 키워드 (비짓제주)</li>
            </ul>
          </div>

          <div className="bg-green-700 p-8 rounded-2xl shadow-2xl">
            <div className="text-6xl mb-4 text-center">💳</div>
            <h4 className="text-3xl font-bold mb-6 text-center">생산·소비 통계</h4>
            <ul className="space-y-3 text-xl">
              <li>✓ 월간 제주 소비 동향 (2013-2025)</li>
              <li>✓ 업종별 소비 분석 (내/외국인)</li>
              <li>✓ 지역별 매출액 증감률</li>
              <li>✓ 소외 지역 상권 파악</li>
            </ul>
          </div>

          <div className="bg-purple-700 p-8 rounded-2xl shadow-2xl">
            <div className="text-6xl mb-4 text-center">📈</div>
            <h4 className="text-3xl font-bold mb-6 text-center">관광동향 보고서</h4>
            <ul className="space-y-3 text-xl">
              <li>✓ 한라산 탐방객 통계</li>
              <li>✓ 제주 운항편 수 및 여객수</li>
              <li>✓ 렌터카 가동률</li>
              <li>✓ 섬 속의 섬 이동객</li>
            </ul>
          </div>

          <div className="bg-orange-700 p-8 rounded-2xl shadow-2xl">
            <div className="text-6xl mb-4 text-center">🎯</div>
            <h4 className="text-3xl font-bold mb-6 text-center">실제 활용</h4>
            <div className="space-y-4">
              <div className="bg-orange-800 p-4 rounded-xl">
                <p className="text-2xl font-bold mb-2">2025년 8월</p>
                <p className="text-xl">실제 다운로드 데이터</p>
              </div>
              <div className="bg-orange-800 p-4 rounded-xl">
                <p className="text-xl">CSV → JSON 자동 변환</p>
              </div>
              <div className="bg-orange-800 p-4 rounded-xl">
                <p className="text-xl">투명한 출처 공개</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-500 text-gray-900 p-8 rounded-2xl text-center">
          <p className="text-4xl font-black">
            📌 검증 가능한 공식 데이터로 신뢰성 확보
          </p>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 13: 기대효과 - 3가지 임팩트
  <Slide key="13" backgroundColor="bg-gradient-to-br from-green-600 via-blue-600 to-purple-600">
    <div className="space-y-8 text-white">
      <h2 className="text-6xl font-black mb-10 text-center">
        <span className="text-yellow-300">🎉</span> 기대효과
      </h2>

      {/* 기대효과 1 */}
      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl mb-6">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-5xl font-black text-blue-900">
            1
          </div>
          <h3 className="text-4xl font-bold">對 관광객</h3>
        </div>
        <div className="bg-blue-700 p-8 rounded-2xl">
          <div className="text-center mb-6">
            <p className="text-3xl mb-4">'아이/부모님 모시고 가기 힘든 제주' →</p>
            <p className="text-5xl font-black text-yellow-300 mb-6">
              '가장 편안하고 안전한 여행지'
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-800 p-6 rounded-xl text-center">
              <p className="text-6xl font-bold mb-2">128만 명</p>
              <p className="text-xl">거대 시장 만족도 극대화</p>
            </div>
            <div className="bg-green-700 p-6 rounded-xl text-center">
              <p className="text-5xl font-bold mb-2">Again ↑</p>
              <p className="text-xl">재방문 의사 증대</p>
            </div>
          </div>
        </div>
      </div>

      {/* 기대효과 2 */}
      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl mb-6">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-5xl font-black text-green-900">
            2
          </div>
          <h3 className="text-4xl font-bold">對 지역경제</h3>
        </div>
        <div className="bg-green-700 p-8 rounded-2xl">
          <p className="text-3xl mb-6 text-center">
            특정 핫플레이스 집중 → <strong className="text-yellow-300">읍면지역 소상공인 분산</strong>
          </p>
          <div className="flex items-center justify-center gap-6 text-2xl">
            <div className="bg-red-600 px-8 py-6 rounded-xl text-center">
              <p className="text-4xl mb-2">⚡</p>
              <p>동문시장<br/>과밀화</p>
            </div>
            <div className="text-6xl">→</div>
            <div className="bg-green-800 px-8 py-6 rounded-xl text-center">
              <p className="text-4xl mb-2">💰</p>
              <p>읍면 지역<br/>상생 효과</p>
            </div>
          </div>
        </div>
      </div>

      {/* 기대효과 3 */}
      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-5xl font-black text-purple-900">
            3
          </div>
          <h3 className="text-4xl font-bold">對 제주정책</h3>
        </div>
        <div className="bg-purple-700 p-8 rounded-2xl">
          <div className="text-center text-3xl mb-6">
            <p className="mb-4">
              <strong className="text-red-300">오버투어리즘</strong> +
              <strong className="text-blue-300"> 언더투어리즘</strong> +
              <strong className="text-orange-300"> 관광약자 지원</strong>
            </p>
            <div className="text-6xl my-6">↓</div>
            <p className="text-5xl font-black text-yellow-300">
              단일 솔루션으로 동시 해결
            </p>
          </div>
          <div className="bg-purple-800 p-6 rounded-xl mt-6 text-center">
            <p className="text-3xl font-bold">
              데이터 기반 정책의 <span className="text-green-300">전국적 모범 사례</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 14: 기술 스택
  <Slide key="14" backgroundColor="bg-gradient-to-br from-gray-900 via-gray-800 to-black">
    <div className="space-y-8 text-white">
      <h2 className="text-6xl font-black mb-10 text-center">
        <span className="text-yellow-300">⚡</span> 기술 스택
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-8 rounded-3xl shadow-2xl">
          <div className="text-6xl mb-4 text-center">⚛️</div>
          <h3 className="text-3xl font-bold mb-6 text-center">프론트엔드</h3>
          <div className="space-y-4 text-xl">
            <div className="bg-blue-800 p-4 rounded-xl flex items-center gap-3">
              <span className="text-3xl">▲</span>
              <span><strong>Next.js 16</strong> (App Router)</span>
            </div>
            <div className="bg-blue-800 p-4 rounded-xl flex items-center gap-3">
              <span className="text-3xl">TS</span>
              <span><strong>TypeScript</strong> (타입 안정성)</span>
            </div>
            <div className="bg-blue-800 p-4 rounded-xl flex items-center gap-3">
              <span className="text-3xl">🎨</span>
              <span><strong>Tailwind CSS v4</strong></span>
            </div>
            <div className="bg-blue-800 p-4 rounded-xl flex items-center gap-3">
              <span className="text-3xl">🎬</span>
              <span><strong>Framer Motion</strong></span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-700 to-purple-900 p-8 rounded-3xl shadow-2xl">
          <div className="text-6xl mb-4 text-center">🤖</div>
          <h3 className="text-3xl font-bold mb-6 text-center">AI & 데이터</h3>
          <div className="space-y-4 text-xl">
            <div className="bg-purple-800 p-4 rounded-xl flex items-center gap-3">
              <span className="text-3xl">🧠</span>
              <span><strong>Claude Sonnet 4.0</strong></span>
            </div>
            <div className="bg-purple-800 p-4 rounded-xl flex items-center gap-3">
              <span className="text-3xl">📊</span>
              <span><strong>제주관광 빅데이터</strong></span>
            </div>
            <div className="bg-purple-800 p-4 rounded-xl flex items-center gap-3">
              <span className="text-3xl">🗺️</span>
              <span><strong>한국관광공사 API</strong></span>
            </div>
            <div className="bg-purple-800 p-4 rounded-xl flex items-center gap-3">
              <span className="text-3xl">📄</span>
              <span><strong>CSV 파싱</strong></span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-700 to-green-900 p-8 rounded-3xl shadow-2xl">
          <div className="text-6xl mb-4 text-center">🗺️</div>
          <h3 className="text-3xl font-bold mb-6 text-center">지도 & API</h3>
          <div className="space-y-4 text-xl">
            <div className="bg-green-800 p-4 rounded-xl flex items-center gap-3">
              <span className="text-3xl">N</span>
              <span><strong>Naver Maps API v3</strong></span>
            </div>
            <div className="bg-green-800 p-4 rounded-xl flex items-center gap-3">
              <span className="text-3xl">🧭</span>
              <span><strong>Directions API</strong></span>
            </div>
            <div className="bg-green-800 p-4 rounded-xl flex items-center gap-3">
              <span className="text-3xl">📡</span>
              <span><strong>실시간 혼잡도</strong></span>
            </div>
            <div className="bg-green-800 p-4 rounded-xl flex items-center gap-3">
              <span className="text-3xl">📑</span>
              <span><strong>Google Sheets API</strong></span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-700 to-orange-900 p-8 rounded-3xl shadow-2xl">
          <div className="text-6xl mb-4 text-center">🚀</div>
          <h3 className="text-3xl font-bold mb-6 text-center">배포 & 인프라</h3>
          <div className="space-y-4 text-xl">
            <div className="bg-orange-800 p-4 rounded-xl flex items-center gap-3">
              <span className="text-3xl">▲</span>
              <span><strong>Vercel</strong> (자동 배포)</span>
            </div>
            <div className="bg-orange-800 p-4 rounded-xl flex items-center gap-3">
              <span className="text-3xl">📦</span>
              <span><strong>GitHub</strong> (버전 관리)</span>
            </div>
            <div className="bg-orange-800 p-4 rounded-xl flex items-center gap-3">
              <span className="text-3xl">⚡</span>
              <span><strong>Edge Functions</strong></span>
            </div>
            <div className="bg-orange-800 p-4 rounded-xl flex items-center gap-3">
              <span className="text-3xl">🌐</span>
              <span><strong>CDN</strong> (글로벌)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-2xl text-center">
        <p className="text-4xl font-black">
          프로덕션 레디 <span className="text-yellow-300">최신 기술 스택</span>
        </p>
      </div>
    </div>
  </Slide>,

  // Slide 15: 활용 제안 - 필수 요청
  <Slide key="15" backgroundColor="bg-gradient-to-br from-red-600 via-orange-600 to-yellow-500">
    <div className="space-y-8 text-white">
      <h2 className="text-6xl font-black mb-10 text-center">
        <span className="text-yellow-300">💡</span> 활용 제안
      </h2>

      {/* 필수 제안 */}
      <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl mb-8">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center text-6xl">
            🔴
          </div>
          <h3 className="text-5xl font-black">
            [필수 제안]<br/>실시간 데이터 API 공개
          </h3>
        </div>

        <div className="bg-red-700 p-8 rounded-2xl mb-6">
          <h4 className="text-3xl font-bold mb-6 text-yellow-300">핵심 기능 구현을 위해 필수</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-800 p-6 rounded-xl">
              <p className="text-4xl font-bold mb-3">📊</p>
              <p className="text-2xl font-bold mb-2">관광객 분포도</p>
              <p className="text-xl">5분 단위 실시간</p>
            </div>
            <div className="bg-red-800 p-6 rounded-xl">
              <p className="text-4xl font-bold mb-3">🚗</p>
              <p className="text-2xl font-bold mb-2">차량 분포도</p>
              <p className="text-xl">5분 단위 실시간</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-700 p-8 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-2xl font-bold mb-3 text-yellow-300">현재 상황</p>
              <ul className="space-y-2 text-xl">
                <li>❌ 데이터 다운로드 불가</li>
                <li>❌ 비짓제주 시각화만 가능</li>
                <li>❌ API 엔드포인트 미제공</li>
              </ul>
            </div>
            <div>
              <p className="text-2xl font-bold mb-3 text-yellow-300">요청 사항</p>
              <ul className="space-y-2 text-xl">
                <li className="flex items-center gap-2">
                  <span className="text-3xl">✅</span>
                  <span><strong>API 엔드포인트 공개</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-3xl">✅</span>
                  <span><strong>또는 활용 승인</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 선택 제안 */}
      <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-6xl">
            🔵
          </div>
          <h3 className="text-5xl font-black">
            [선택 제안]<br/>무장애 관광 데이터 통합
          </h3>
        </div>

        <div className="bg-blue-700 p-8 rounded-2xl">
          <p className="text-2xl mb-6">
            <strong>경험적 접근성</strong> + <strong className="text-green-300">물리적 접근성</strong> = 완벽한 서비스
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-xl">
            <div className="bg-blue-800 p-6 rounded-xl text-center">
              <p className="text-4xl mb-2">♿</p>
              <p>휠체어 경사로</p>
            </div>
            <div className="bg-blue-800 p-6 rounded-xl text-center">
              <p className="text-4xl mb-2">🚼</p>
              <p>수유실</p>
            </div>
            <div className="bg-blue-800 p-6 rounded-xl text-center">
              <p className="text-4xl mb-2">🅿️</p>
              <p>장애인 주차</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 16: 마무리 - CTA
  <Slide key="16" backgroundColor="bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
    <div className="text-center text-white space-y-12">
      <div className="text-8xl mb-8 animate-pulse">🏝️</div>

      <h2 className="text-7xl font-black mb-8 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
        JejU-Again
      </h2>

      <div className="bg-white/10 backdrop-blur-xl p-12 rounded-3xl mb-10">
        <p className="text-5xl font-bold mb-8 leading-tight">
          "가장 빠른 길이 아닌,<br/>
          <span className="text-yellow-300">가장 편안한 길</span>"
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
        <div className="bg-white/20 backdrop-blur-md p-10 rounded-3xl transform hover:scale-105 transition-transform">
          <div className="bg-white p-8 rounded-2xl mb-6">
            <div className="w-56 h-56 mx-auto bg-gray-200 flex items-center justify-center text-gray-600 text-lg">
              QR Code<br/>jeju-again.vercel.app
            </div>
          </div>
          <p className="text-3xl font-bold mb-3">🚀 프로토타입</p>
          <p className="text-xl text-blue-200">jeju-again.vercel.app</p>
        </div>

        <div className="bg-white/20 backdrop-blur-md p-10 rounded-3xl transform hover:scale-105 transition-transform">
          <div className="bg-white p-8 rounded-2xl mb-6">
            <div className="w-56 h-56 mx-auto bg-gray-200 flex items-center justify-center text-gray-600 text-lg">
              QR Code<br/>GitHub
            </div>
          </div>
          <p className="text-3xl font-bold mb-3">📦 GitHub</p>
          <p className="text-xl text-blue-200">github.com/yonghwan1106<br/>/jeju-again</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white/20 backdrop-blur-md px-12 py-6 rounded-2xl inline-block">
          <p className="text-3xl font-semibold">📧 sanoramyun8@gmail.com</p>
        </div>
        <div className="bg-white/20 backdrop-blur-md px-12 py-6 rounded-2xl inline-block ml-4">
          <p className="text-3xl font-semibold">📱 010-7939-3123</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-16 py-8 rounded-3xl inline-block shadow-2xl">
        <p className="text-4xl font-black">2025 제주관광 데이터 활용 공모전 출품작</p>
      </div>
    </div>
  </Slide>,
];
