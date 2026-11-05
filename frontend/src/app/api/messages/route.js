import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Message from '@/lib/models/Message';
import { verifyAdminToken } from '@/lib/auth';
import { sendContactNotification } from '@/lib/email';

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

    // In Serverless (Vercel), we MUST await the email promise.
    // If not awaited, Vercel immediately freezes and terminates the Lambda execution
    // before the SMTP network socket finishes sending the email!
    let emailStatus = null;
    try {
      emailStatus = await sendContactNotification({ name, email, service, budget, timeline, subject, message });
      console.log('[Messages API] Email dispatched:', emailStatus?.messageId || emailStatus);
    } catch (err) {
      console.error('[Messages API] Email dispatch error:', err.message || err);
    }

    return NextResponse.json({
      success: true,
      data: newMessage,
      emailDispatched: !emailStatus?.skipped,
    }, { status: 201 });
  } catch (error) {
    console.error('Send message error:', error);
    return NextResponse.json({ message: 'Could not send message' }, { status: 500 });
  }
}

