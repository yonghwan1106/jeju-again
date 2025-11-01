'use client';

import { ProfileType, UserProfile } from '@/types';

interface ProfileSelectionProps {
  onSelectProfile: (profile: ProfileType) => void;
}

const profiles: UserProfile[] = [
  {
    type: 'ACTIVE_SENIOR',
    name: '액티브 시니어',
    description: '65-74세, 걷기와 자연을 즐기시는 분',
  },
  {
    type: 'CARE_SENIOR',
    name: '케어 시니어',
    description: '75세 이상, 짧은 산책과 편안한 카페를 선호하시는 분',
  },
  {
    type: 'TODDLER_FAMILY',
    name: '유아 동반 가족',
    description: '3-6세 아이와 함께, 체험과 놀이 중심',
  },
  {
    type: 'INFANT_FAMILY',
    name: '영아 동반 가족',
    description: '0-2세 아기와 함께, 유모차와 수유실 필수',
  },
  {
    type: 'GENERAL',
    name: '일반 관광객',
    description: '제약 없이 여행을 즐기는 일반 관광객',
  },
];

const getProfileIcon = (type: ProfileType): string => {
  switch (type) {
    case 'ACTIVE_SENIOR':
      return '🚶';
    case 'CARE_SENIOR':
      return '☕';
    case 'TODDLER_FAMILY':
      return '👨‍👩‍👧';
    case 'INFANT_FAMILY':
      return '👶';
    case 'GENERAL':
      return '✈️';
  }
};

const getProfileColor = (type: ProfileType): { from: string; to: string; border: string; hoverBorder: string } => {
  switch (type) {
    case 'ACTIVE_SENIOR':
      return { from: 'from-green-50', to: 'to-green-100', border: 'border-green-300', hoverBorder: 'hover:border-green-500' };
    case 'CARE_SENIOR':
      return { from: 'from-amber-50', to: 'to-amber-100', border: 'border-amber-300', hoverBorder: 'hover:border-amber-500' };
    case 'TODDLER_FAMILY':
      return { from: 'from-purple-50', to: 'to-purple-100', border: 'border-purple-300', hoverBorder: 'hover:border-purple-500' };
    case 'INFANT_FAMILY':
      return { from: 'from-pink-50', to: 'to-pink-100', border: 'border-pink-300', hoverBorder: 'hover:border-pink-500' };
    case 'GENERAL':
      return { from: 'from-blue-50', to: 'to-blue-100', border: 'border-blue-300', hoverBorder: 'hover:border-blue-500' };
  }
};

export default function ProfileSelection({
  onSelectProfile,
}: ProfileSelectionProps) {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4">
            <span className="text-4xl">👥</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            안심 프로필 선택
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            여행 스타일에 맞는 프로필을 선택해주세요.
            <br />
            <span className="text-blue-600 font-medium">혼잡을 피하고 편안한 여행 코스</span>를 추천해드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {profiles.map((profile) => {
            const colors = getProfileColor(profile.type);
            return (
              <button
                key={profile.type}
                onClick={() => onSelectProfile(profile.type)}
                className={`bg-gradient-to-br ${colors.from} ${colors.to} border-2 ${colors.border} ${colors.hoverBorder} rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-left group relative overflow-hidden`}
              >
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="text-6xl mb-4 text-center transform group-hover:scale-110 transition-transform duration-300">
                    {getProfileIcon(profile.type)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                    {profile.name}
                  </h3>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    {profile.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-100">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                왜 프로필이 필요한가요?
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/70 rounded-xl p-4">
                  <div className="text-2xl mb-2">🚫</div>
                  <h4 className="font-semibold text-gray-800 mb-1">혼잡 회피</h4>
                  <p className="text-sm text-gray-600">
                    핫플레이스 대신 한적한 장소를 추천
                  </p>
                </div>
                <div className="bg-white/70 rounded-xl p-4">
                  <div className="text-2xl mb-2">♿</div>
                  <h4 className="font-semibold text-gray-800 mb-1">맞춤 편의시설</h4>
                  <p className="text-sm text-gray-600">
                    유모차, 주차, 수유실 등 고려
                  </p>
                </div>
                <div className="bg-white/70 rounded-xl p-4">
                  <div className="text-2xl mb-2">🤝</div>
                  <h4 className="font-semibold text-gray-800 mb-1">지역 상생</h4>
                  <p className="text-sm text-gray-600">
                    읍면 지역 숨겨진 명소 소개
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
