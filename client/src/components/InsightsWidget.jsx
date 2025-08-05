import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function InsightsWidget({ moodData, waterData, sleepData }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      {/* Mood Trend */}
      <div className="bg-white rounded-xl shadow-md p-4">
        <h2 className="text-md font-semibold mb-2">📉 Mood Trend</h2>
        <ResponsiveContainer width="100%" height={150}>
          <LineChart data={moodData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="moodLevel" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Water Intake */}
      <div className="bg-white rounded-xl shadow-md p-4">
        <h2 className="text-md font-semibold mb-2">💧 Water Intake</h2>
        <ResponsiveContainer width="100%" height={150}>
          <LineChart data={waterData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="liters" stroke="#4ade80" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Sleep Duration */}
      <div className="bg-white rounded-xl shadow-md p-4">
        <h2 className="text-md font-semibold mb-2">🛌 Sleep Duration</h2>
        <ResponsiveContainer width="100%" height={150}>
          <LineChart data={sleepData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="hours" stroke="#f87171" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
