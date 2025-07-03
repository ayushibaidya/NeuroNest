import mongoose from 'mongoose';

const moodLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  moodLevel: { type: Number, min: 1, max: 5 },
  energyLevel: { type: Number, min: 1, max: 5 },
  note: { type: String },
  tags: [{ type: String }]
});

export default mongoose.model('MoodLog', moodLogSchema);
