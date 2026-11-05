import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Cv from '@/lib/models/Cv';
import { verifyAdminToken } from '@/lib/auth';

// GET /api/cv - Public
export async function GET() {
  try {
    await connectDB();
    const cv = await Cv.findOne();
    return NextResponse.json(cv || {});
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// POST /api/cv - Protected (Admin only)
export async function POST(request) {
  try {
    const auth = verifyAdminToken(request);
    if (auth.error) {
      return NextResponse.json({ message: auth.error }, { status: auth.status });
    }

    await connectDB();
    const { driveId } = await request.json();

    if (!driveId) {
      return NextResponse.json({ message: 'Drive ID is required' }, { status: 400 });
    }

    let cv = await Cv.findOne();
    if (cv) {
      cv.driveId = driveId;
      await cv.save();
    } else {
      cv = await Cv.create({ driveId });
    }

    return NextResponse.json({ message: 'Drive ID updated successfully', cv });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

