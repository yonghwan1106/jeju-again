'use client';

import { useEffect, useState } from 'react';
import { Itinerary } from '@/types';
import Link from 'next/link';

export default function MyItinerariesPage() {
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadSavedItineraries();
  }, []);

  const loadSavedItineraries = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Get saved IDs from localStorage
      const savedIds = JSON.parse(localStorage.getItem('savedItineraries') || '[]');

      if (savedIds.length === 0) {
        setItineraries([]);
        setIsLoading(false);
        return;
      }

      // Load each itinerary
      const loadedItineraries: Itinerary[] = [];
      for (const id of savedIds) {
        try {
          const response = await fetch(`/api/load-itinerary?id=${id}`);
          if (response.ok) {
            const itinerary = await response.json();
            loadedItineraries.push(itinerary);
          }
        } catch (err) {
          console.error(`Failed to load itinerary ${id}:`, err);
        }
      }

      setItineraries(loadedItineraries);
    } catch (err) {
      console.error('Error loading itineraries:', err);
      setError('저장된 일정을 불러오는데 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const getProfileName = (profile: string): string => {
    const names: Record<string, string> = {
      ACTIVE_SENIOR: '액티브 시니어',
      CARE_SENIOR: '케어 시니어',
      TODDLER_FAMILY: '유아 동반 가족',
      INFANT_FAMILY: '영아 동반 가족',
      GENERAL: '일반 관광객',
    };
    return names[profile] || profile;
  };

  const getProfileIcon = (profile: string): string => {
    const icons: Record<string, string> = {
      ACTIVE_SENIOR: '🚶',
      CARE_SENIOR: '☕',
      TODDLER_FAMILY: '👨‍👩‍👧',
      INFANT_FAMILY: '👶',
      GENERAL: '✈️',
    };
    return icons[profile] || '📍';
  };

  const getProfileColor = (profile: string): string => {
    const colors: Record<string, string> = {
      ACTIVE_SENIOR: 'from-blue-500 to-blue-600',
      CARE_SENIOR: 'from-purple-500 to-purple-600',
      TODDLER_FAMILY: 'from-green-500 to-green-600',
      INFANT_FAMILY: 'from-pink-500 to-pink-600',
      GENERAL: 'from-gray-500 to-gray-600',
    };
    return colors[profile] || 'from-blue-500 to-blue-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Page Header - ijto.or.kr style */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <span className="text-xl">←</span>
              <span className="font-medium">홈으로 돌아가기</span>
            </Link>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <span className="text-4xl">📚</span>
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">저장된 일정</h1>
                <p className="text-blue-100">
                  Google Sheets에 저장된 여행 코스를 확인하세요
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-16">
              <div className="inline-flex items-center gap-3 px-8 py-5 bg-white rounded-2xl shadow-xl">
                <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
                <span className="text-gray-700 font-semibold text-lg">일정 불러오는 중...</span>
              </div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">❌</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-red-800 mb-1">오류 발생</h3>
                  <p className="text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Empty State */}
          {!isLoading && !error && itineraries.length === 0 && (
            <div className="bg-white rounded-2xl shadow-xl p-16 text-center">
              <div className="max-w-md mx-auto">
                <span className="text-8xl mb-6 block">📭</span>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  저장된 일정이 없습니다
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  일정을 생성하고 저장 버튼을 눌러 여기에서 확인하세요!
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="text-2xl">✨</span>
                  일정 생성하러 가기
                </Link>
              </div>
            </div>
          )}

          {/* Statistics Banner */}
          {!isLoading && itineraries.length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border-l-4 border-blue-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">저장된 일정</p>
                    <p className="text-2xl font-bold text-blue-700">{itineraries.length}개</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">총 경유지</p>
                  <p className="text-2xl font-bold text-green-700">
                    {itineraries.reduce((sum, it) => sum + it.stops.length, 0)}개
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Itineraries Grid */}
          {!isLoading && itineraries.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itineraries.map((itinerary) => (
                <div
                  key={itinerary.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Card Header with Gradient */}
                  <div className={`bg-gradient-to-r ${getProfileColor(itinerary.profile)} p-6`}>
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <span className="text-3xl">{getProfileIcon(itinerary.profile)}</span>
                      </div>
                      <div className="flex-grow text-white">
                        <h3 className="font-bold text-lg">
                          {getProfileName(itinerary.profile)}
                        </h3>
                        <p className="text-xs text-white/80">
                          {itinerary.id?.substring(0, 20)}...
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg">📅</span>
                          <span className="text-xs text-gray-600">날짜</span>
                        </div>
                        <p className="text-sm font-semibold text-gray-800">{itinerary.date}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg">⏰</span>
                          <span className="text-xs text-gray-600">시간</span>
                        </div>
                        <p className="text-sm font-semibold text-gray-800">{itinerary.duration}시간</p>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-3 mb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">📍</span>
                        <span className="text-xs text-gray-600">출발지</span>
                      </div>
                      <p className="text-sm font-semibold text-gray-800">{itinerary.startLocation}</p>
                    </div>

                    {/* Stops Preview */}
                    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-4 mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-xs font-bold text-gray-700">경유지</p>
                        <span className="px-2 py-1 bg-blue-500 text-white rounded-full text-xs font-bold">
                          {itinerary.stops.length}개
                        </span>
                      </div>
                      <div className="space-y-2">
                        {itinerary.stops.slice(0, 3).map((stop, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <span className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                              {index + 1}
                            </span>
                            <span className="text-sm text-gray-700 truncate">{stop.name}</span>
                          </div>
                        ))}
                        {itinerary.stops.length > 3 && (
                          <p className="text-xs text-gray-500 ml-8">
                            +{itinerary.stops.length - 3}개 더보기
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Created Date */}
                    {itinerary.createdAt && (
                      <div className="flex items-center justify-center gap-2 py-2 mb-4 bg-gray-50 rounded-lg">
                        <span className="text-xs">🕐</span>
                        <p className="text-xs text-gray-600">
                          생성: {new Date(itinerary.createdAt).toLocaleString('ko-KR')}
                        </p>
                      </div>
                    )}

                    {/* Action Button */}
                    <button
                      onClick={() => {
                        alert(`일정 ID: ${itinerary.id}\n\n경유지:\n${itinerary.stops.map((s, i) => `${i + 1}. ${s.name} (${s.time})`).join('\n')}`);
                      }}
                      className={`w-full py-3 bg-gradient-to-r ${getProfileColor(itinerary.profile)} hover:opacity-90 text-white rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg`}
                    >
                      상세보기
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
