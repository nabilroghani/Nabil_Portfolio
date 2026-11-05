import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    stack: [{ type: String }],
    liveLink: { type: String },
    githubLink: { type: String },
    image: { type: String },
    category: {
      type: String,
      enum: ['Personal', 'Team', 'Client', 'Other'],
      default: 'Personal',
    },
  },
  { timestamps: true }
);

export default mongoose.models.Project || mongoose.model('Project', projectSchema);

