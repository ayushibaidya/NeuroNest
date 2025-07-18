import { useEffect, useState } from 'react';
import axios from 'axios';
import { FiLogIn, FiPause } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import TaskList from '../components/TasksList.jsx';

export default function DashboardPage() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [selectedEnergyLevel, setSelectedEnergyLevel] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');

  const energyOptions = [
  { label: 'exhausted', emoji: '🥱', value: 1 },
  { label: 'low',       emoji: '😴', value: 2 },
  { label: 'moderate',  emoji: '😌', value: 3 },
  { label: 'high',      emoji: '😃', value: 4 },
  { label: 'hyper',     emoji: '⚡', value: 5 },
  ];

   const logEnergy = async () => {
  if (!selectedEnergyLevel) return alert('Please select an energy level');

  try {
    await axios.post(
      'http://localhost:5001/api/mood',
      {
        userId: user.id,
        moodLevel: 3, // placeholder
        energyLevel: selectedEnergyLevel, // now a number (1–5)
        note: '',
        tags: [],
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    alert(`Energy level ${selectedEnergyLevel} logged successfully!`);
    setSelectedEnergyLevel(null);
  } catch (err) {
    console.error('Error logging energy:', err);
    alert('Failed to log energy level');
  }
};


  useEffect(() => {
    if (!token || !user) return navigate('/login');
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5001/api/tasks/${user.id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTasks(res.data);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  const addTask = async () => {
    if (!newTask.trim()) return;
    try {
      const res = await axios.post(
        'http://localhost:5001/api/tasks',
        { userId: user.id, title: newTask },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTasks((prev) => [...prev, res.data]);
      setNewTask('');
    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/tasks/${id}`);
      setTasks((prev) => prev.filter((task) => task._id !== id));
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  const updateTask = async (taskId, newTitle) => {
    try {
      const res = await axios.put(
        `http://localhost:5001/api/tasks/${taskId}`,
        { title: newTitle }
      );
      setTasks((prev) =>
        prev.map((t) => (t._id === taskId ? { ...t, title: res.data.title } : t))
      );
    } catch (err) {
      console.error('Error updating task:', err);
    }
  };

  const toggleTaskDone = async (taskId) => {
    try {
      const task = tasks.find((t) => t._id === taskId);
      const updated = await axios.put(
        `http://localhost:5001/api/tasks/${taskId}`,
        { isComplete: !task.isComplete }
      );
      setTasks((prev) =>
        prev.map((t) =>
          t._id === taskId ? { ...t, isComplete: updated.data.isComplete } : t
        )
      );
    } catch (err) {
      console.error('Error toggling task status:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-300 to-purple-400 p-8 flex flex-col md:flex-row items-center justify-center md:items-center">
      {/* Left Panel */}
      <div className="flex-1 md:max-w-2xl text-center md:text-left space-y-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Good Morning {user?.username || 'User'}!</h1>
          <p className="text-lg mt-2">What is your energy level today?</p>
        </div>

        <div className="flex justify-center md:justify-start gap-6 text-center">
            {energyOptions.map(({ label, emoji, value }) => (
              <button
                key={label}
                onClick={() => setSelectedEnergyLevel(value)}
                className={`flex flex-col items-center transition ${
                  selectedEnergyLevel === value ? 'scale-110 font-bold' : ''
                }`}
              >
                <span className="text-5xl">{emoji}</span>
                <span className="text-sm text-gray-600">{label}</span>
              </button>
            ))}
        </div>

        {selectedEnergyLevel && (
          <button
            onClick={logEnergy}
            className="mt-4 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
          >
            Confirm Energy Level
          </button>
        )}

        <div className="flex justify-center md:justify-start gap-4 pt-4">
          <button onClick={() => navigate('/log-mood')} className="flex flex-col items-center justify-center px-6 py-4 bg-white rounded-md shadow-md hover:shadow-lg">
            <FiLogIn className="text-2xl mb-1" />
            <span className="text-sm font-medium">Log Mood</span>
          </button>
          <button onClick={() => navigate('/reflect')} className="flex flex-col items-center justify-center px-6 py-4 bg-white rounded-md shadow-md hover:shadow-lg">
            <FiPause className="text-2xl mb-1" />
            <span className="text-sm font-medium">Reflect</span>
          </button>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-[340px] bg-white/70 backdrop-blur-md rounded-2xl p-6 space-y-4 shadow-lg">
        <h2 className="text-xl font-semibold">Tasks List</h2>
        <p className="text-sm text-gray-600">Which Task would you like to complete next?</p>

        <TaskList
          tasks={tasks}
          onDelete={deleteTask}
          onUpdate={updateTask}
          onToggleDone={toggleTaskDone}
        />

        <div className="pt-4 flex gap-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 px-3 py-2 border rounded-md"
            placeholder="New task"
          />
          <button
            onClick={addTask}
            className="px-3 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}