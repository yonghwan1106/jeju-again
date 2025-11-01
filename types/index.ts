export type ProfileType =
  | 'ACTIVE_SENIOR'
  | 'CARE_SENIOR'
  | 'TODDLER_FAMILY'
  | 'INFANT_FAMILY'
  | 'GENERAL';

export interface UserProfile {
  type: ProfileType;
  name: string;
  description: string;
}

export interface POI {
  id: string;
  name: string;
  category: string;
  region: string;
  lat: number;
  lon: number;
  profile_target: ProfileType[];
  accessibility: {
    stroller: boolean;
    wheelchair: boolean;
    parking: boolean;
  };
}

export interface CongestionLevel {
  poiId: string;
  name: string;
  status: 'CROWDED' | 'NORMAL' | 'QUIET';
  visitorCount: number;
  lat: number;
  lon: number;
}

export interface LocalShop {
  id: string;
  name: string;
  type: 'CAFE' | 'RESTAURANT' | 'EXPERIENCE' | 'MARKET';
  region: string;
  lat: number;
  lon: number;
  profile_target: ProfileType[];
  features: string[];
  accessibility: {
    stroller: boolean;
    wheelchair: boolean;
    parking: boolean;
  };
}

export interface ItineraryStop {
  poiId: string;
  name: string;
  time: string;
  reason: string;
  lat: number;
  lon: number;
}

export interface Itinerary {
  id?: string;
  profile: ProfileType;
  date: string;
  duration: number;
  startLocation: string;
  stops: ItineraryStop[];
  createdAt?: string;
}

export interface ItineraryRequest {
  profile: ProfileType;
  date: string;
  duration: number;
  startLocation: string;
}
