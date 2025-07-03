import mongoose from 'mongoose';

const reflectionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  reflectionText: { type: String },
  gratitude: [{ type: String }]
});

export default mongoose.model('Reflection', reflectionSchema);
