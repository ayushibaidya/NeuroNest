import mongoose from 'mongoose';

const moodLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },

  mood: [String],             
  dailyActivities: [String],    
  physicalActivities: [String],  
  waterIntake: Number,           
  sleepHours: Number,          
  note: String
});

export default mongoose.model('MoodLog', moodLogSchema);
