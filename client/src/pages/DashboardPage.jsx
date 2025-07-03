import { FiLogIn, FiPause } from 'react-icons/fi';

export default function DashboardPage() {
  const tasks = ['Task 1', 'Task 2', 'Task 3'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-300 to-purple-400 p-8 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left Panel */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Good Morning Ayushi!</h1>
          <p className="text-lg mt-2">How are you feeling today?</p>
        </div>

        {/* Mood Icons */}
        <div className="flex justify-center md:justify-start gap-6 text-center">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-2xl">{i === 1 ? '😊' : '🙂'}</span>
              <span className={`text-sm ${i === 1 ? 'font-bold' : 'text-gray-600'}`}>Label</span>
            </div>
          ))}
        </div>

        {/* Mood Buttons */}
        <div className="flex justify-center md:justify-start gap-4 pt-4">
          <button className="flex flex-col items-center justify-center px-6 py-4 bg-white rounded-md shadow-md hover:shadow-lg">
            <FiLogIn className="text-2xl mb-1" />
            <span className="text-sm font-medium">Log Mood</span>
          </button>
          <button className="flex flex-col items-center justify-center px-6 py-4 bg-white rounded-md shadow-md hover:shadow-lg">
            <FiPause className="text-2xl mb-1" />
            <span className="text-sm font-medium">Reflect</span>
          </button>
        </div>
      </div>

      {/* Right Panel */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 w-full max-w-sm space-y-4 shadow-lg">
        <h2 className="text-xl font-semibold">Tasks List</h2>
        <p className="text-sm text-gray-600">Which Task would you like to complete next?</p>

        {/* Task Items */}
        <div className="space-y-4">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 border-b border-gray-300"
            >
              <div className="flex items-center gap-3">
                <div className="bg-purple-200 text-purple-700 font-bold w-8 h-8 rounded-full flex items-center justify-center">
                  A
                </div>
                <span className="text-sm font-medium">{task}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span>100+</span>
                <input type="checkbox" className="accent-purple-600" checked readOnly />
              </div>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="flex justify-between pt-2 text-sm text-purple-700 font-medium">
          <button className="hover:underline">Add Task +</button>
          <button className="hover:underline">Remove Task -</button>
        </div>
      </div>
    </div>
  );
}