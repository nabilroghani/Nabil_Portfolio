import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Tool from '@/lib/models/Tool';
import { verifyAdminToken } from '@/lib/auth';

// GET /api/tools - Public
export async function GET() {
  try {
    await connectDB();
    const tools = await Tool.find();
    return NextResponse.json(tools);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// POST /api/tools - Protected
export async function POST(request) {
  try {
    const auth = verifyAdminToken(request);
    if (auth.error) {
      return NextResponse.json({ message: auth.error }, { status: auth.status });
    }

    await connectDB();
    const body = await request.json();
    const newTool = await Tool.create(body);
    return NextResponse.json(newTool, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

