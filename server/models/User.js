import mongoose from 'mongoose'; 

const userSchema = new mongoose.userSchema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
  preferences: {
    encouragementTone: {
      type: String,
      enum: ['gentle', 'funny', 'direct'],
      default: 'gentle'
    },
    defaultReminderTimes: [{ type: String }]
  }
}, {timestamps: true}); 

export default mongoose.model('User', userSchema); 