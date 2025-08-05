import axios from 'axios';
import { useState } from 'react';

const physical = [
  '😴 didn’t exercise',
  '🏋️‍♀️ gym',
  '🧘 yoga',
  '🏊 swimming',
  '🤾‍♂️ team sports',
  '🏃 running',
  '🚴‍♀️ cycling',
  '🚶 walking',
];

export default function PhysicalActivitySelector({ userId, token }) {
  const [selected, setSelected] = useState([]);

  const togglePhysical = async (activity) => {
    const updated = selected.includes(activity)
      ? selected.filter(p => p !== activity)
      : [...selected, activity];

    setSelected(updated);

    await axios.post('http://localhost:5001/api/mood/daily', {
      userId,
      physicalActivities: updated,
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 mb-6">
      <h2 className="text-xl font-semibold mb-2">Physical Activity</h2>
      <div className="flex flex-wrap gap-2">
        {physical.map((p) => (
          <button
            key={p}
            onClick={() => togglePhysical(p)}
            className={`px-3 py-2 border rounded-full shadow text-sm transition-all ${selected.includes(p) ? 'bg-purple-200 font-semibold' : 'bg-white hover:bg-gray-100'}`}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}
