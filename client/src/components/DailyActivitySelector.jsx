import axios from 'axios';
import { useState } from 'react';

const activities = [
  '✈️ travel',
  '😣 stress',
  '🧘‍♂️ meditation',
  '🧘‍♀️ breathing exercises',
  '📖 reading',
  '🎧 listening to music',
  '🎨 creative work',
  '📺 watched a show',
  '☀️ spent time outdoors',
  '🤝 socialized',
  '🧹 cleaned',
  '🍽️ cooked',
  '🎮 gaming',
  '📝 journaling',
  '📚 studying',
  '🧶 hobbies',
  '🛍️ shopping',
  '💤 took a nap',
  '🚗 commuting',
];

export default function DailyActivitySelector({ userId, token }) {
  const [selected, setSelected] = useState([]);

  const toggleActivity = async (activity) => {
    const updated = selected.includes(activity)
      ? selected.filter(a => a !== activity)
      : [...selected, activity];

    setSelected(updated);

    await axios.post('http://localhost:5001/api/mood/daily', {
      userId,
      dailyActivities: updated,
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 mb-6">
      <h2 className="text-xl font-semibold mb-2">Daily Activity</h2>
      <div className="flex flex-wrap gap-2">
        {activities.map((act) => (
          <button
            key={act}
            onClick={() => toggleActivity(act)}
            className={`px-3 py-2 border rounded-full shadow text-sm transition-all ${selected.includes(act) ? 'bg-purple-200 font-semibold' : 'bg-white hover:bg-gray-100'}`}
          >
            {act}
          </button>
        ))}
      </div>
    </div>
  );
}