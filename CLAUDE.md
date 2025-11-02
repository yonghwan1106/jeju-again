# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**JejU-Again (제주어게인)** is a Next.js 16 web application that addresses Jeju Island's overtourism problem while serving tourism-vulnerable groups (seniors and families with young children). It uses AI to generate personalized, crowd-avoiding travel itineraries that promote regional balance by recommending quieter, local areas over crowded tourist hotspots.

**Tagline:** "가장 빠른 길이 아닌, 가장 편안한 길" (Not the fastest route, but the most comfortable one)

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Opens at http://localhost:3000

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Initialize Google Sheets (if using storage feature)
npx tsx scripts/init-google-sheet.ts
```

## Environment Variables

Required environment variables in `.env.local`:

```env
# Required for AI itinerary generation
ANTHROPIC_API_KEY=your_anthropic_api_key_here

# Required for map visualization
NEXT_PUBLIC_NAVER_CLIENT_ID=your_naver_client_id_here

# Optional - for saving itineraries to Google Sheets
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account_email@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your_google_sheet_id_here
```

If `ANTHROPIC_API_KEY` is not set, the app will generate mock itineraries instead of calling the Claude API.

## Architecture

### Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript with strict mode
- **Styling:** Tailwind CSS v4
- **AI:** Anthropic Claude Sonnet 4.0 (`claude-sonnet-4-20250514`)
- **Maps:** Naver Maps API v3
- **Data Storage:** Google Sheets API (MVP) + localStorage
- **Deployment:** Vercel

### Directory Structure

```
app/                    # Next.js App Router
  api/                  # API Routes (serverless functions)
    generate-itinerary/ # Main AI itinerary generation endpoint
    directions/         # Naver Maps directions API
    congestion/         # Real-time congestion simulation
    save-itinerary/     # Save to Google Sheets
    load-itinerary/     # Load from Google Sheets
    list-itineraries/   # List all saved itineraries
  page.tsx              # Main landing page
  my-itineraries/       # Saved itineraries page
  layout.tsx            # Root layout

components/             # React components
  ProfileSelection.tsx  # User profile selection (5 personas)
  ItineraryGenerator.tsx # Main itinerary generation UI
  ItineraryForm.tsx     # Input form for itinerary request
  ItineraryDisplay.tsx  # Display generated itinerary
  NaverMapView.tsx      # Naver Maps integration
  CongestionOverlay.tsx # Congestion visualization overlay
  CongestionLegend.tsx  # Congestion status legend

data/                   # Mock data (MVP)
  mockPOIs.json         # Points of Interest with accessibility info
  mockCongestion.json   # Simulated real-time congestion levels
  mockLocalShops.json   # Local shops (cafes, restaurants, experiences)

lib/                    # Utility libraries
  googleSheets.ts       # Google Sheets API integration

types/
  index.ts              # TypeScript type definitions

scripts/
  init-google-sheet.ts  # Initialize Google Sheets structure
```

### Key Data Flow

1. **User selects profile** → Stored in localStorage (`ProfileSelection.tsx`)
2. **User fills itinerary form** → Submitted to `/api/generate-itinerary` (`ItineraryForm.tsx`)
3. **API generates itinerary** → Claude Sonnet 4.0 analyzes mock data and creates crowd-avoiding route
4. **Itinerary displayed** → Shows stops with reasons + visualized on Naver Maps (`ItineraryDisplay.tsx`, `NaverMapView.tsx`)
5. **Congestion overlay** → Updates every 30 seconds to show simulated real-time crowd levels (`CongestionOverlay.tsx`)
6. **Optional save** → Persists to Google Sheets via API routes

## Core Concepts

### User Profiles (관광약자 프로파일)

The app targets 5 user personas defined in `types/index.ts`:

- `ACTIVE_SENIOR` (65-74): Prefers quiet nature trails, scenic cafes
- `CARE_SENIOR` (75+): Needs short walks, easy accessibility
- `TODDLER_FAMILY` (3-6 years): Needs play areas, hands-on experiences
- `INFANT_FAMILY` (0-2 years): Requires stroller access, nursing rooms
- `GENERAL`: Default tourist profile

### AI Itinerary Generation

The core logic in `/app/api/generate-itinerary/route.ts`:

1. **Loads mock data** from `data/` directory (POIs, congestion, local shops)
2. **Sends prompt to Claude Sonnet 4.0** with:
   - User profile requirements
   - Current congestion data (to avoid CROWDED/NORMAL areas)
   - Duration and start location
   - Instructions to include local shops and diverse regions
3. **Claude returns JSON** with 3-4 stops including:
   - POI details (name, coordinates, time slot)
   - **Reason for recommendation** (profile-specific)
4. **Response validated and returned** to frontend

### Map Integration

`NaverMapView.tsx` uses Naver Maps JavaScript API v3:

- Loads script dynamically: `https://oapi.map.naver.com/openapi/v3/maps.js`
- Renders custom markers for each stop
- Uses `/api/directions` endpoint to get route polylines
- Displays congestion overlay with emoji markers (😡 crowded, 😐 normal, 😊 quiet)

