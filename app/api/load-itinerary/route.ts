import { NextRequest, NextResponse } from 'next/server';
import { loadItinerary } from '@/lib/googleSheets';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Missing itinerary ID' },
        { status: 400 }
      );
    }

    const itinerary = await loadItinerary(id);

    if (!itinerary) {
      return NextResponse.json(
        { error: 'Itinerary not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(itinerary);
  } catch (error) {
    console.error('Error loading itinerary:', error);
    return NextResponse.json(
      { error: 'Failed to load itinerary', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
