import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-prussianBlue-500 bg-opacity-50 backdrop-blur">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
          <img
            src="/src/assets/logo.png" 
            alt="NeuroNest Logo"
            className="w-12 h-12 rounded-full object-contain"
          />
        </div>
        <h1 className="text-3xl font-serif font-extrabold tracking-wide text-white">NeuroNest</h1>
      </div>
      <nav className="flex items-center space-x-6">
        <Link to="/" className="text-white hover:text-purple-200 transition">About</Link>
        <Link to="/" className="text-white hover:text-purple-200 transition">Features</Link>
        <Link to="/" className="text-white hover:text-purple-200 transition">Why NeuroNest?</Link>
     </nav>
      <nav className="space-x-4">
        <Link
          to="/register"
          className="bg-white text-purple-700 font-semibold px-4 py-2 rounded-lg shadow hover:bg-purple-200 hover:scale-105 transition duration-200"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="bg-transparent border border-white px-4 py-2 rounded-lg text-white hover:bg-white hover:text-purple-800 hover:scale-105 transition duration-200"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
