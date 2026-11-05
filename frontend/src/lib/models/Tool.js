import mongoose from 'mongoose';

const toolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  category: {
    type: String,
    enum: ['Frontend', 'Backend', 'Database', 'Tools'],
    default: 'Tools',
  },
});

export default mongoose.models.Tool || mongoose.model('Tool', toolSchema);

