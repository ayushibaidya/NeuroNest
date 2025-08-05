import MoodLog from '../models/MoodLog.js';

export const createMoodLog = async (req, res) => {
  try {
    const { userId, moodLevel, energyLevel, note, tags } = req.body;

    const moodLog = new MoodLog({
      userId,
      moodLevel,
      energyLevel,
      note,
      tags
    });

    const savedLog = await moodLog.save();
    res.status(201).json(savedLog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create mood log.' });
  }
};

// Get all mood logs for a user
export const getMoodLogsByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const logs = await MoodLog.find({ userId }).sort({ date: -1 });
    res.status(200).json(logs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch mood logs.' });
  }
};

export const upsertDailyLog = async (req, res) => {
  try {
    const { userId, ...fields } = req.body;

    const today = new Date();
    const start = new Date(today.setHours(0, 0, 0, 0));
    const end = new Date(today.setHours(23, 59, 59, 999));

    const updated = await MoodLog.findOneAndUpdate(
      { userId, date: { $gte: start, $lte: end } },
      { $set: fields },
      { new: true, upsert: true }
    );

    res.status(200).json(updated);
    console.log('Mood log received:', req.body);
  } catch (err) {
    console.error('Failed to upsert daily log:', err);
    res.status(500).json({ error: 'Failed to save activity.' });
  }
};