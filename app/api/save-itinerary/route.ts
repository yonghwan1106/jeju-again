import { NextRequest, NextResponse } from 'next/server';
import { saveItinerary } from '@/lib/googleSheets';
import { Itinerary } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const itinerary: Itinerary = await request.json();

    // Validate required fields
    if (!itinerary.profile || !itinerary.date || !itinerary.stops) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Save to Google Sheets
    const id = await saveItinerary(itinerary);

    return NextResponse.json({ id, success: true });
  } catch (error) {
    console.error('Error saving itinerary:', error);
    return NextResponse.json(
      { error: 'Failed to save itinerary', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
