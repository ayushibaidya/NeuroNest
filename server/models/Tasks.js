import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String },
  priority: {
    type: String,
    enum: ['must', 'should', 'could'],
    default: 'should'
  },
  energyRequired: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  isComplete: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Task', taskSchema);
