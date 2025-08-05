import { useState, useEffect, useRef } from 'react';

export default function MeditatePage() {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState(5); // default 5 min
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && !isPaused && secondsLeft > 0) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft(prev => prev - 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, isPaused, secondsLeft]);

  const handleStart = () => {
    if (secondsLeft === 0) {
      setSecondsLeft(selectedDuration * 60);
    }
    setIsRunning(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    setIsPaused(false);
    setSecondsLeft(0);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsPaused(false);
    setSecondsLeft(selectedDuration * 60);
  };

  const formatTime = () => {
    const mins = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
    const secs = String(secondsLeft % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-50 p-6">
      <h1 className="text-4xl font-bold mb-6">🧘 Meditate</h1>

      <div className="mb-6">
        <label htmlFor="duration" className="block text-lg font-semibold mb-2">Select Duration (minutes)</label>
        <select
          id="duration"
          value={selectedDuration}
          onChange={(e) => setSelectedDuration(Number(e.target.value))}
          className="px-4 py-2 rounded bg-white shadow"
          disabled={isRunning && !isPaused}
        >
          {[1, 3, 5, 10, 15, 20, 30].map(min => (
            <option key={min} value={min}>{min}</option>
          ))}
        </select>
      </div>

      <div className="text-5xl font-mono mb-6">{formatTime()}</div>

      <div className="flex gap-4">
        {!isRunning || isPaused ? (
          <button
            onClick={handleStart}
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded shadow"
          >
            Start
          </button>
        ) : (
          <button
            onClick={handlePause}
            className="bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-2 rounded shadow"
          >
            Pause
          </button>
        )}
        <button
          onClick={handleReset}
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded shadow"
        >
          Reset
        </button>
        <button
          onClick={handleStop}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded shadow"
        >
          Stop
        </button>
      </div>
    </div>
  );
}
