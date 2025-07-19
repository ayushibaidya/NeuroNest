const moods = [
  'calm', 'happy', 'energetic', 'frisky',
  'mood swings', 'frustrated', 'sad',
  'anxious', 'depressed', 'confused', 'self-critical',
];

export default function MoodSelector() {
  return (

    <div className="bg-white shadow-md rounded-xl p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Your Mood Today</h2>
        <div className="flex flex-wrap gap-2">
        {moods.map((mood) => (
          <button
            key={mood}
            className="px-3 py-2 bg-white border rounded shadow hover:bg-gray-100"
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
}
