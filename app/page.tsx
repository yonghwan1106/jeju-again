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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">
            JejU-Again
          </h1>
          <p className="text-xl text-gray-700 mb-2">
            제주어게인
          </p>
          <p className="text-lg text-gray-600">
            데이터 기반 '관광약자-지역상생' 맞춤형 내비게이션
          </p>
          <p className="text-md text-blue-600 mt-2">
            가장 빠른 길이 아닌, 가장 편안한 길
          </p>
        </header>

        {!selectedProfile ? (
          <ProfileSelection onSelectProfile={setSelectedProfile} />
        ) : (
          <ItineraryGenerator
            profile={selectedProfile}
            onChangeProfile={() => setSelectedProfile(null)}
          />
        )}
      </div>
    </div>
  );
}
