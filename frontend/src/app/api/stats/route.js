import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Stats from '@/lib/models/Stats';
import { verifyAdminToken } from '@/lib/auth';

// GET /api/stats - Protected (Admin only)
export async function GET(request) {
  try {
    const auth = verifyAdminToken(request);
    if (auth.error) {
      return NextResponse.json({ message: auth.error }, { status: auth.status });
    }

    await connectDB();
    let stats = await Stats.findOne();
    if (!stats) {
      stats = await Stats.create({ pageVisits: 0, resumeDownloads: 0 });
    }
    return NextResponse.json(stats);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

