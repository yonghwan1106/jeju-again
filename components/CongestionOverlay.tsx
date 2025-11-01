'use client';

import { useEffect, useState } from 'react';
import { CongestionLevel } from '@/types';

interface CongestionOverlayProps {
  map: any; // Naver Maps instance
}

const getStatusEmoji = (status: 'CROWDED' | 'NORMAL' | 'QUIET'): string => {
  switch (status) {
    case 'CROWDED':
      return '😡';
    case 'NORMAL':
      return '😐';
    case 'QUIET':
      return '😊';
  }
};

const getStatusColor = (status: 'CROWDED' | 'NORMAL' | 'QUIET'): string => {
  switch (status) {
    case 'CROWDED':
      return '#ef4444';
    case 'NORMAL':
      return '#f59e0b';
    case 'QUIET':
      return '#10b981';
  }
};

const getStatusText = (status: 'CROWDED' | 'NORMAL' | 'QUIET'): string => {
  switch (status) {
    case 'CROWDED':
      return '혼잡';
    case 'NORMAL':
      return '보통';
    case 'QUIET':
      return '한적';
  }
};

export default function CongestionOverlay({ map }: CongestionOverlayProps) {
  const [congestionData, setCongestionData] = useState<CongestionLevel[]>([]);
  const [lastUpdate, setLastUpdate] = useState<string>('');
  const [markers, setMarkers] = useState<any[]>([]);

  const fetchCongestion = async () => {
    try {
      const response = await fetch('/api/congestion');
      const data = await response.json();
      setCongestionData(data.levels);
      setLastUpdate(new Date(data.timestamp).toLocaleTimeString('ko-KR'));
    } catch (error) {
      console.error('Failed to fetch congestion data:', error);
    }
  };

  useEffect(() => {
    fetchCongestion();
    const interval = setInterval(fetchCongestion, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!map || !window.naver || congestionData.length === 0) return;

    // Clear existing markers
    markers.forEach((marker) => marker.setMap(null));

    // Create new markers
    const newMarkers = congestionData.map((level) => {
      const marker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(level.lat, level.lon),
        map: map,
        icon: {
          content: `
            <div style="
              background-color: white;
              border: 3px solid ${getStatusColor(level.status)};
              border-radius: 50%;
              width: 48px;
              height: 48px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              box-shadow: 0 2px 8px rgba(0,0,0,0.3);
              font-size: 24px;
              cursor: pointer;
            ">
              ${getStatusEmoji(level.status)}
            </div>
          `,
          anchor: new window.naver.maps.Point(24, 24),
        },
      });

      const infoWindow = new window.naver.maps.InfoWindow({
        content: `
          <div style="padding: 12px; min-width: 180px;">
            <h4 style="margin: 0 0 8px 0; font-weight: bold; font-size: 14px;">${level.name}</h4>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
              <span style="font-size: 20px;">${getStatusEmoji(level.status)}</span>
              <span style="
                color: ${getStatusColor(level.status)};
                font-weight: bold;
                font-size: 16px;
              ">${getStatusText(level.status)}</span>
            </div>
            <p style="margin: 0; font-size: 12px; color: #666;">
              방문자 수: ${level.visitorCount.toLocaleString()}명
            </p>
          </div>
        `,
      });

      window.naver.maps.Event.addListener(marker, 'click', () => {
        if (infoWindow.getMap()) {
          infoWindow.close();
        } else {
          infoWindow.open(map, marker);
        }
      });

      return marker;
    });

    setMarkers(newMarkers);

    return () => {
      newMarkers.forEach((marker) => marker.setMap(null));
    };
  }, [map, congestionData]);

  return null; // This component doesn't render anything visible itself
}
