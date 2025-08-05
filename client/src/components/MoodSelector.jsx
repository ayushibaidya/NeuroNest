import axios from 'axios';
import { useState } from 'react';

const moods = [
  '😌 calm',
  '😊 happy',
  '⚡ energetic',
  '😏 frisky',
  '😵‍💫 mood swings',
  '😠 frustrated',
  '😢 sad',
  '😰 anxious',
  '😞 depressed',
  '😕 confused',
  '😔 self-critical',
];

export default function MoodSelector({ userId, token }) {
  const [selected, setSelected] = useState([]);

  const toggleMood = async (mood) => {
    const updated = selected.includes(mood)
      ? selected.filter(m => m !== mood)
      : [...selected, mood];

    setSelected(updated);

    await axios.post('http://localhost:5001/api/mood/daily', {
      userId,
      mood: updated,
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });
  };

  return (
    <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 mb-6 shadow-lg border border-white/40">
      <h2 className="text-lg font-semibold mb-4">Your Mood Today</h2>
      <div className="flex flex-wrap gap-2">
        {moods.map((mood) => (
          <button
            key={mood}
            onClick={() => toggleMood(mood)}
            className={`px-3 py-2 border rounded-full shadow text-sm transition-all ${selected.includes(mood) ? 'bg-purple-200 font-semibold' : 'bg-white hover:bg-gray-100'}`}
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
}