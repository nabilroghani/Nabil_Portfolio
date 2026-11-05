import mongoose from 'mongoose';

const statsSchema = new mongoose.Schema(
  {
    pageVisits: { type: Number, default: 0 },
    resumeDownloads: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Stats || mongoose.model('Stats', statsSchema);

