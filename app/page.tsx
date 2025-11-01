'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProfileSelection from '@/components/ProfileSelection';
import ItineraryGenerator from '@/components/ItineraryGenerator';
import { ProfileType } from '@/types';

export default function Home() {
  const [selectedProfile, setSelectedProfile] = useState<ProfileType | null>(
    null
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section with Island Graphic */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-green-400/10"></div>
        <div className="container mx-auto px-4 py-12 relative">
          <header className="text-center mb-8">
            {/* Logo/Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mb-6 shadow-lg">
              <span className="text-4xl">🏝️</span>
            </div>

            <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
              JejU-Again
            </h1>
            <p className="text-2xl font-semibold text-gray-700 mb-3">
              제주어게인
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              데이터 기반 <span className="font-semibold text-blue-600">'관광약자-지역상생'</span> 맞춤형 내비게이션
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-blue-100 rounded-full">
              <span className="text-2xl">🌿</span>
              <p className="text-lg font-medium text-blue-800">
                가장 빠른 길이 아닌, 가장 편안한 길
              </p>
            </div>

            {/* Feature Badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200">
                ✨ AI 기반 코스 생성
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200">
                🚫 혼잡 회피
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200">
                🤝 지역 상생
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200">
                ♿ 접근성 우선
              </span>
            </div>

            {/* My Itineraries Link */}
            <div className="mt-6">
              <Link
                href="/my-itineraries"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="text-xl">📚</span>
                저장된 일정 보기
              </Link>
            </div>
          </header>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        {!selectedProfile ? (
          <ProfileSelection onSelectProfile={setSelectedProfile} />
        ) : (
          <ItineraryGenerator
            profile={selectedProfile}
            onChangeProfile={() => setSelectedProfile(null)}
          />
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600 text-sm">
            <p className="mb-2">
              제주의 모든 사람이 편안하게 여행할 수 있는 세상을 만듭니다
            </p>
            <p className="text-xs text-gray-500">
              © 2025 JejU-Again. Powered by Claude AI & Naver Maps
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
