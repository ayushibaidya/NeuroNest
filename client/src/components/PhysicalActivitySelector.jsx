const physical = [
  "didn't exercise", 'gym', 'yoga', 'swimming', 'team sports', 'running', 'cycling', 'walking',
];

export default function PhysicalActivitySelector() {
  return (
    <div>
      <div className="bg-white shadow-md rounded-xl p-6 mb-6">
      <h2 className="text-xl font-semibold mb-2">Physical Activity</h2>
      <div className="flex flex-wrap gap-2">
        {physical.map((p) => (
          <button
            key={p}
            className="px-3 py-2 bg-white border rounded shadow hover:bg-gray-100"
          >
            {p}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
}