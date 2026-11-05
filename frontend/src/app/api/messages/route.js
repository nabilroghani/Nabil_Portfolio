import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Message from '@/lib/models/Message';
import { verifyAdminToken } from '@/lib/auth';

// GET /api/messages - Protected (Admin only)
export async function GET(request) {
  try {
    const auth = verifyAdminToken(request);
    if (auth.error) {
      return NextResponse.json({ message: auth.error }, { status: auth.status });
    }

    await connectDB();
    const messages = await Message.find().sort({ createdAt: -1 });
    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json({ message: error.message || 'Error fetching messages' }, { status: 500 });
  }
}

// POST /api/messages - Public (Contact Form Submission)
export async function POST(request) {
  try {
    await connectDB();
    const { name, email, service, budget, timeline, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Please fill all required fields' }, { status: 400 });
    }

    const newMessage = await Message.create({
      name,
      email,
      service: service || 'Custom MERN App',
      budget: budget || 'Flexible',
      timeline: timeline || 'Flexible',
      subject: subject || `Inquiry from ${name}`,
      message,
    });

    return NextResponse.json({ success: true, data: newMessage }, { status: 201 });
  } catch (error) {
    console.error('Send message error:', error);
    return NextResponse.json({ message: 'Could not send message' }, { status: 500 });
  }
}

