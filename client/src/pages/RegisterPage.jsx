import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreed) {
      setError('You must agree to the terms.');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Registration failed');
        return;
      }

      // Store token and user in localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      // Redirect to dashboard
      navigate('/dashboard');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="text-red-600 text-sm font-medium">{error}</div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          <div className="flex items-start">
            <input
              id="agree"
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="mt-1 mr-2 h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
            />
            <label htmlFor="agree" className="text-sm text-gray-700">
              <span className="block font-medium">Agree to Terms</span>
              <span className="block text-gray-500 text-xs">You agree to our policy by registering.</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-150"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
