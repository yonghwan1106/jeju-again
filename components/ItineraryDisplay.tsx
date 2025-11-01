'use client';

import { useState } from 'react';
import { Itinerary } from '@/types';
import NaverMapView from './NaverMapView';
import CongestionLegend from './CongestionLegend';

interface ItineraryDisplayProps {
  itinerary: Itinerary;
  onGenerateNew: () => void;
}

export default function ItineraryDisplay({
  itinerary,
  onGenerateNew,
}: ItineraryDisplayProps) {
  const [showCongestion, setShowCongestion] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSaveItinerary = async () => {
    setIsSaving(true);
    setSaveMessage(null);

    try {
      const response = await fetch('/api/save-itinerary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itinerary),
      });

      if (!response.ok) {
        throw new Error('Failed to save itinerary');
      }

      const data = await response.json();

      // Save ID to localStorage
      const savedIds = JSON.parse(localStorage.getItem('savedItineraries') || '[]');
      savedIds.push(data.id);
      localStorage.setItem('savedItineraries', JSON.stringify(savedIds));

      setSaveMessage({ type: 'success', text: `일정이 저장되었습니다! (ID: ${data.id})` });

      // Clear message after 5 seconds
      setTimeout(() => setSaveMessage(null), 5000);
    } catch (error) {
      console.error('Error saving itinerary:', error);
      setSaveMessage({ type: 'error', text: '일정 저장에 실패했습니다. 다시 시도해주세요.' });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
              <span className="text-3xl">✅</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                생성된 안심 코스
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                AI가 맞춤형으로 제안한 여행 경로입니다
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setShowCongestion(!showCongestion)}
              className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                showCongestion
                  ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
              }`}
            >
              <span className="flex items-center gap-2">
                {showCongestion ? '😊' : '😐'} 혼잡도 {showCongestion ? '켜짐' : '끄기'}
              </span>
            </button>
            <button
              onClick={handleSaveItinerary}
              disabled={isSaving}
              className="px-5 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-xl font-medium transition-all duration-300 shadow-lg"
            >
              <span className="flex items-center gap-2">
                {isSaving ? '⏳' : '💾'} {isSaving ? '저장 중...' : '일정 저장'}
              </span>
            </button>
            <button
              onClick={onGenerateNew}
              className="px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-medium transition-all duration-300 shadow-lg"
            >
              🔄 새로운 코스 생성
            </button>
          </div>
        </div>

        {saveMessage && (
          <div className={`mb-6 p-4 rounded-xl border-2 ${
            saveMessage.type === 'success'
              ? 'bg-green-50 border-green-500 text-green-800'
              : 'bg-red-50 border-red-500 text-red-800'
          }`}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{saveMessage.type === 'success' ? '✅' : '❌'}</span>
              <p className="font-medium">{saveMessage.text}</p>
            </div>
          </div>
        )}

        <div className="space-y-8">
          {/* 여행 정보 - 가로로 넓게 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border-2 border-blue-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                여행 정보
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/70 p-3 rounded-xl">
                <p className="text-xs text-gray-600 mb-1">날짜</p>
                <p className="font-semibold text-gray-800">{itinerary.date}</p>
              </div>
              <div className="bg-white/70 p-3 rounded-xl">
                <p className="text-xs text-gray-600 mb-1">소요 시간</p>
                <p className="font-semibold text-gray-800">{itinerary.duration}시간</p>
              </div>
              <div className="bg-white/70 p-3 rounded-xl">
                <p className="text-xs text-gray-600 mb-1">출발지</p>
                <p className="font-semibold text-gray-800">{itinerary.startLocation}</p>
              </div>
              <div className="bg-white/70 p-3 rounded-xl">
                <p className="text-xs text-gray-600 mb-1">경유지</p>
                <p className="font-semibold text-gray-800">{itinerary.stops.length}곳</p>
              </div>
            </div>
          </div>

          {/* 코스 지도 - 전체 너비 */}
          <div>
            <NaverMapView stops={itinerary.stops} showCongestion={showCongestion} startLocation={itinerary.startLocation} />
          </div>

          {/* 코스 일정 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-xl">📍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                코스 일정
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {itinerary.stops.map((stop, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-5 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-bold text-gray-800 mb-2">
                        {stop.name}
                      </h4>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-lg">⏰</span>
                        <p className="text-sm font-medium text-blue-600">
                          {stop.time}
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border-l-4 border-green-500">
                        <div className="flex items-start gap-2">
                          <span className="text-xl flex-shrink-0">💡</span>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {stop.reason}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showCongestion && <CongestionLegend />}
    </div>
  );
}
