'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function StatisticsPage() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedMonth, setSelectedMonth] = useState('11');

  // Mock data based on PDF
  const touristStats = {
    domestic: { total: 746, change: 7.2, trend: 'up' },
    foreign: { total: 152, change: 15.6, trend: 'up' },
    monthly: { total: 37822, change: 0.17, trend: 'up' },
    vulnerable: { percentage: 86, description: '시니어 & 영유아 동반 가족' },
  };

  const regionalDistribution = [
    { region: '제주시 동지역', visitors: 35.2, change: 2.1 },
    { region: '제주시 서부', visitors: 18.5, change: -1.5 },
    { region: '제주시 동부', visitors: 12.3, change: 4.2 },
    { region: '서귀포시 동지역', visitors: 15.8, change: 1.8 },
    { region: '서귀포시 서부', visitors: 10.2, change: 3.5 },
    { region: '서귀포시 동부', visitors: 8.0, change: 2.9 },
  ];

  const consumptionByIndustry = [
    { industry: '소매업', amount: 2026, change: 5.2 },
    { industry: '음식점업', amount: 1872, change: 3.8 },
    { industry: '숙박업', amount: 956, change: -2.1 },
    { industry: '운수업', amount: 543, change: 6.7 },
    { industry: '예술스포츠여가업', amount: 229, change: 8.3 },
    { industry: '기타서비스업', amount: 171, change: 1.5 },
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
                <span className="text-4xl">📊</span>
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">제주 관광 통계</h1>
                <p className="text-blue-100">
                  실시간 빅데이터 기반 제주 관광 현황 및 분석
                </p>
              </div>
            </div>

            {/* Date Selector */}
            <div className="mt-8 flex gap-4">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                {['2025', '2024', '2023', '2022', '2021'].map((year) => (
                  <option key={year} value={year} className="text-gray-800">
                    {year}년
                  </option>
                ))}
              </select>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                  <option key={month} value={month} className="text-gray-800">
                    {month}월
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Tourist Statistics */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span>✈️</span> 입도 관광객 현황
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🇰🇷</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">내국인 (연도별)</p>
                    <p className="text-3xl font-bold text-blue-700">
                      {touristStats.domestic.total}
                      <span className="text-sm text-gray-500">만 명</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm ${touristStats.domestic.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {touristStats.domestic.trend === 'up' ? '↑' : '↓'} {Math.abs(touristStats.domestic.change)}%
                  </span>
                  <span className="text-xs text-gray-500">전년 대비</span>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">외국인 (연도별)</p>
                    <p className="text-3xl font-bold text-green-700">
                      {touristStats.foreign.total}
                      <span className="text-sm text-gray-500">만 명</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm ${touristStats.foreign.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {touristStats.foreign.trend === 'up' ? '↑' : '↓'} {Math.abs(touristStats.foreign.change)}%
                  </span>
                  <span className="text-xs text-gray-500">전년 대비</span>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📅</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">월간 외래객 (토)</p>
                    <p className="text-3xl font-bold text-purple-700">
                      {touristStats.monthly.total.toLocaleString()}
                      <span className="text-sm text-gray-500">명</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm ${touristStats.monthly.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {touristStats.monthly.trend === 'up' ? '↑' : '↓'} {Math.abs(touristStats.monthly.change)}%
                  </span>
                  <span className="text-xs text-gray-500">전월 대비</span>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">관광약자 비율</p>
                    <p className="text-3xl font-bold text-orange-700">
                      {touristStats.vulnerable.percentage}
                      <span className="text-sm text-gray-500">%</span>
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-600">{touristStats.vulnerable.description}</p>
              </div>
            </div>
          </section>

          {/* Regional Distribution */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span>🗺️</span> 지역별 관광객 분포
            </h2>
            <div className="space-y-4">
              {regionalDistribution.map((region, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-32 flex-shrink-0">
                    <p className="text-sm font-medium text-gray-700">{region.region}</p>
                  </div>
                  <div className="flex-grow">
                    <div className="h-8 bg-gray-100 rounded-lg overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-end pr-3 transition-all duration-500"
                        style={{ width: `${(region.visitors / 35.2) * 100}%` }}
                      >
                        <span className="text-sm font-bold text-white">
                          {region.visitors}%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-20 flex-shrink-0 text-right">
                    <span className={`text-sm font-semibold ${region.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {region.change >= 0 ? '+' : ''}{region.change}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">💡 인사이트:</span> 제주시 동지역에 관광객이 가장 집중되어 있으며,
                동부/서부 지역으로의 분산이 필요합니다.
              </p>
            </div>
          </section>

          {/* Consumption by Industry */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span>💳</span> 업종별 소비 금액 현황
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {consumptionByIndustry.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-lg font-bold text-blue-700">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{item.industry}</p>
                      <p className="text-sm text-gray-500">{item.amount.toLocaleString()}억 원</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    item.change >= 0
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {item.change >= 0 ? '+' : ''}{item.change}%
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Data Source Note */}
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl">ℹ️</span>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">데이터 출처</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  본 통계는 <strong>제주관광빅데이터 플랫폼 (data.ijto.or.kr)</strong>의 공개 데이터를 기반으로 하며,
                  제주특별자치도관광협회, 한국문화관광연구원, 한국공항공사 등 공공기관의 데이터를 활용합니다.
                  <br />
                  <span className="text-xs text-gray-600">
                    * 본 페이지의 수치는 2025년 제주관광 데이터 활용 공모전을 위한 시뮬레이션 데이터입니다.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
