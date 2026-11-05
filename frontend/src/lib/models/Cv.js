import mongoose from 'mongoose';

const cvSchema = new mongoose.Schema(
  {
    driveId: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Cv || mongoose.model('Cv', cvSchema);

