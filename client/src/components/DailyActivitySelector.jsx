const activities = ['travel', 'stress', 'meditation', 'breathing exercises'];

export default function DailyActivitySelector() {
  return (
    <div>
      <div className="bg-white shadow-md rounded-xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">Daily Activity</h2>
      <div className="flex flex-wrap gap-2">
        {activities.map((act) => (
          <button
            key={act}
            className="px-3 py-2 bg-white border rounded shadow hover:bg-gray-100"
          >
            {act}
          </button>
        ))}
      </div>
      </div>
    </div>
  );
}