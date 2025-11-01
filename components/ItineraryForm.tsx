'use client';

import { useState } from 'react';

interface ItineraryFormProps {
  onSubmit: (data: {
    date: string;
    duration: number;
    startLocation: string;
  }) => void;
  isLoading: boolean;
}

export default function ItineraryForm({
  onSubmit,
  isLoading,
}: ItineraryFormProps) {
  const [date, setDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [duration, setDuration] = useState(4);
  const [startLocation, setStartLocation] = useState('제주국제공항');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ date, duration, startLocation });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="date"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          여행 날짜
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label
          htmlFor="duration"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          희망 시간
        </label>
        <select
          id="duration"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value={4}>반나절 (4시간)</option>
          <option value={6}>6시간</option>
          <option value={8}>온종일 (8시간)</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="startLocation"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          출발지
        </label>
        <input
          type="text"
          id="startLocation"
          value={startLocation}
          onChange={(e) => setStartLocation(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="예: 제주국제공항"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors"
      >
        {isLoading ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            AI가 최적의 코스를 생성하는 중...
          </span>
        ) : (
          '안심 코스 생성하기'
        )}
      </button>
    </form>
  );
}
