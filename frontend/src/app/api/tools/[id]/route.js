import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Tool from '@/lib/models/Tool';
import { verifyAdminToken } from '@/lib/auth';

// PUT /api/tools/:id - Protected
export async function PUT(request, { params }) {
  try {
    const auth = verifyAdminToken(request);
    if (auth.error) {
      return NextResponse.json({ message: auth.error }, { status: auth.status });
    }

    const { id } = await params;
    await connectDB();
    const body = await request.json();

    const updated = await Tool.findByIdAndUpdate(id, body, { new: true, runValidators: true });
    if (!updated) {
      return NextResponse.json({ message: 'Tool not found' }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

// DELETE /api/tools/:id - Protected
export async function DELETE(request, { params }) {
  try {
    const auth = verifyAdminToken(request);
    if (auth.error) {
      return NextResponse.json({ message: auth.error }, { status: auth.status });
    }

    const { id } = await params;
    await connectDB();

    const deleted = await Tool.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ message: 'Tool not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Tool deleted' });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

