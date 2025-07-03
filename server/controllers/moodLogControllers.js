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
