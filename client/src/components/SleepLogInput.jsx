export default function SleepLogInput() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Sleep Hours</h2>
      <input
        type="number"
        step="0.5"
        min="0"
        className="w-32 px-3 py-2 border rounded-md"
        placeholder="e.g. 7.5"
      />
    </div>
  );
}