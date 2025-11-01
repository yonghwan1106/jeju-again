'use client';

import { useState } from 'react';
import { ProfileType, Itinerary } from '@/types';
import ItineraryForm from './ItineraryForm';
import ItineraryDisplay from './ItineraryDisplay';

interface ItineraryGeneratorProps {
  profile: ProfileType;
  onChangeProfile: () => void;
}

export default function ItineraryGenerator({
  profile,
  onChangeProfile,
}: ItineraryGeneratorProps) {
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateItinerary = async (formData: {
    date: string;
    duration: number;
    startLocation: string;
  }) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/generate-itinerary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          profile,
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error('일정 생성에 실패했습니다.');
      }

      const data = await response.json();
      setItinerary(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const getProfileName = (type: ProfileType): string => {
    const names: Record<ProfileType, string> = {
      ACTIVE_SENIOR: '액티브 시니어',
      CARE_SENIOR: '케어 시니어',
      TODDLER_FAMILY: '유아 동반 가족',
      INFANT_FAMILY: '영아 동반 가족',
      GENERAL: '일반 관광객',
    };
    return names[type];
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              안심 코스 생성하기
            </h2>
            <p className="text-gray-600 mt-1">
              선택한 프로필: <strong>{getProfileName(profile)}</strong>
            </p>
          </div>
          <button
            onClick={onChangeProfile}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors"
          >
            프로필 변경
          </button>
        </div>

        {!itinerary && (
          <ItineraryForm
            onSubmit={handleGenerateItinerary}
            isLoading={isLoading}
          />
        )}

        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800">{error}</p>
          </div>
        )}
      </div>

      {itinerary && (
        <ItineraryDisplay
          itinerary={itinerary}
          onGenerateNew={() => setItinerary(null)}
        />
      )}
    </div>
  );
}
