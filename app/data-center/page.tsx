'use client';

import Link from 'next/link';

export default function DataCenterPage() {
  const datasets = [
    {
      category: '입도·이동 통계',
      icon: '✈️',
      items: [
        {
          name: '제주 내국인 입도 통계',
          period: '2019~2025',
          format: 'Excel / CSV',
          description: '제주특별자치도 내국인 입도 통계',
          source: '제주특별자치도관광협회',
        },
        {
          name: '제주 외국인 입도 통계',
          period: '2019~2025',
          format: 'Excel / CSV',
          description: '제주특별자치도 외국인 입도 통계',
          source: '제주특별자치도관광협회, 한국문화관광연구원',
        },
        {
          name: '지역별 관광객 현황',
          period: '2019~2025',
          format: 'Excel / CSV',
          description: '내국인 관광객 기준, 블록별/읍면동별 현황',
          source: '제주관광빅데이터 플랫폼',
        },
        {
          name: '지역별 여행 키워드',
          period: '2021~2025',
          format: 'Excel / CSV',
          description: '통신사 기준 방문지역 순위 및 비짓제주 여행지 키워드',
          source: '제주관광빅데이터 플랫폼',
        },
      ],
    },
    {
      category: '생산·소비 통계',
      icon: '💳',
      items: [
        {
          name: '월간 제주 소비 동향',
          period: '2013~2025',
          format: 'Excel / CSV',
          description: '업종별, 지역별, 출신지역별 소비금액 추이 및 분석',
          source: '카드사 데이터',
        },
        {
          name: '업종별 소비분석',
          period: '2013~2025',
          format: 'Excel / CSV',
          description: '관광객 구분(내/외국인), 업종별 매출액 및 증감율',
          source: '제주관광빅데이터 플랫폼',
        },
        {
          name: '월간 제주 외식물가',
          period: '2015~2025',
          format: 'Excel / CSV',
          description: '품목별 외식물가 현황 (김밥~칼국수 등)',
          source: '제주특별자치도',
        },
      ],
    },
    {
      category: '관광동향 보고서 데이터',
      icon: '📊',
      items: [
        {
          name: '제주 운항편 수 및 여객수',
          period: '2023~2025',
          format: 'Excel / CSV',
          description: '월별 제주 운항편 및 여객 수',
          source: '한국공항공사',
        },
        {
          name: '여객선 이용객',
          period: '2023~2025',
          format: 'Excel / CSV',
          description: '항로별 여객 수송 현황(여객, 차량, 화물)',
          source: '한국해양교통안전공단 제주운항센터',
        },
        {
          name: '렌터카 가동률',
          period: '2023~2025',
          format: 'Excel / CSV',
          description: '렌터카 등록대수, 대여 시간, 가동률 등',
          source: '제주특별자치도 렌터카조합',
        },
        {
          name: '한라산 탐방객',
          period: '2021~2025',
          format: 'Excel / CSV',
          description: '한라산 탐방객 통계',
          source: '제주특별자치도 한라산국립공원관리소',
        },
        {
          name: '제주 섬 속의 섬 이동객',
          period: '2023~2025',
          format: 'Excel / CSV',
          description: '우도, 가파도, 마라도, 비양도, 추자도 이동객',
          source: '제주지방해양경찰청, 한국해양교통안전공단',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <span className="text-xl">←</span>
              <span className="font-medium">홈으로 돌아가기</span>
            </Link>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <span className="text-4xl">📁</span>
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">데이터 센터</h1>
                <p className="text-blue-100">
                  제주 관광 공개 데이터 및 통계 자료실
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Info Banner */}
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📢</span>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">데이터 제공 안내</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-2">
                  본 페이지에서 제공하는 데이터는 <strong>제주관광빅데이터 플랫폼 (data.ijto.or.kr)</strong> 및
                  관련 공공기관의 공개 데이터를 기반으로 합니다.
                </p>
                <p className="text-xs text-gray-600">
                  * 2025 제주관광 데이터 활용 공모전 출품작인 JejU-Again 프로젝트의 참고 자료입니다.
                </p>
              </div>
            </div>
          </div>

          {/* Datasets by Category */}
          {datasets.map((category, catIndex) => (
            <section key={catIndex} className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span>{category.icon}</span> {category.category}
              </h2>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="border-2 border-gray-100 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {item.description}
                        </p>
                      </div>
                      <div className="ml-4">
                        <button
                          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg"
                          onClick={() => alert('실제 배포 시 data.ijto.or.kr의 API를 연동하여 다운로드 기능을 제공합니다.')}
                        >
                          📥 다운로드
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500">📅 기간:</span>
                        <span className="font-medium text-gray-700">{item.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500">📄 형식:</span>
                        <span className="font-medium text-gray-700">{item.format}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500">🏢 출처:</span>
                        <span className="font-medium text-gray-700">{item.source}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* External Link to Official Platform */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  제주관광빅데이터 플랫폼 방문하기
                </h3>
                <p className="text-blue-100 mb-4">
                  더 많은 데이터와 실시간 통계를 확인하시려면 공식 플랫폼을 방문하세요
                </p>
                <a
                  href="https://data.ijto.or.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  <span>🔗</span>
                  data.ijto.or.kr 방문하기
                  <span className="text-xl">→</span>
                </a>
              </div>
              <div className="text-8xl opacity-20">
                📊
              </div>
            </div>
          </div>

          {/* Usage Guidelines */}
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span>⚠️</span> 데이터 이용 시 주의사항
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  본 플랫폼은 제주관광 데이터를 시각화하고 분석하는 <strong>참고용 프로젝트</strong>입니다.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  실제 다운로드 기능은 공식 플랫폼인 <strong>data.ijto.or.kr</strong>을 이용해주세요.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  데이터 활용 시 출처를 명시하고, 관련 기관의 이용 약관을 준수해주세요.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
