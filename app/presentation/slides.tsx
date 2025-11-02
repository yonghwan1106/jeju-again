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

  // Slide 2: 문제 정의
  <Slide key="2">
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">
        <span className="text-red-600">⚠️</span> 문제 정의
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-red-800 mb-4">
            🏖️ 관광 쏠림 현상 (Overtourism)
          </h3>
          <ul className="space-y-3 text-lg text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span>관광객의 <strong className="text-red-600">90%</strong>가 특정 유명 관광지에 집중</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span>관광객 만족도 하락 & 주민 피로도 증가</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span>읍면 지역 상권 소외</span>
            </li>
          </ul>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-orange-800 mb-4">
            👥 '관광약자' 시장의 부재
          </h3>
          <ul className="space-y-3 text-lg text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <span>제주 관광약자의 <strong className="text-orange-600">86%</strong>는 시니어 + 영유아 동반 가족</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <span>극심한 혼잡, 소음, 대기시간으로 여행 제약</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <span>특화 서비스 전무</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-8 rounded-xl mt-8">
        <p className="text-2xl text-center text-gray-800 font-semibold">
          💡 <strong className="text-blue-700">거대 시장</strong>이지만 <strong className="text-red-600">소외</strong>된 관광약자를 위한<br/>
          <strong className="text-green-600">데이터 기반 맞춤형 솔루션</strong>이 필요합니다
        </p>
      </div>
    </div>
  </Slide>,

  // Slide 3: 해결 방안
  <Slide key="3" backgroundColor="bg-gradient-to-br from-green-50 to-blue-50">
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">
        <span className="text-green-600">✅</span> 해결 방안
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
          <div className="text-5xl mb-4 text-center">🤖</div>
          <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">AI 맞춤 코스 생성</h3>
          <p className="text-gray-600">
            Claude Sonnet 4.0 기반<br/>
            프로필별 최적화 일정
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
          <div className="text-5xl mb-4 text-center">🚫</div>
          <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">혼잡 지역 회피</h3>
          <p className="text-gray-600">
            빅데이터 기반<br/>
            한적한 장소 우선 추천
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
          <div className="text-5xl mb-4 text-center">🤝</div>
          <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">지역 상생</h3>
          <p className="text-gray-600">
            읍면 지역<br/>
            로컬 상점 연결
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-xl p-8 mt-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          📊 데이터 기반 의사결정 프로세스
        </h3>
        <div className="flex items-center justify-around">
          <div className="text-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-4xl">👤</span>
            </div>
            <p className="font-semibold">프로필 선택</p>
          </div>
          <div className="text-4xl text-gray-400">→</div>
          <div className="text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-4xl">🧠</span>
            </div>
            <p className="font-semibold">AI 분석</p>
          </div>
          <div className="text-4xl text-gray-400">→</div>
          <div className="text-center">
            <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-4xl">🗺️</span>
            </div>
            <p className="font-semibold">맞춤 코스</p>
          </div>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 4: 관광약자 프로파일링
  <Slide key="4">
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">
        <span className="text-blue-600">[F1]</span> 관광약자 프로파일링
      </h2>

      <div className="grid grid-cols-5 gap-4">
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6 text-center">
          <div className="text-5xl mb-3">🚶</div>
          <h3 className="font-bold text-blue-900 mb-2">액티브 시니어</h3>
          <p className="text-sm text-blue-700">65-74세</p>
          <p className="text-xs text-gray-600 mt-2">걷기/자연 선호</p>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-6 text-center">
          <div className="text-5xl mb-3">🧓</div>
          <h3 className="font-bold text-purple-900 mb-2">케어 시니어</h3>
          <p className="text-sm text-purple-700">75세+</p>
          <p className="text-xs text-gray-600 mt-2">짧은 산책/카페</p>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-6 text-center">
          <div className="text-5xl mb-3">👨‍👩‍👧</div>
          <h3 className="font-bold text-green-900 mb-2">유아 동반</h3>
          <p className="text-sm text-green-700">3-6세</p>
          <p className="text-xs text-gray-600 mt-2">체험/놀이 중심</p>
        </div>

        <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl p-6 text-center">
          <div className="text-5xl mb-3">👶</div>
          <h3 className="font-bold text-orange-900 mb-2">영아 동반</h3>
          <p className="text-sm text-orange-700">0-2세</p>
          <p className="text-xs text-gray-600 mt-2">유모차/수유실</p>
        </div>

        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-6 text-center">
          <div className="text-5xl mb-3">🧳</div>
          <h3 className="font-bold text-gray-900 mb-2">일반 관광객</h3>
          <p className="text-sm text-gray-700">기본</p>
          <p className="text-xs text-gray-600 mt-2">제약 없음</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">💡 프로파일별 맞춤 추천</h3>
        <ul className="space-y-2 text-lg text-gray-700">
          <li>✅ 각 프로필에 최적화된 <strong>접근성 정보</strong> (유모차, 휠체어, 주차장, 수유실)</li>
          <li>✅ <strong>선호도 기반</strong> 장소 선정 (시니어 → 조용한 숲길, 영유아 → 체험 공간)</li>
          <li>✅ <strong>로컬 스토리지</strong> 저장으로 재방문 시 자동 적용</li>
        </ul>
      </div>
    </div>
  </Slide>,

  // Slide 5: AI 안심 코스 생성
  <Slide key="5" backgroundColor="bg-gradient-to-br from-indigo-50 to-purple-50">
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">
        <span className="text-indigo-600">[F2]</span> AI 안심 코스 생성
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">🤖</span> Claude Sonnet 4.0
          </h3>
          <div className="space-y-3 text-gray-700">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="font-semibold text-indigo-900 mb-2">입력</p>
              <ul className="text-sm space-y-1">
                <li>• 사용자 프로필</li>
                <li>• 여행 날짜 & 시간</li>
                <li>• 출발 위치</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-semibold text-green-900 mb-2">처리</p>
              <ul className="text-sm space-y-1">
                <li>• 혼잡도 데이터 분석</li>
                <li>• 프로필 맞춤 필터링</li>
                <li>• 지역 분산 최적화</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-semibold text-purple-900 mb-2">출력</p>
              <ul className="text-sm space-y-1">
                <li>• 3-4개 경유지</li>
                <li>• 추천 사유 포함</li>
                <li>• 시간대별 일정</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">✨ AI 프롬프트 예시</h3>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <pre>{`당신은 제주도 관광 전문가입니다.

