import { NextResponse } from 'next/server';
import { getAllItineraries } from '@/lib/googleSheets';

export async function GET() {
  try {
    const itineraries = await getAllItineraries();
    return NextResponse.json(itineraries);
  } catch (error) {
    console.error('Error listing itineraries:', error);
    return NextResponse.json(
      { error: 'Failed to list itineraries', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
