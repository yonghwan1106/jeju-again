'use client';

import { useState } from 'react';
import ProfileSelection from '@/components/ProfileSelection';
import ItineraryGenerator from '@/components/ItineraryGenerator';
import { ProfileType } from '@/types';

export default function Home() {
  const [selectedProfile, setSelectedProfile] = useState<ProfileType | null>(
    null
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section - ijto.or.kr inspired design */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Competition Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
              <span className="text-xl">🏆</span>
              <span className="font-medium text-white">2025 제주관광 데이터 활용 공모전 출품작</span>
            </div>

            {/* Logo and Title */}
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-4 shadow-2xl">
                <span className="text-5xl">🏝️</span>
              </div>
              <h1 className="text-6xl font-extrabold text-white mb-3 drop-shadow-lg">
                JejU-Again
              </h1>
              <p className="text-3xl font-semibold text-blue-100 mb-4">
                제주어게인
              </p>
            </div>

            {/* Main Description */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-6 border border-white/20">
              <p className="text-xl text-white leading-relaxed">
                데이터 기반 <span className="font-bold text-yellow-300">'관광약자-지역상생'</span> 맞춤형 내비게이션
              </p>
            </div>

            {/* Tagline */}
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-xl mb-8">
              <span className="text-3xl">🌿</span>
              <p className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                가장 빠른 길이 아닌, 가장 편안한 길
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-2">✨</div>
                <p className="text-sm font-semibold text-gray-800">AI 기반</p>
                <p className="text-xs text-gray-600">코스 생성</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-2">🚫</div>
                <p className="text-sm font-semibold text-gray-800">혼잡</p>
                <p className="text-xs text-gray-600">자동 회피</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-2">🤝</div>
                <p className="text-sm font-semibold text-gray-800">지역</p>
                <p className="text-xs text-gray-600">상생 지원</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-2">♿</div>
                <p className="text-sm font-semibold text-gray-800">접근성</p>
                <p className="text-xs text-gray-600">최우선</p>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(239 246 255)"/>
          </svg>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-12">
        {!selectedProfile ? (
          <div>
            {/* Stats Section - inspired by ijto.or.kr */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">제주 관광약자</p>
                    <p className="text-2xl font-bold text-blue-700">86%</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">시니어 & 영유아 동반 가족</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">관광 집중도</p>
                    <p className="text-2xl font-bold text-green-700">90%</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">특정 관광지에 집중</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">목표 만족도</p>
                    <p className="text-2xl font-bold text-purple-700">4.5/5.0</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">사용자 만족도 목표</p>
              </div>
            </div>

            {/* Profile Selection */}
            <ProfileSelection onSelectProfile={setSelectedProfile} />
          </div>
        ) : (
          <ItineraryGenerator
            profile={selectedProfile}
            onChangeProfile={() => setSelectedProfile(null)}
          />
        )}
      </div>

      {/* Info Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">제주의 모든 사람이 편안하게 여행할 수 있는 세상을 만듭니다</h2>
            <p className="text-blue-100">
              AI와 빅데이터 기술로 관광 약자를 배려하고, 지역 균형 발전을 이루는 스마트 관광 플랫폼
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
