import axios from 'axios';
import { useState } from 'react';

export default function SleepLogInput({ userId, token }) {
  const [hours, setHours] = useState('');

  const save = async () => {
    await axios.post('http://localhost:5001/api/mood/daily', {
      userId,
      sleepHours: Number(hours)
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Sleep Hours</h2>
      <input
        type="number"
        step="0.5"
        min="0"
        className="w-32 px-3 py-2 border rounded-md mr-2"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        placeholder="e.g. 7.5"
      />
      <button onClick={save} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
        Save
      </button>
    </div>
  );
}