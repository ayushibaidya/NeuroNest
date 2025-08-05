import { useState } from 'react';
import axios from 'axios';

export default function NotesInput({ userId, token }) {
  const [note, setNote] = useState('');

  const saveNote = async () => {
    await axios.post('http://localhost:5001/api/mood/daily', {
      userId,
      note,
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Notes</h2>
      <textarea
        className="w-full px-3 py-2 border rounded-md"
        rows="4"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write how you're feeling today..."
      ></textarea>
      <button
        onClick={saveNote}
        className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Submit Log
      </button>
    </div>
  );
}
