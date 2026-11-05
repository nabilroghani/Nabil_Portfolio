import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Project from '@/lib/models/Project';
import { verifyAdminToken } from '@/lib/auth';
import { uploadToCloudinary } from '@/lib/cloudinary';

// GET /api/projects - Public
export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find().sort({ createdAt: -1 });
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// POST /api/projects - Protected (Admin only)
export async function POST(request) {
  try {
    const auth = verifyAdminToken(request);
    if (auth.error) {
      return NextResponse.json({ message: auth.error }, { status: auth.status });
    }

    await connectDB();
    const contentType = request.headers.get('content-type') || '';

    let title, desc, stack, liveLink, githubLink, category, imageUrl = '';

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      title = formData.get('title');
      desc = formData.get('desc');
      stack = formData.get('stack');
      liveLink = formData.get('liveLink') || '';
      githubLink = formData.get('githubLink') || '';
      category = formData.get('category') || 'Personal';

      const file = formData.get('image');
      if (file && typeof file === 'object' && file.size > 0) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        imageUrl = await uploadToCloudinary(buffer, 'portfolio_projects');
      }
    } else {
      const body = await request.json();
      title = body.title;
      desc = body.desc;
      stack = body.stack;
      liveLink = body.liveLink || '';
      githubLink = body.githubLink || '';
      category = body.category || 'Personal';
      imageUrl = body.image || '';
    }

    let stackArray = [];
    if (stack) {
      if (Array.isArray(stack)) {
        stackArray = stack;
      } else {
        try {
          stackArray = JSON.parse(stack);
        } catch {
          stackArray = String(stack).split(',').map((s) => s.trim());
        }
      }
    }

    const newProject = await Project.create({
      title,
      desc,
      stack: stackArray,
      liveLink,
      githubLink,
      image: imageUrl,
      category: category || 'Personal',
    });

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error('Create project error:', error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

