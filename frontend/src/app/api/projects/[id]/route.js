import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Project from '@/lib/models/Project';
import { verifyAdminToken } from '@/lib/auth';
import { uploadToCloudinary } from '@/lib/cloudinary';

// PUT /api/projects/:id - Protected
export async function PUT(request, { params }) {
  try {
    const auth = verifyAdminToken(request);
    if (auth.error) {
      return NextResponse.json({ message: auth.error }, { status: auth.status });
    }

    const { id } = await params;
    await connectDB();

    const contentType = request.headers.get('content-type') || '';
    const update = {};

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      if (formData.has('title')) update.title = formData.get('title');
      if (formData.has('desc')) update.desc = formData.get('desc');
      if (formData.has('liveLink')) update.liveLink = formData.get('liveLink');
      if (formData.has('githubLink')) update.githubLink = formData.get('githubLink');
      if (formData.has('category')) update.category = formData.get('category');

      if (formData.has('stack')) {
        const stackRaw = formData.get('stack');
        try {
          update.stack = JSON.parse(stackRaw);
        } catch {
          update.stack = String(stackRaw).split(',').map((s) => s.trim());
        }
      }

      const file = formData.get('image');
      if (file && typeof file === 'object' && file.size > 0) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        update.image = await uploadToCloudinary(buffer, 'portfolio_projects');
      }
    } else {
      const body = await request.json();
      Object.assign(update, body);
    }

    const updated = await Project.findByIdAndUpdate(id, update, { new: true, runValidators: true });
    if (!updated) {
      return NextResponse.json({ message: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// DELETE /api/projects/:id - Protected
export async function DELETE(request, { params }) {
  try {
    const auth = verifyAdminToken(request);
    if (auth.error) {
      return NextResponse.json({ message: auth.error }, { status: auth.status });
    }

    const { id } = await params;
    await connectDB();

    const deleted = await Project.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ message: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Project deleted successfully' });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

