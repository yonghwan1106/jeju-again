'use client';

import { Itinerary } from '@/types';
import NaverMapView from './NaverMapView';

interface ItineraryDisplayProps {
  itinerary: Itinerary;
  onGenerateNew: () => void;
}

export default function ItineraryDisplay({
  itinerary,
  onGenerateNew,
}: ItineraryDisplayProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            생성된 안심 코스
          </h2>
          <button
            onClick={onGenerateNew}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            새로운 코스 생성
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                여행 정보
              </h3>
              <div className="space-y-1 text-sm text-gray-700">
                <p>
                  <strong>날짜:</strong> {itinerary.date}
                </p>
                <p>
                  <strong>소요 시간:</strong> {itinerary.duration}시간
                </p>
                <p>
                  <strong>출발지:</strong> {itinerary.startLocation}
                </p>
                <p>
                  <strong>경유지:</strong> {itinerary.stops.length}곳
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-4">
                코스 일정
              </h3>
              <div className="space-y-4">
                {itinerary.stops.map((stop, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 hover:border-blue-400 transition-colors"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                        {index + 1}
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-gray-800 mb-1">
                          {stop.name}
                        </h4>
                        <p className="text-sm text-blue-600 mb-2">
                          {stop.time}
                        </p>
                        <p className="text-sm text-gray-600 bg-green-50 p-2 rounded border-l-4 border-green-500">
                          💡 {stop.reason}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-4 h-fit">
            <NaverMapView stops={itinerary.stops} />
          </div>
        </div>
      </div>
    </div>
  );
}
