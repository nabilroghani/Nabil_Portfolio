import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Stats from '@/lib/models/Stats';

// POST /api/stats/download - Public (Called when visitor downloads resume)
export async function POST() {
  try {
    await connectDB();
    await Stats.findOneAndUpdate({}, { $inc: { resumeDownloads: 1 } }, { upsert: true });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

