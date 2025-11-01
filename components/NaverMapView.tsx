'use client';

import { useEffect, useRef } from 'react';
import { ItineraryStop } from '@/types';
import CongestionOverlay from './CongestionOverlay';

interface NaverMapViewProps {
  stops: ItineraryStop[];
  showCongestion?: boolean;
  startLocation?: string;
}

declare global {
  interface Window {
    naver: any;
  }
}

export default function NaverMapView({ stops, showCongestion = false, startLocation }: NaverMapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_NAVER_CLIENT_ID) {
      console.error('Naver Maps API key is not set');
      return;
    }

    const script = document.createElement('script');
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`;
    script.async = true;
    script.onload = () => initMap();
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (mapInstanceRef.current && stops.length > 0) {
      updateMap();
    }
  }, [stops]);

  const initMap = () => {
    if (!window.naver || !mapRef.current) return;

    const center =
      stops.length > 0
        ? new window.naver.maps.LatLng(stops[0].lat, stops[0].lon)
        : new window.naver.maps.LatLng(33.4996, 126.5312); // 제주 중심

    const map = new window.naver.maps.Map(mapRef.current, {
      center: center,
      zoom: 11,
    });

    mapInstanceRef.current = map;

    if (stops.length > 0) {
      updateMap();
    }
  };

  const updateMap = async () => {
    if (!window.naver || !mapInstanceRef.current) return;

    const map = mapInstanceRef.current;

    // Clear existing markers and polylines
    // (In production, you'd want to keep track of these in refs and clear them properly)

    // Add start location marker (airport)
    const startCoords = { lat: 33.5068, lon: 126.4892 }; // 제주국제공항
    const airportMarker = new window.naver.maps.Marker({
      position: new window.naver.maps.LatLng(startCoords.lat, startCoords.lon),
      map: map,
      title: startLocation || '제주국제공항',
      icon: {
        content: `<div style="
          width: 36px;
          height: 36px;
          background-color: #10b981;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 18px;
          border: 3px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        ">🛫</div>`,
        anchor: new window.naver.maps.Point(18, 18),
      },
    });

    const airportInfoWindow = new window.naver.maps.InfoWindow({
      content: `
        <div style="padding: 10px; min-width: 150px;">
          <h4 style="margin: 0 0 5px 0; font-weight: bold;">${startLocation || '제주국제공항'}</h4>
          <p style="margin: 0; font-size: 12px; color: #666;">출발지</p>
        </div>
      `,
    });

    window.naver.maps.Event.addListener(airportMarker, 'click', () => {
      if (airportInfoWindow.getMap()) {
        airportInfoWindow.close();
      } else {
        airportInfoWindow.open(map, airportMarker);
      }
    });

    // Add markers for each stop
    stops.forEach((stop, index) => {
      const marker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(stop.lat, stop.lon),
        map: map,
        title: stop.name,
        icon: {
          content: `<div style="
            width: 32px;
            height: 32px;
            background-color: #2563eb;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            border: 3px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          ">${index + 1}</div>`,
          anchor: new window.naver.maps.Point(16, 16),
        },
      });

      const infoWindow = new window.naver.maps.InfoWindow({
        content: `
          <div style="padding: 10px; min-width: 200px;">
            <h4 style="margin: 0 0 5px 0; font-weight: bold;">${stop.name}</h4>
            <p style="margin: 0; font-size: 12px; color: #666;">${stop.time}</p>
            <p style="margin: 5px 0 0 0; font-size: 12px;">${stop.reason}</p>
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
    });

    // Draw road-based route using Directions API
    if (stops.length > 0) {
      try {
        // Get start location coordinates (default to Jeju Airport)
        const startCoords = { lat: 33.5068, lon: 126.4892 }; // 제주국제공항

        // Draw route from start location to first stop
        if (stops.length > 0) {
          const start = `${startCoords.lon},${startCoords.lat}`;
          const goal = `${stops[0].lon},${stops[0].lat}`;

          const response = await fetch(
            `/api/directions?start=${start}&goal=${goal}`
          );

          if (response.ok) {
            const data = await response.json();

            if (data.route && data.route.traoptimal && data.route.traoptimal[0]) {
              const route = data.route.traoptimal[0];
              const path: any[] = [];

              route.path.forEach((coord: number[]) => {
                path.push(new window.naver.maps.LatLng(coord[1], coord[0]));
              });

              new window.naver.maps.Polyline({
                map: map,
                path: path,
                strokeColor: '#10b981', // Green color for start route
                strokeWeight: 5,
                strokeOpacity: 0.8,
              });
            }
          }
        }

        // Fetch route from each stop to the next
        for (let i = 0; i < stops.length - 1; i++) {
          const start = `${stops[i].lon},${stops[i].lat}`;
          const goal = `${stops[i + 1].lon},${stops[i + 1].lat}`;

          const response = await fetch(
            `/api/directions?start=${start}&goal=${goal}`
          );

          if (response.ok) {
            const data = await response.json();

            // Extract path coordinates from the response
            if (data.route && data.route.traoptimal && data.route.traoptimal[0]) {
              const route = data.route.traoptimal[0];
              const path: any[] = [];

              // Collect all path coordinates from all sections
              route.path.forEach((coord: number[]) => {
                path.push(new window.naver.maps.LatLng(coord[1], coord[0]));
              });

              // Draw polyline for this segment
              new window.naver.maps.Polyline({
                map: map,
                path: path,
                strokeColor: '#2563eb',
                strokeWeight: 5,
                strokeOpacity: 0.8,
              });
            }
          } else {
            // Fallback to straight line if API fails
            console.warn('Directions API failed, using straight line');
            const path = [
              new window.naver.maps.LatLng(stops[i].lat, stops[i].lon),
              new window.naver.maps.LatLng(stops[i + 1].lat, stops[i + 1].lon),
            ];

            new window.naver.maps.Polyline({
              map: map,
              path: path,
              strokeColor: '#2563eb',
              strokeWeight: 4,
              strokeOpacity: 0.7,
              strokeStyle: 'dash',
            });
          }
        }
      } catch (error) {
        console.error('Error fetching directions:', error);
        // Fallback to straight lines
        const path = stops.map(
          (stop) => new window.naver.maps.LatLng(stop.lat, stop.lon)
        );
        new window.naver.maps.Polyline({
          map: map,
          path: path,
          strokeColor: '#2563eb',
          strokeWeight: 4,
          strokeOpacity: 0.7,
          strokeStyle: 'dash',
        });
      }
    }

    // Fit bounds to show all markers including start location
    if (stops.length > 0) {
      const bounds = new window.naver.maps.LatLngBounds();
      // Include start location (airport)
      bounds.extend(new window.naver.maps.LatLng(startCoords.lat, startCoords.lon));
      // Include all stops
      stops.forEach((stop) => {
        bounds.extend(new window.naver.maps.LatLng(stop.lat, stop.lon));
      });
      map.fitBounds(bounds, { top: 50, right: 50, bottom: 50, left: 50 });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-blue-600 text-white p-4">
        <h3 className="font-semibold">코스 지도</h3>
      </div>
      <div
        ref={mapRef}
        style={{ width: '100%', height: '700px' }}
        className="bg-gray-100 relative"
      >
        {!process.env.NEXT_PUBLIC_NAVER_CLIENT_ID && (
          <div className="flex items-center justify-center h-full text-gray-500">
            <div className="text-center">
              <p>지도를 표시하려면</p>
              <p>Naver Maps API 키를 설정해주세요.</p>
            </div>
          </div>
        )}
        {showCongestion && mapInstanceRef.current && (
          <CongestionOverlay map={mapInstanceRef.current} />
        )}
      </div>
    </div>
  );
}
