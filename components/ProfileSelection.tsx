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

export default function ProfileSelection({
  onSelectProfile,
}: ProfileSelectionProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          안심 프로필 선택
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          여행 스타일에 맞는 프로필을 선택해주세요.
          <br />
          혼잡을 피하고 편안한 여행 코스를 추천해드립니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile) => (
            <button
              key={profile.type}
              onClick={() => onSelectProfile(profile.type)}
              className="bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border-2 border-blue-200 hover:border-blue-400 rounded-xl p-6 transition-all duration-200 transform hover:scale-105 hover:shadow-xl text-left"
            >
              <div className="text-5xl mb-4 text-center">
                {getProfileIcon(profile.type)}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                {profile.name}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {profile.description}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">
            💡 왜 프로필이 필요한가요?
          </h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>
              • <strong>혼잡 회피:</strong> 사람이 많은 핫플레이스 대신 한적한
              장소를 추천합니다
            </li>
            <li>
              • <strong>맞춤 편의시설:</strong> 유모차 접근, 주차 공간, 수유실
              등을 고려합니다
            </li>
            <li>
              • <strong>지역 상생:</strong> 읍면 지역의 숨겨진 명소와 로컬
              상점을 소개합니다
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