# 지침
1. 사용자 프로필(액티브 시니어)에
   맞는 장소 선택
2. 혼잡도 '한적' 상태만 선택
3. 지역 상점 최소 1개 포함
4. 추천 사유 작성

# 중요: 다양성 확보
- 제주 전역을 고루 활용
- 같은 지역만 선택 금지`}</pre>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-bold mb-2">🎯 핵심 알고리즘</p>
            <p className="text-lg">혼잡 회피 + 프로필 맞춤 + 지역 분산 = 최적 코스</p>
          </div>
          <div className="text-6xl">🧠</div>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 6: 인터랙티브 지도
  <Slide key="6">
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">
        <span className="text-green-600">[F3]</span> 인터랙티브 지도 뷰
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-green-900 mb-4">🗺️ Naver Maps API v3</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>경유지 마커 표시 (번호 1, 2, 3...)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>최적 경로 시각화 (Polyline)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>장소 정보창 (InfoWindow)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>리스트-지도 상호작용</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <p className="text-lg font-semibold text-blue-900 mb-2">📍 주요 기능</p>
            <p className="text-gray-700">
              사용자가 생성한 여행 코스를 실시간으로 시각화하여
              직관적인 경로 파악이 가능합니다.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="text-8xl mb-4">🗺️</div>
            <p className="text-xl font-semibold">지도 시각화 스크린샷</p>
            <p className="text-sm">(실제 배포 시 캡처)</p>
          </div>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 7: 혼잡도 시뮬레이션
  <Slide key="7" backgroundColor="bg-gradient-to-br from-yellow-50 to-orange-50">
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">
        <span className="text-orange-600">[F4]</span> 실시간 혼잡도 시뮬레이션
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-red-500">
          <div className="text-6xl mb-4">😡</div>
          <h3 className="text-2xl font-bold text-red-600 mb-2">혼잡</h3>
          <p className="text-gray-600">관광객 밀집<br/>AI가 회피</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-yellow-500">
          <div className="text-6xl mb-4">😐</div>
          <h3 className="text-2xl font-bold text-yellow-600 mb-2">보통</h3>
          <p className="text-gray-600">적당한 방문객<br/>상황에 따라 추천</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-green-500">
          <div className="text-6xl mb-4">😊</div>
          <h3 className="text-2xl font-bold text-green-600 mb-2">한적</h3>
          <p className="text-gray-600">여유로운 관광<br/>우선 추천</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">🔄 자동 갱신 시스템</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-lg text-gray-700 mb-4">
              <strong>30초마다</strong> Mock 데이터를 주기적으로 페칭하여
              실시간 혼잡도 변화를 시뮬레이션합니다.
            </p>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <code className="text-sm text-indigo-900">
                setInterval(() =&gt; fetchCongestion(), 30000)
              </code>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-lg">
            <p className="font-semibold text-gray-800 mb-3">💡 시각적 납득</p>
            <p className="text-gray-700 text-sm">
              AI가 왜 특정 '핫플레이스'를 회피했는지
              사용자에게 시각적으로 보여줍니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 8: 데이터 활용 - 제주관광 빅데이터
  <Slide key="8">
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">
        <span className="text-blue-600">📊</span> 제주관광 빅데이터 활용
      </h2>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl shadow-xl p-8 mb-8">
        <p className="text-3xl font-bold mb-2">data.ijto.or.kr</p>
        <p className="text-xl">제주관광빅데이터 플랫폼 공식 데이터 활용</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-gray-800 mb-4">✈️ 입도·이동 통계</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• 내/외국인 입도 통계</li>
            <li>• 지역별 관광객 현황</li>
            <li>• 지역별 여행 키워드</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-gray-800 mb-4">💳 생산·소비 통계</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• 월간 제주 소비 동향</li>
            <li>• 업종별 소비 분석</li>
            <li>• 월간 제주 외식물가</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
          <h3 className="text-xl font-bold text-gray-800 mb-4">📈 관광동향 데이터</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• 제주 운항편 수</li>
            <li>• 한라산 탐방객</li>
            <li>• 렌터카 가동률</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
        <div className="flex items-center gap-4">
          <div className="text-5xl">✅</div>
          <div>
            <p className="text-xl font-bold text-green-900 mb-2">실제 다운로드한 공식 데이터 사용</p>
            <p className="text-gray-700">
              2025년 8월 실제 입도 통계 직접 다운로드 및 통합 (CSV → JSON 변환)
            </p>
          </div>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 9: 실제 다운로드 데이터
  <Slide key="9" backgroundColor="bg-gradient-to-br from-blue-50 to-cyan-50">
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">
        <span className="text-cyan-600">📥</span> 실제 다운로드 데이터 통합
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">🇰🇷 내국인 입도객 (2025.08)</h3>
          <div className="bg-blue-50 p-6 rounded-lg mb-4">
            <p className="text-4xl font-bold text-blue-700 mb-2">1,083,603명</p>
            <p className="text-sm text-gray-600">월간 총 방문객</p>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between p-3 bg-gray-50 rounded">
              <span>휴양및관람</span>
              <span className="font-semibold">878,002명</span>
            </div>
            <div className="flex justify-between p-3 bg-gray-50 rounded">
              <span>레저스포츠</span>
              <span className="font-semibold">124,684명</span>
            </div>
            <div className="flex justify-between p-3 bg-gray-50 rounded">
              <span>친지방문</span>
              <span className="font-semibold">42,425명</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-green-900 mb-4">🌍 외국인 입도객 (2025.08)</h3>
          <div className="bg-green-50 p-6 rounded-lg mb-4">
            <p className="text-4xl font-bold text-green-700 mb-2">2,065,840명</p>
            <p className="text-sm text-gray-600">월간 총 방문객</p>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between p-3 bg-gray-50 rounded">
              <span>🇨🇳 중국</span>
              <span className="font-semibold">789,725명 (38.2%)</span>
            </div>
            <div className="flex justify-between p-3 bg-gray-50 rounded">
              <span>🇯🇵 일본</span>
              <span className="font-semibold">384,364명 (18.6%)</span>
            </div>
            <div className="flex justify-between p-3 bg-gray-50 rounded">
              <span>🇹🇼 대만</span>
              <span className="font-semibold">214,626명 (10.4%)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl shadow-xl p-6">
        <p className="text-2xl font-bold mb-2">📌 데이터 검증 가능</p>
        <p className="text-lg">
          GitHub 리포지토리에 원본 CSV 파일 및 처리 스크립트 공개
        </p>
      </div>
    </div>
  </Slide>,

  // Slide 10: 데이터 처리 파이프라인
  <Slide key="10">
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">
        <span className="text-indigo-600">⚙️</span> 데이터 처리 파이프라인
      </h2>

      <div className="bg-white rounded-xl shadow-xl p-8">
        <div className="flex items-center justify-around mb-8">
          <div className="text-center">
            <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-5xl">📥</span>
            </div>
            <p className="font-bold text-lg">CSV 다운로드</p>
            <p className="text-sm text-gray-600">data.ijto.or.kr</p>
          </div>
          <div className="text-5xl text-gray-400">→</div>
          <div className="text-center">
            <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-5xl">🔧</span>
            </div>
            <p className="font-bold text-lg">파싱 & 집계</p>
            <p className="text-sm text-gray-600">csv-parse</p>
          </div>
          <div className="text-5xl text-gray-400">→</div>
          <div className="text-center">
            <div className="w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-5xl">📊</span>
            </div>
            <p className="font-bold text-lg">JSON 변환</p>
            <p className="text-sm text-gray-600">자동 처리</p>
          </div>
          <div className="text-5xl text-gray-400">→</div>
          <div className="text-center">
            <div className="w-32 h-32 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-5xl">📈</span>
            </div>
            <p className="font-bold text-lg">시각화</p>
            <p className="text-sm text-gray-600">웹 페이지</p>
          </div>
        </div>

        <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm">
          <pre>{`// scripts/process-downloaded-data.ts
