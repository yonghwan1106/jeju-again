import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { CongestionLevel } from '@/types';

export async function GET() {
  try {
    const dataDir = path.join(process.cwd(), 'data');
    const congestionData = await fs.readFile(
      path.join(dataDir, 'mockCongestion.json'),
      'utf-8'
    );

    const data: { timestamp: string; levels: CongestionLevel[] } = JSON.parse(congestionData);

    // Simulate real-time updates by randomly adjusting visitor counts
    const simulatedLevels = data.levels.map((level) => {
      const variation = Math.floor(Math.random() * 200) - 100; // ±100 visitors
      const newCount = Math.max(0, level.visitorCount + variation);

      // Recalculate status based on new count
      let newStatus: 'CROWDED' | 'NORMAL' | 'QUIET';
      if (newCount > 1500) {
        newStatus = 'CROWDED';
      } else if (newCount > 500) {
        newStatus = 'NORMAL';
      } else {
        newStatus = 'QUIET';
      }

      return {
        ...level,
        visitorCount: newCount,
        status: newStatus,
      };
    });

    return NextResponse.json({
      timestamp: new Date().toISOString(),
      levels: simulatedLevels,
    });
  } catch (error) {
    console.error('Error fetching congestion data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch congestion data' },
      { status: 500 }
    );
  }
}