### Congestion Simulation

Since real-time API access is unavailable, `CongestionOverlay.tsx`:

- Fetches `/api/congestion` every 30 seconds
- Displays colored emoji markers on map showing crowd levels
- Demonstrates why AI avoided certain "hotspot" locations

## Important Implementation Details

### Path Aliases

The project uses `@/*` path alias defined in `tsconfig.json`:

```typescript
import { ProfileType } from '@/types';
import ProfileSelection from '@/components/ProfileSelection';
```

### API Route Pattern

All API routes follow Next.js 16 App Router convention in `app/api/*/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  // ... handle request
  return NextResponse.json(response);
}
```

### Mock Data Structure

All mock data files in `data/` include:

- **mockPOIs.json**: `profile_target` array to match user profiles, `accessibility` object for stroller/wheelchair/parking
- **mockCongestion.json**: `status` field ('CROWDED' | 'NORMAL' | 'QUIET')
- **mockLocalShops.json**: Similar to POIs but categorized as local businesses

### Claude API Integration

The system prompt in `generate-itinerary/route.ts` enforces:

- **Mandatory congestion avoidance**: Excludes CROWDED/NORMAL areas
- **Regional diversity**: Encourages selection across Jeju City, Seogwipo, East, West
- **Local shop inclusion**: At least 1 local business per itinerary
- **Profile-specific reasoning**: Each stop includes explanation matching user needs
- **JSON-only response**: Forces structured output for parsing

### Google Sheets Integration

Optional feature using service account authentication:

- `lib/googleSheets.ts` provides CRUD operations
- Itineraries stored with ID, profile, date, stops, creation timestamp
- Initialize sheet structure with `scripts/init-google-sheet.ts`

## Common Development Patterns

### Adding a New User Profile

1. Add profile type to `types/index.ts` → `ProfileType`
2. Update `ProfileSelection.tsx` with new profile card
3. Add profile to `mockPOIs.json` → `profile_target` arrays
4. Update Claude system prompt in `generate-itinerary/route.ts` with profile characteristics

### Adding a New POI Category

1. Update `types/index.ts` → POI interface if new fields needed
2. Add POIs to `data/mockPOIs.json` with proper categorization
3. Optionally update Claude prompt to handle new category

### Modifying Map Behavior

Primary logic is in `NaverMapView.tsx`:

- Map initialization: `initMap()` function
- Marker rendering: `updateMap()` function
- Route drawing: Uses Naver Directions API via `/api/directions`

## Testing the Application

### Without API Keys

The app has fallback mock data generation:

- If `ANTHROPIC_API_KEY` is missing, `generateMockItinerary()` function in `generate-itinerary/route.ts` creates sample itinerary
- Map requires `NEXT_PUBLIC_NAVER_CLIENT_ID` to function

### With Full API Keys

1. Set all environment variables in `.env.local`
2. Run `npm run dev`
3. Select a profile (e.g., Active Senior)
4. Fill in itinerary form (date, duration, start location)
5. Click "생성하기" to generate AI itinerary
6. View results on map with congestion overlay
7. Optionally save to Google Sheets

## Deployment

Project is configured for Vercel deployment:

- `.vercel/` directory contains project configuration
- Vercel automatically detects Next.js and builds with `npm run build`
- Environment variables must be set in Vercel dashboard
- `NEXT_PUBLIC_*` variables are exposed to client-side code

## Product Goals (OKR)

The application is designed to achieve:

1. **User satisfaction**: 4.5/5.0 rating for generated itineraries
2. **Crowd avoidance**: 90% positive feedback on congestion avoidance
3. **Regional balance**: 80% of itineraries include underserved rural areas ("읍면 지역")
4. **Minimize hotspots**: <10% of recommendations are crowded tourist traps

When making changes, consider how they impact these core metrics.

## Additional Resources

- Full PRD: See `docs/prd.md`
- README: See `README.md` for setup instructions
- Naver Maps API: https://navermaps.github.io/maps.js/
- Anthropic Claude API: https://docs.anthropic.com/
