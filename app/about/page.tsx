'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-xl">🏆</span>
              <span className="font-medium">2025 제주관광 데이터 활용 공모전 출품작</span>
            </div>
            <h1 className="text-5xl font-bold mb-4">JejU-Again 프로젝트 소개</h1>
            <p className="text-xl text-blue-100">
              데이터 기반 관광약자-지역상생 맞춤형 내비게이션
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* 프로젝트 개요 */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🎯</span>
              <h2 className="text-3xl font-bold text-gray-800">프로젝트 개요</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <strong className="text-blue-700">JejU-Again(제주어게인)</strong>은 제주의 오버투어리즘(관광 쏠림 현상)과
                관광약자(시니어, 영유아 동반 가족)의 관광 소외 문제를 동시에 해결하는 AI 기반 웹 애플리케이션입니다.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="font-semibold text-blue-900 text-lg">
                  "가장 빠른 길이 아닌, 가장 편안한 길"
                </p>
              </div>
              <p>
                사용자의 프로필에 맞춰 <span className="font-semibold text-blue-700">혼잡을 회피</span>하고,
                읍면 지역의 숨겨진 장소를 연결하는 맞춤형 '안심 상생' 여행 코스를 제안합니다.
              </p>
            </div>
          </section>

          {/* 해결하고자 하는 문제 */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🚨</span>
              <h2 className="text-3xl font-bold text-gray-800">해결하고자 하는 문제</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
                  <span>📊</span> 관광 쏠림 현상 (Overtourism)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 관광객의 90%가 특정 유명 관광지에 집중</li>
                  <li>• 관광객 만족도 하락</li>
                  <li>• 지역 주민 피로도 증가</li>
                  <li>• 읍면 지역 상권 소외</li>
                </ul>
              </div>
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-xl font-bold text-orange-800 mb-3 flex items-center gap-2">
                  <span>👴👶</span> 관광약자 시장의 부재
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 제주 관광약자의 86%는 시니어와 영유아 동반 가족</li>
                  <li>• 극심한 혼잡, 소음, 대기 시간</li>
                  <li>• 유아 케어 시설 부재</li>
                  <li>• 특화 서비스 전무</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 주요 기능 */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">✨</span>
              <h2 className="text-3xl font-bold text-gray-800">주요 기능</h2>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                  👤
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">관광약자 프로파일링</h3>
                  <p className="text-gray-700">
                    액티브 시니어, 케어 시니어, 유아 동반 가족, 영아 동반 가족, 일반 관광객 등
                    5가지 프로필 선택 가능
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl">
                  🤖
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">AI 안심 코스 생성</h3>
                  <p className="text-gray-700">
                    Claude Sonnet 4.0 API를 활용한 맞춤형 일정 생성. 혼잡 지역 자동 회피 및
                    관광약자 선호도 기반 장소 추천
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl">
                  🗺️
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">인터랙티브 지도 뷰</h3>
                  <p className="text-gray-700">
                    Naver Maps API를 통한 코스 시각화, 경유지 마커 표시 및 경로 연결 표시
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-2xl">
                  📊
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">실시간 혼잡도 시뮬레이션</h3>
                  <p className="text-gray-700">
                    30초마다 자동 갱신되는 실시간 시뮬레이션. 지도 위 이모지 마커로 혼잡 지역 시각화
                    (😡 혼잡, 😐 보통, 😊 한적)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 기술 스택 */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🛠️</span>
              <h2 className="text-3xl font-bold text-gray-800">기술 스택</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <span className="text-2xl">⚛️</span>
                <div>
                  <p className="font-semibold text-gray-800">Frontend</p>
                  <p className="text-sm text-gray-600">Next.js 16 (App Router)</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <span className="text-2xl">🎨</span>
                <div>
                  <p className="font-semibold text-gray-800">Styling</p>
                  <p className="text-sm text-gray-600">Tailwind CSS v4</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <span className="text-2xl">🤖</span>
                <div>
                  <p className="font-semibold text-gray-800">AI</p>
                  <p className="text-sm text-gray-600">Claude Sonnet 4.0</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <span className="text-2xl">🗺️</span>
                <div>
                  <p className="font-semibold text-gray-800">Maps</p>
                  <p className="text-sm text-gray-600">Naver Maps API v3</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <span className="text-2xl">📊</span>
                <div>
                  <p className="font-semibold text-gray-800">Database</p>
                  <p className="text-sm text-gray-600">Google Sheets API</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <span className="text-2xl">🚀</span>
                <div>
                  <p className="font-semibold text-gray-800">Deployment</p>
                  <p className="text-sm text-gray-600">Vercel</p>
                </div>
              </div>
            </div>
          </section>

          {/* 대상 사용자 */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">👥</span>
              <h2 className="text-3xl font-bold text-gray-800">대상 사용자</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  액티브 시니어 (65-74세)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 건강하지만 장시간 걷기가 부담스러운 분</li>
                  <li>• 조용한 숲길, 경치 좋은 카페 선호</li>
                </ul>
              </div>

              <div className="border-2 border-purple-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-800 mb-3">
                  케어 시니어 (75세 이상)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 짧은 산책과 편안한 휴식 선호</li>
                  <li>• 접근성이 좋은 장소 필요</li>
                </ul>
              </div>

              <div className="border-2 border-green-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  유아 동반 가족 (3-6세)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 아이들이 뛰어놀 수 있는 체험 활동 선호</li>
                  <li>• 넓은 공간과 안전한 환경 필요</li>
                </ul>
              </div>

              <div className="border-2 border-pink-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-pink-800 mb-3">
                  영아 동반 가족 (0-2세)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 유모차 접근성과 수유실 필수</li>
                  <li>• 아이 케어 시설이 있는 장소 선호</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 기대 효과 */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🎯</span>
              <h2 className="text-3xl font-bold">기대 효과</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">90%+</div>
                <p className="text-blue-100">혼잡 회피 기능 긍정 평가율</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">80%+</div>
                <p className="text-blue-100">읍면 지역 POI 포함 비율</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">4.5/5.0</div>
                <p className="text-blue-100">목표 사용자 만족도</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
