import axios from 'axios';
import { useState } from 'react';

export default function WaterIntakeInput({ userId, token }) {
  const [litres, setLitres] = useState('');

  const save = async () => {
    await axios.post('http://localhost:5001/api/mood/daily', {
      userId,
      waterIntake: Number(litres)
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Water Intake (L)</h2>
      <input
        type="number"
        min="0"
        className="w-32 px-3 py-2 border rounded-md mr-2"
        value={litres}
        onChange={(e) => setLitres(e.target.value)}
        placeholder="e.g. 8"
      />
      <button onClick={save} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
        Save
      </button>
    </div>
  );
}