async function processDomesticData() {
  const csvContent = fs.readFileSync(csvPath, 'utf-8');
  const records = parse(csvContent, { columns: true });

  // 목적별, 형태별 집계
  records.forEach(record => {
    purposeData[record.카테고리] += record['입도객 수'];
  });

  return { total, byPurpose, byType };
}`}</pre>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 11: 기술 스택
  <Slide key="11" backgroundColor="bg-gradient-to-br from-gray-900 to-blue-900">
    <div className="space-y-8 text-white">
      <h2 className="text-5xl font-bold mb-8">
        <span className="text-cyan-400">🛠️</span> 기술 스택
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h3 className="text-2xl font-bold text-cyan-300 mb-4">Frontend</h3>
          <ul className="space-y-2">
            <li>• Next.js 16 (App Router)</li>
            <li>• TypeScript</li>
            <li>• Tailwind CSS v4</li>
            <li>• Framer Motion</li>
          </ul>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h3 className="text-2xl font-bold text-green-300 mb-4">Backend</h3>
          <ul className="space-y-2">
            <li>• Next.js API Routes</li>
            <li>• Serverless Functions</li>
            <li>• Google Sheets API</li>
          </ul>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h3 className="text-2xl font-bold text-purple-300 mb-4">Services</h3>
          <ul className="space-y-2">
            <li>• Claude Sonnet 4.0</li>
            <li>• Naver Maps API v3</li>
            <li>• Vercel (Deploy)</li>
          </ul>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
        <h3 className="text-2xl font-bold text-yellow-300 mb-6">📁 프로젝트 구조</h3>
        <div className="grid md:grid-cols-2 gap-6 font-mono text-sm">
          <div>
            <p className="text-cyan-400 mb-2">app/</p>
            <p className="ml-4">├─ api/generate-itinerary/</p>
            <p className="ml-4">├─ statistics/</p>
            <p className="ml-4">├─ data-center/</p>
            <p className="ml-4">└─ presentation/</p>
          </div>
          <div>
            <p className="text-green-400 mb-2">data/real/</p>
            <p className="ml-4">├─ jejuTouristSpots.json</p>
            <p className="ml-4">├─ touristStatistics2025.json</p>
            <p className="ml-4">└─ downloaded/</p>
          </div>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 12: 배포 및 성과
  <Slide key="12">
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">
        <span className="text-green-600">🚀</span> 배포 및 성과
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl shadow-xl p-8">
          <div className="text-6xl mb-4">☁️</div>
          <h3 className="text-3xl font-bold mb-4">Vercel 자동 배포</h3>
          <p className="text-lg mb-4">GitHub 연동 CI/CD 파이프라인</p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <p className="text-sm font-mono">https://jeju-again.vercel.app</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8 border-2 border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">📊 정량적 성과</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="text-3xl">✅</span>
              <div>
                <p className="font-bold">30개</p>
                <p className="text-sm text-gray-600">실제 제주 관광지 데이터</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-3xl">✅</span>
              <div>
                <p className="font-bold">3.1M+</p>
                <p className="text-sm text-gray-600">실제 입도 통계 (2025.08)</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-3xl">✅</span>
              <div>
                <p className="font-bold">6개 권역</p>
                <p className="text-sm text-gray-600">지역별 관광객 분포</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-3xl">✅</span>
              <div>
                <p className="font-bold">100%</p>
                <p className="text-sm text-gray-600">데이터 출처 투명성</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Slide>,

  // Slide 13: QR & 링크
  <Slide key="13" backgroundColor="bg-gradient-to-br from-purple-600 via-pink-600 to-red-600">
    <div className="text-center text-white space-y-12">
      <h2 className="text-5xl font-bold mb-8">
        🔗 프로젝트 체험하기
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <div className="w-64 h-64 bg-white rounded-xl mx-auto mb-6 flex items-center justify-center">
            <p className="text-gray-500 text-center">QR 코드<br/>(실제 배포 시 생성)</p>
          </div>
          <p className="text-2xl font-bold">웹사이트 방문</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 flex flex-col justify-center">
          <div className="space-y-6">
            <div>
              <p className="text-xl font-semibold mb-2">🌐 배포 사이트</p>
              <p className="text-sm font-mono bg-black/30 p-3 rounded">jeju-again.vercel.app</p>
            </div>
            <div>
              <p className="text-xl font-semibold mb-2">💻 GitHub</p>
              <p className="text-sm font-mono bg-black/30 p-3 rounded">github.com/yonghwan1106/jeju-again</p>
            </div>
            <div>
              <p className="text-xl font-semibold mb-2">📊 통계 페이지</p>
              <p className="text-sm font-mono bg-black/30 p-3 rounded">/statistics</p>
            </div>
            <div>
              <p className="text-xl font-semibold mb-2">📁 데이터 센터</p>
              <p className="text-sm font-mono bg-black/30 p-3 rounded">/data-center</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-3xl font-bold mt-12">
        감사합니다! 🙏
      </div>
    </div>
  </Slide>,
];
