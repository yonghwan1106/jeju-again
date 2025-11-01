'use client';

import { useEffect, useState } from 'react';

export default function CongestionLegend() {
  const [lastUpdate, setLastUpdate] = useState<string>('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      setLastUpdate(new Date().toLocaleTimeString('ko-KR'));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-10">
      <div className="bg-white rounded-lg shadow-xl p-4 max-w-xs">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-800 text-sm">실시간 혼잡도</h3>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="text-gray-500 hover:text-gray-700 text-xs"
          >
            {isVisible ? '숨기기' : '보기'}
          </button>
        </div>

        {isVisible && (
          <>
            <div className="space-y-2 mb-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">😡</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-sm font-medium text-gray-700">
                      혼잡
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    1,500명 이상
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">😐</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                    <span className="text-sm font-medium text-gray-700">
                      보통
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    500~1,500명
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">😊</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium text-gray-700">
                      한적
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">500명 미만</p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <p className="text-xs text-gray-600">
                  마지막 업데이트: {lastUpdate}
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                30초마다 자동 갱신
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
