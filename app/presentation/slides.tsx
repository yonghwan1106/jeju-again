import Slide from './components/Slide';

export const slides = [
  // Slide 1: 표지
  <Slide key="1" backgroundColor="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
    <div className="text-center text-white space-y-8">
      <div className="text-7xl mb-8">🏝️</div>
      <h1 className="text-6xl font-bold mb-4">JejU-Again</h1>
      <h2 className="text-4xl font-bold mb-2">제주어게인</h2>
      <p className="text-2xl text-blue-100 mb-8">
        데이터 기반 '관광약자-지역상생' 맞춤형 내비게이션
      </p>
      <div className="text-3xl font-light italic text-blue-50 mb-12">
        "가장 빠른 길이 아닌, 가장 편안한 길"
      </div>
      <div className="inline-block bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl">
        <p className="text-xl font-semibold">2025 제주관광 데이터 활용 공모전 출품작</p>
      </div>
    </div>
  </Slide>,

  // Slide 2: 문제 정의 - 제주의 이중적 문제
  <Slide key="2">
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">
        <span className="text-red-600">⚠️</span> 제주의 이중적 문제: '쏠림'과 '소외'
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-red-800 mb-4">
            🏖️ 오버투어리즘 (쏠림)
          </h3>
          <ul className="space-y-3 text-lg text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span>관광객의 <strong className="text-red-600">90%</strong>가 특정 유명 관광지에 과밀화</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span>관광객 만족도 저하 & 주민 피로도 증가</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span>해안가, 동문시장 등 핫플레이스 집중</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">
            🏘️ 언더투어리즘 (소외)
          </h3>
          <ul className="space-y-3 text-lg text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>다수의 <strong className="text-blue-600">읍면 지역 골목 상권</strong> 소외</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>관광객 동선에서 제외되어 경기 침체</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>지역 균형 발전 저해</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl mt-8">
        <p className="text-xl text-center text-gray-800 font-semibold">
          💡 두 문제를 <strong className="text-purple-700">단 하나의 솔루션</strong>으로 해결할 수 있습니다!
        </p>
      </div>
    </div>
  </Slide>,

  // Slide 3: 정책의 사각지대 - 86%의 진짜 관광약자
  <Slide key="3" backgroundColor="bg-gradient-to-br from-orange-50 to-yellow-50">
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">
        <span className="text-orange-600">👥</span> 정책의 사각지대: 86%의 진짜 관광약자
      </h2>

      <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
        <h3 className="text-3xl font-bold text-orange-700 mb-6 text-center">
          제주 방문 관광약자 연 148만 명의 구성
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-lg">
            <div className="text-6xl text-center mb-4">👴👵</div>
            <h4 className="text-2xl font-bold text-blue-800 text-center mb-2">65세 이상 시니어</h4>
            <p className="text-5xl font-bold text-blue-600 text-center mb-2">51%</p>
            <p className="text-gray-700 text-center">연 75만 명</p>
          </div>
          <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-6 rounded-lg">
            <div className="text-6xl text-center mb-4">👶👨‍👩‍👧</div>
            <h4 className="text-2xl font-bold text-pink-800 text-center mb-2">4세 이하 영유아 동반</h4>
            <p className="text-5xl font-bold text-pink-600 text-center mb-2">34.9%</p>
            <p className="text-gray-700 text-center">연 52만 명</p>
          </div>
        </div>
        <div className="mt-6 bg-orange-100 p-6 rounded-lg">
          <p className="text-3xl font-bold text-orange-800 text-center">
            합계 <span className="text-5xl text-orange-600">86%</span> = 거대 시장
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
          <h4 className="text-xl font-bold text-red-800 mb-3">기존 정책의 한계</h4>
          <p className="text-gray-700">
            • 대부분 '무장애'(휠체어 등) 13.5% 시장에만 집중<br/>
            • <strong>물리적 접근성</strong>에만 초점
          </p>
        </div>
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
          <h4 className="text-xl font-bold text-green-800 mb-3">진짜 불편함</h4>
          <p className="text-gray-700">
            • <strong>경험적 장벽</strong>: 극심한 혼잡, 소음, 긴 대기시간<br/>
            • 예측 불가능성으로 인한 스트레스
          </p>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 4: 기회 및 목적 - Nexus 해결
  <Slide key="4" backgroundColor="bg-gradient-to-br from-green-50 to-blue-50">
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">
        <span className="text-green-600">🎯</span> 기회 및 목적: 두 문제의 교차점(Nexus) 해결
      </h2>

      <div className="bg-white rounded-xl shadow-xl p-8">
        <h3 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          데이터 분석 결과
        </h3>
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <p className="text-xl text-gray-800 leading-relaxed">
            86%의 다수 관광약자(시니어 + 영유아 동반)는 일반 관광객과 달리<br/>
            <strong className="text-blue-700 text-2xl">'숲, 오름, 체험형 콘텐츠'를 선호</strong>하며<br/>
            <strong className="text-green-700 text-2xl">'읍면지역' 방문 경향이 뚜렷하게 높음</strong>
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 my-8">
          <div className="bg-orange-100 px-6 py-4 rounded-lg">
            <p className="text-lg font-bold text-orange-700">86% 관광약자<br/>선호 콘텐츠</p>
          </div>
          <span className="text-4xl">⚡</span>
          <div className="bg-blue-100 px-6 py-4 rounded-lg">
            <p className="text-lg font-bold text-blue-700">언더투어리즘<br/>지역 자산</p>
          </div>
          <span className="text-4xl">=</span>
          <div className="bg-green-100 px-6 py-4 rounded-lg">
            <p className="text-lg font-bold text-green-700">완벽한<br/>매칭!</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl">
          <p className="text-2xl text-center font-bold text-gray-800">
            💡 <strong className="text-purple-700">쏠림 현상</strong> + <strong className="text-orange-700">다수 약자 소외</strong><br/>
            두 가지 거대 난제를 <strong className="text-green-700">단 하나의 솔루션</strong>으로 해결!
          </p>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 5: 기존 서비스와의 차별성
  <Slide key="5">
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">
        <span className="text-blue-600">🆚</span> 기존 서비스와의 차별성
      </h2>

      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-xl p-6 border-l-4 border-blue-500">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                📊
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                vs. 비짓제주 '실시간 혼잡도'
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="font-bold text-red-700 mb-2">❌ 기존 서비스</p>
                  <p className="text-gray-700">"여기가 혼잡하다"는<br/><strong>수동적 정보 제공</strong>에 그침</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-bold text-green-700 mb-2">✅ JejU-Again</p>
                  <p className="text-gray-700">"여기가 혼잡하니, 당신의 프로필에 맞는<br/><strong>A 목장으로 경로 변경</strong>"<br/>능동적 문제 해결</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6 border-l-4 border-purple-500">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-3xl">
                ♿
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                vs. 이지제주 / 휠내비길
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="font-bold text-red-700 mb-2">❌ 기존 서비스</p>
                  <p className="text-gray-700"><strong>13.5% '무장애' 시장</strong><br/>(휠체어 등 물리적 접근성)</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-bold text-green-700 mb-2">✅ JejU-Again</p>
                  <p className="text-gray-700"><strong>86% '다수 관광약자' 시장</strong><br/>(시니어/영유아 경험적 접근성)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl text-center">
        <p className="text-3xl font-bold">
          6.5배 더 큰 시장 + 능동적 문제 해결 = 진정한 혁신
        </p>
      </div>
    </div>
  </Slide>,

  // Slide 6: 데이터 활용 로직 (3단계)
  <Slide key="6" backgroundColor="bg-gradient-to-br from-indigo-50 to-purple-50">
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">
        <span className="text-indigo-600">⚙️</span> 데이터 활용 로직 (Data Engine)
      </h2>

      <div className="space-y-6">
        {/* 로직 1 */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
          <h3 className="text-2xl font-bold text-indigo-700 mb-4">
            📍 [로직 1] '우선 유도 지역' 정의
          </h3>
          <p className="text-gray-700 mb-4">
            플랫폼 데이터를 융합하여 <strong>'비인기/저소비' 읍면지역</strong>을 과학적으로 정의
          </p>
          <div className="bg-indigo-50 p-4 rounded-lg">
            <p className="text-gray-800 font-mono text-sm">
              <strong>지역별 관광객 현황</strong> (방문객 하위 20%)<br/>
              + <strong>지역별 매출액</strong> (매출 하위 20%)<br/>
              = <strong className="text-indigo-700">우선 유도 대상 지역</strong>
            </p>
          </div>
        </div>

        {/* 로직 2 */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
          <h3 className="text-2xl font-bold text-purple-700 mb-4">
            👥 [로직 2] '관광약자 프로필' 생성
          </h3>
          <p className="text-gray-700 mb-4">
            약자 유형별 선호 콘텐츠(POI) 속성을 데이터로 정의
          </p>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-gray-800 text-sm">
              • <strong>지역별 여행 키워드</strong> (비짓제주): '숲', '오름', '아이와', '체험'<br/>
              • <strong>한라산 탐방객</strong>: 저강도 탐방로 선호<br/>
              • <strong>골프장 내장객</strong>: 액티브 시니어 선호
            </p>
          </div>
        </div>

        {/* 로직 3 */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            🎯 [로직 3] '안심 코스' 생성
          </h3>
          <p className="text-gray-700 mb-4">
            [로직 1]의 '소외 지역' + [로직 2]의 '약자 선호 POI' 매칭
          </p>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-gray-800 text-sm">
              • <strong>차량분포도</strong> (이전/이후 방문지) 활용<br/>
              • 관광객의 자연스러운 이동 동선 기반<br/>
              • <strong className="text-green-700">최적 안심 코스 자동 생성</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 7: 프로파일링 (5개 페르소나)
  <Slide key="7">
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">
        <span className="text-blue-600">👥</span> [기능 1] 관광약자 프로파일링
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-xl shadow-lg">
          <div className="text-5xl mb-3 text-center">🚶</div>
          <h3 className="text-xl font-bold text-blue-800 mb-2 text-center">액티브 시니어</h3>
          <p className="text-gray-700 text-center text-sm">65-74세 | 걷기와 자연을 즐기는 분</p>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-xl shadow-lg">
          <div className="text-5xl mb-3 text-center">☕</div>
          <h3 className="text-xl font-bold text-purple-800 mb-2 text-center">케어 시니어</h3>
          <p className="text-gray-700 text-center text-sm">75세 이상 | 짧은 산책과 편안한 카페</p>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-xl shadow-lg">
          <div className="text-5xl mb-3 text-center">👨‍👩‍👧</div>
          <h3 className="text-xl font-bold text-green-800 mb-2 text-center">유아 동반 가족</h3>
          <p className="text-gray-700 text-center text-sm">3-6세 아이 | 체험과 놀이 중심</p>
        </div>

        <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-6 rounded-xl shadow-lg">
          <div className="text-5xl mb-3 text-center">👶</div>
          <h3 className="text-xl font-bold text-pink-800 mb-2 text-center">영아 동반 가족</h3>
          <p className="text-gray-700 text-center text-sm">0-2세 아기 | 유모차와 수유실 필수</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-xl shadow-lg">
        <div className="text-5xl mb-3 text-center">✈️</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">일반 관광객</h3>
        <p className="text-gray-600 text-center">제약 없이 여행을 즐기는 일반 관광객</p>
      </div>

      <div className="bg-blue-50 p-6 rounded-xl">
        <p className="text-xl text-center text-gray-800">
          💡 프로필 선택만으로 <strong className="text-blue-700">맞춤형 코스 자동 생성</strong>
        </p>
      </div>
    </div>
  </Slide>,

  // Slide 8: [기능 2] 안심 & 상생 내비게이션
  <Slide key="8" backgroundColor="bg-gradient-to-br from-green-50 to-blue-50">
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">
        <span className="text-green-600">🗺️</span> [기능 2] '안심 & 상생' 내비게이션 (핵심)
      </h2>

      <div className="bg-white rounded-xl shadow-xl p-8">
        <h3 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          일반 내비게이션과의 차별점
        </h3>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-red-50 border-2 border-red-300 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-red-700 mb-4">❌ 일반 내비게이션</h4>
            <p className="text-gray-700 mb-2">
              • <strong>최단 시간</strong> 중심<br/>
              • 유명 관광지 집중<br/>
              • 혼잡도 무관<br/>
              • 프로필 무시
            </p>
          </div>

          <div className="bg-green-50 border-2 border-green-300 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-green-700 mb-4">✅ JejU-Again 내비게이션</h4>
            <p className="text-gray-700 mb-2">
              • <strong>가장 편안한 길</strong> 중심<br/>
              • 소외 읍면지역 우선 경유<br/>
              • 혼잡 지역 회피<br/>
              • 프로필 맞춤 POI
            </p>
          </div>
        </div>

        <div className="bg-blue-100 p-6 rounded-lg">
          <h4 className="text-xl font-bold text-blue-800 mb-3">핵심 동작 원리</h4>
          <p className="text-gray-800 leading-relaxed">
            사용자가 코스를 선택하면 <strong>[로직 3]</strong>에 따라<br/>
            의도적으로 <strong className="text-green-700">'소외된 읍면지역'의 '안심 POI'</strong> 및<br/>
            <strong className="text-blue-700">'지역 소상공인(파트너 상점)'</strong>을 경유하도록 설계<br/><br/>
            → 관광객의 동선과 소비를 자연스럽게 분산 💰
          </p>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 9: [기능 3] 실시간 안심 알림
  <Slide key="9">
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">
        <span className="text-orange-600">🔔</span> [기능 3] 실시간 안심 알림 (능동적 개입)
      </h2>

      <div className="bg-white rounded-xl shadow-xl p-8">
        <div className="bg-orange-50 border-2 border-orange-300 p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-bold text-orange-700 mb-4">실시간 데이터 연동</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <p className="font-bold text-orange-600">📊 관광객 분포도</p>
              <p className="text-gray-700 text-sm">5분 단위 실시간 업데이트</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-bold text-orange-600">🚗 차량 분포도</p>
              <p className="text-gray-700 text-sm">5분 단위 실시간 업데이트</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-xl shadow-lg mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">알림 예시</h3>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-xl text-gray-800 mb-2">
              <span className="text-red-600 font-bold">⚠️ 혼잡 경고</span>
            </p>
            <p className="text-gray-700 leading-relaxed">
              "계획하신 <strong className="text-red-600">'A' 오름 주차장</strong>이<br/>
              혼잡도 <strong className="text-red-600">80%</strong>입니다.<br/><br/>
              10분 거리의 <strong className="text-green-600">'B' 숲길</strong>은<br/>
              현재 <strong className="text-green-600">'한적'</strong>합니다.<br/><br/>
              경로를 변경할까요?"
            </p>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <p className="text-xl text-center text-gray-800">
            💡 <strong className="text-blue-700">단순 혼잡도 표시</strong>가 아닌<br/>
            <strong className="text-green-700">위험/혼잡 예측 시 능동적 개입</strong>
          </p>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 10: AI 코스 생성 (Claude Sonnet 4.0)
  <Slide key="10" backgroundColor="bg-gradient-to-br from-purple-50 to-pink-50">
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">
        <span className="text-purple-600">🤖</span> AI 맞춤형 여행 코스 생성
      </h2>

      <div className="bg-white rounded-xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl shadow-lg">
            <p className="text-3xl font-bold">Claude Sonnet 4.0</p>
            <p className="text-sm mt-2">Anthropic 최신 AI 모델</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-3">📊</div>
            <h4 className="font-bold text-blue-800 mb-2">데이터 분석</h4>
            <p className="text-gray-700 text-sm">혼잡도, 프로필, 선호도 종합 분석</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h4 className="font-bold text-green-800 mb-2">최적 매칭</h4>
            <p className="text-gray-700 text-sm">사용자 프로필에 완벽히 맞춤</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-3">💡</div>
            <h4 className="font-bold text-purple-800 mb-2">이유 설명</h4>
            <p className="text-gray-700 text-sm">각 장소 추천 근거 제시</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg">
          <h4 className="text-xl font-bold text-gray-800 mb-3">AI 프롬프트 설계</h4>
          <div className="bg-white p-4 rounded-lg text-sm text-gray-700 font-mono">
            ✓ 혼잡도 CROWDED/NORMAL 지역 제외 (필수)<br/>
            ✓ 지역 다양성 보장 (제주시/서귀포/동부/서부)<br/>
            ✓ 로컬 상점 1곳 이상 포함<br/>
            ✓ 프로필별 맞춤 사유 생성<br/>
            ✓ JSON 구조화 응답
          </div>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 11: 인터랙티브 지도 (Naver Maps)
  <Slide key="11">
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">
        <span className="text-green-600">🗺️</span> 인터랙티브 지도 시각화
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Naver Maps API v3</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-500 text-xl">✓</span>
              <span><strong>실시간 경로 표시</strong><br/>각 POI 연결 폴리라인</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 text-xl">✓</span>
              <span><strong>커스텀 마커</strong><br/>프로필별 색상 구분</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 text-xl">✓</span>
              <span><strong>거리 & 소요시간</strong><br/>Directions API 연동</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 text-xl">✓</span>
              <span><strong>혼잡도 오버레이</strong><br/>실시간 이모지 마커</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">혼잡도 시각화</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg flex items-center gap-3">
              <span className="text-3xl">😡</span>
              <div>
                <p className="font-bold text-red-600">CROWDED (혼잡)</p>
                <p className="text-sm text-gray-600">관광객 80% 이상</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg flex items-center gap-3">
              <span className="text-3xl">😐</span>
              <div>
                <p className="font-bold text-orange-600">NORMAL (보통)</p>
                <p className="text-sm text-gray-600">관광객 40-80%</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg flex items-center gap-3">
              <span className="text-3xl">😊</span>
              <div>
                <p className="font-bold text-green-600">QUIET (한적)</p>
                <p className="text-sm text-gray-600">관광객 40% 미만</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-xl text-center">
        <p className="text-xl text-gray-800">
          💡 30초마다 자동 업데이트로 <strong className="text-blue-700">실시간 혼잡도 추적</strong>
        </p>
      </div>
    </div>
  </Slide>,

  // Slide 12: 데이터 활용 (data.ijto.or.kr)
  <Slide key="12" backgroundColor="bg-gradient-to-br from-indigo-50 to-blue-50">
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">
        <span className="text-indigo-600">📊</span> 활용 데이터 (필수)
      </h2>

      <div className="bg-white rounded-xl shadow-xl p-8">
        <h3 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
          제주관광 빅데이터 서비스 플랫폼
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-blue-800 mb-3">✈️ 입도·이동 통계</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• 제주 내국인 입도 통계 (2019-2025)</li>
              <li>• 제주 외국인 입도 통계 (2019-2025)</li>
              <li>• 지역별 관광객 현황 (블록별)</li>
              <li>• 지역별 여행 키워드 (비짓제주)</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-green-800 mb-3">💳 생산·소비 통계</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• 월간 제주 소비 동향 (2013-2025)</li>
              <li>• 업종별 소비 분석 (내/외국인)</li>
              <li>• 지역별 매출액 증감률</li>
              <li>• 소외 지역 상권 파악</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-purple-800 mb-3">📈 관광동향 보고서</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• 한라산 탐방객 통계</li>
              <li>• 제주 운항편 수 및 여객수</li>
              <li>• 렌터카 가동률</li>
              <li>• 섬 속의 섬 이동객</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-orange-800 mb-3">🎯 실제 활용</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• 2025년 8월 실제 다운로드 데이터</li>
              <li>• CSV 파싱 → JSON 변환</li>
              <li>• 웹 페이지 실시간 통합</li>
              <li>• 투명한 출처 공개</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6 rounded-xl text-center">
        <p className="text-2xl font-bold">
          📌 data.ijto.or.kr → 검증 가능한 공식 데이터 활용
        </p>
      </div>
    </div>
  </Slide>,

  // Slide 13: 기대효과 (3가지)
  <Slide key="13" backgroundColor="bg-gradient-to-br from-green-50 to-blue-50">
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">
        <span className="text-green-600">🎉</span> 기대효과
      </h2>

      <div className="space-y-6">
        {/* 기대효과 1 */}
        <div className="bg-white rounded-xl shadow-xl p-8 border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            1️⃣ (對 관광객) '다수 관광약자' 시장(86%) 만족도 극대화
          </h3>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong>"아이/부모님 모시고 가기 힘든 제주"</strong>라는 부정적 인식을<br/>
              <strong className="text-blue-700">"데이터 기반으로 가장 편안하고 안전한 여행지"</strong>로 전환<br/><br/>
              → 연 <strong className="text-green-600">128만 명</strong> 거대 시장의 관광 만족도 극대화<br/>
              → 재방문 의사 <strong className="text-green-600">'Again'</strong> 증대
            </p>
          </div>
        </div>

        {/* 기대효과 2 */}
        <div className="bg-white rounded-xl shadow-xl p-8 border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            2️⃣ (對 지역경제) 데이터 기반의 능동적 '분수효과' 창출
          </h3>
          <div className="bg-green-50 p-6 rounded-lg">
            <p className="text-gray-800 leading-relaxed">
              특정 핫플레이스에 집중된 관광객의 <strong>동선과 소비</strong>를<br/>
              JejU-Again 내비게이션을 통해 <strong className="text-green-700">의도적으로</strong><br/>
              소외된 <strong className="text-blue-700">'읍면지역' 소상공인</strong>에게 분산<br/><br/>
              → 진정한 <strong className="text-green-600">지역 상생</strong> 및 <strong className="text-orange-600">'언더투어리즘' 해소</strong>
            </p>
          </div>
        </div>

        {/* 기대효과 3 */}
        <div className="bg-white rounded-xl shadow-xl p-8 border-l-4 border-purple-500">
          <h3 className="text-2xl font-bold text-purple-700 mb-4">
            3️⃣ (對 제주정책) '쏠림'과 '소외'를 동시 해결하는 데이터 행정 구현
          </h3>
          <div className="bg-purple-50 p-6 rounded-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-red-600">'오버투어리즘'(쏠림)</strong> +<br/>
              <strong className="text-blue-600">'언더투어리즘'(소외)</strong> +<br/>
              <strong className="text-orange-600">'관광약자 지원'</strong><br/><br/>
              → 제주 관광의 핵심 난제들을 <strong className="text-purple-700">단일 솔루션</strong>으로 해결<br/>
              → 데이터 기반 정책의 <strong className="text-green-600">전국적 모범 사례(Best Practice)</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 14: 기술 스택
  <Slide key="14">
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">
        <span className="text-purple-600">⚡</span> 기술 스택
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-blue-800 mb-4">프론트엔드</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Next.js 16</strong> (App Router)</li>
            <li>• <strong>TypeScript</strong> (타입 안정성)</li>
            <li>• <strong>Tailwind CSS v4</strong></li>
            <li>• <strong>Framer Motion</strong> (애니메이션)</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-purple-800 mb-4">AI & 데이터</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Claude Sonnet 4.0</strong> (Anthropic)</li>
            <li>• <strong>제주관광 빅데이터</strong> (data.ijto.or.kr)</li>
            <li>• <strong>한국관광공사 Tour API</strong></li>
            <li>• <strong>CSV 파싱</strong> (csv-parse)</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-green-800 mb-4">지도 & API</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Naver Maps API v3</strong></li>
            <li>• <strong>Directions API</strong> (경로 탐색)</li>
            <li>• <strong>실시간 혼잡도</strong> (시뮬레이션)</li>
            <li>• <strong>Google Sheets API</strong> (저장)</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-orange-800 mb-4">배포 & 인프라</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Vercel</strong> (자동 배포)</li>
            <li>• <strong>GitHub</strong> (버전 관리)</li>
            <li>• <strong>Edge Functions</strong> (API 라우트)</li>
            <li>• <strong>CDN</strong> (글로벌 배포)</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-xl text-center">
        <p className="text-2xl font-bold">
          최신 기술 스택으로 구현된 프로덕션 레디 서비스
        </p>
      </div>
    </div>
  </Slide>,

  // Slide 15: 활용 제안
  <Slide key="15" backgroundColor="bg-gradient-to-br from-yellow-50 to-orange-50">
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">
        <span className="text-orange-600">💡</span> 활용 제안
      </h2>

      <div className="space-y-6">
        {/* 필수 제안 */}
        <div className="bg-white rounded-xl shadow-xl p-8 border-l-4 border-red-500">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl">🔴</span>
            <h3 className="text-2xl font-bold text-red-700">
              [필수 제안] '실시간 데이터'의 API 엔드포인트 공개
            </h3>
          </div>
          <div className="bg-red-50 p-6 rounded-lg mb-4">
            <p className="text-gray-800 mb-4">
              본 아이디어의 핵심 기능인 <strong>'실시간 안심 알림'</strong>을 구현하기 위해서는<br/>
              다음 데이터가 필수적입니다:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong className="text-red-600">관광객 분포도 (5분 단위)</strong></li>
              <li>• <strong className="text-red-600">차량 분포도 (5분 단위)</strong></li>
            </ul>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <p className="text-gray-800">
              <strong>현재 상황:</strong> 데이터 다운로드 불가(X), 비짓제주 웹사이트 시각화 용도만 사용<br/><br/>
              <strong className="text-orange-700">요청 사항:</strong> 해당 실시간 데이터 스트림을 활용할 수 있는<br/>
              <strong className="text-red-600">API 엔드포인트의 공개 또는 활용 승인</strong>이 반드시 필요합니다
            </p>
          </div>
        </div>

        {/* 선택 제안 */}
        <div className="bg-white rounded-xl shadow-xl p-8 border-l-4 border-blue-500">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl">🔵</span>
            <h3 className="text-2xl font-bold text-blue-700">
              [선택 제안] '무장애 관광' 데이터 통합
            </h3>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-800 mb-4">
              본 서비스는 <strong>'경험적 접근성'</strong>(혼잡 회피)에 중점을 두지만,<br/>
              <strong>'물리적 접근성'</strong> 데이터를 융합하면 서비스 완성도를 극대화할 수 있습니다:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• 공공데이터포털: <strong>'제주 무장애 관광지 정보'</strong></li>
              <li>• 수유실, 경사로, 휠체어 접근성 등</li>
              <li>• '영아 동반(유모차)' / '케어 시니어(휠체어)' 프로필 시 활용</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 16: QR 코드 & 링크
  <Slide key="16" backgroundColor="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
    <div className="text-center text-white space-y-12">
      <h2 className="text-5xl font-bold mb-8">
        🚀 지금 바로 체험해보세요!
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl">
          <div className="bg-white p-6 rounded-xl mb-4">
            <div className="w-48 h-48 mx-auto bg-gray-200 flex items-center justify-center text-gray-600 text-sm">
              QR Code<br/>Placeholder
            </div>
          </div>
          <p className="text-2xl font-bold mb-2">프로토타입</p>
          <p className="text-blue-100 text-sm">jeju-again.vercel.app</p>
        </div>

        <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl">
          <div className="bg-white p-6 rounded-xl mb-4">
            <div className="w-48 h-48 mx-auto bg-gray-200 flex items-center justify-center text-gray-600 text-sm">
              QR Code<br/>Placeholder
            </div>
          </div>
          <p className="text-2xl font-bold mb-2">GitHub</p>
          <p className="text-blue-100 text-sm">github.com/yonghwan1106/<br/>jeju-again</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="inline-block bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl">
          <p className="text-xl font-semibold">📧 sanoramyun8@gmail.com</p>
        </div>
        <div className="inline-block bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl ml-4">
          <p className="text-xl font-semibold">📱 010-7939-3123</p>
        </div>
      </div>

      <div className="text-3xl font-light italic mt-12">
        "가장 빠른 길이 아닌, 가장 편안한 길"
      </div>
    </div>
  </Slide>,
];
