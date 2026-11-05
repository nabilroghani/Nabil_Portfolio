import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Admin from '@/lib/models/Admin';

export async function POST(request) {
  try {
    await connectDB();
    const setupKey = request.headers.get('x-setup-key');

    if (!process.env.ADMIN_SETUP_KEY || setupKey !== process.env.ADMIN_SETUP_KEY) {
      return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
    }

    const adminCount = await Admin.countDocuments();
    if (adminCount > 0) {
      return NextResponse.json({ message: 'Setup already completed' }, { status: 403 });
    }

    const { username, password } = await request.json();
    if (!username || !password) {
      return NextResponse.json({ message: 'Username and password are required' }, { status: 400 });
    }

    const admin = new Admin({ username, password });
    await admin.save();

    return NextResponse.json(
      { message: 'Admin created successfully with hashed password!', username: admin.username },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

