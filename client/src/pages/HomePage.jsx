import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-pink-300 flex items-center justify-center px-6">
      <div className="text-center max-w-xl bg-white/70 backdrop-blur-md p-10 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to NeuroNest 🧠</h1>
        <p className="text-lg text-gray-700 mb-8">
          Your personal space to track moods, reflect, and stay on top of tasks — all in one calming dashboard.
        </p>

        <div className="flex justify-center gap-6">
          <Link
            to="/register"
            className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-700 transition"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="bg-white text-purple-600 border border-purple-600 px-6 py-2 rounded-lg hover:bg-purple-50 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}