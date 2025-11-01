'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Itinerary } from '@/types';
import Link from 'next/link';

export default function MyItinerariesPage() {
  const router = useRouter();
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4"
          >
            <span className="text-xl">←</span> 홈으로 돌아가기
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl">
              <span className="text-4xl">📚</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">저장된 일정</h1>
              <p className="text-gray-600 mt-2">
                Google Sheets에 저장된 여행 코스를 확인하세요
              </p>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-lg">
              <div className="animate-spin w-6 h-6 border-4 border-blue-600 border-t-transparent rounded-full"></div>
              <span className="text-gray-700 font-medium">일정 불러오는 중...</span>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border-2 border-red-500 rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">❌</span>
              <p className="text-red-800 font-medium">{error}</p>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !error && itineraries.length === 0 && (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 text-center">
            <span className="text-6xl mb-4 block">📭</span>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              저장된 일정이 없습니다
            </h2>
            <p className="text-gray-600 mb-6">
              일정을 생성하고 저장 버튼을 눌러 여기에서 확인하세요!
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-medium transition-all duration-300 shadow-lg"
            >
              일정 생성하러 가기
            </Link>
          </div>
        )}

        {/* Itineraries List */}
        {!isLoading && itineraries.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itineraries.map((itinerary) => (
              <div
                key={itinerary.id}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
                  <div className="text-4xl">{getProfileIcon(itinerary.profile)}</div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-gray-800">
                      {getProfileName(itinerary.profile)}
                    </h3>
                    <p className="text-xs text-gray-500">
                      ID: {itinerary.id?.substring(0, 20)}...
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-lg">📅</span>
                    <span className="text-gray-700">{itinerary.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-lg">⏰</span>
                    <span className="text-gray-700">{itinerary.duration}시간</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-lg">📍</span>
                    <span className="text-gray-700">{itinerary.startLocation}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-lg">🗺️</span>
                    <span className="text-gray-700">{itinerary.stops.length}개 경유지</span>
                  </div>
                </div>

                {/* Stops Preview */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 mb-4">
                  <p className="text-xs font-semibold text-gray-700 mb-2">경유지</p>
                  <div className="space-y-1">
                    {itinerary.stops.slice(0, 3).map((stop, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </span>
                        <span className="text-gray-700 truncate">{stop.name}</span>
                      </div>
                    ))}
                    {itinerary.stops.length > 3 && (
                      <p className="text-xs text-gray-500 ml-7">
                        +{itinerary.stops.length - 3}개 더보기
                      </p>
                    )}
                  </div>
                </div>

                {/* Created Date */}
                {itinerary.createdAt && (
                  <p className="text-xs text-gray-500 text-center mb-4">
                    생성: {new Date(itinerary.createdAt).toLocaleString('ko-KR')}
                  </p>
                )}

                {/* Action Button */}
                <button
                  onClick={() => {
                    // For now, just show details - you can implement a detail view later
                    alert(`일정 ID: ${itinerary.id}\n\n경유지:\n${itinerary.stops.map((s, i) => `${i + 1}. ${s.name}`).join('\n')}`);
                  }}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-medium transition-all duration-300 shadow-lg"
                >
                  상세보기
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
