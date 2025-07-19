export default function WaterIntakeInput() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Water Intake (L)</h2>
      <input
        type="number"
        min="0"
        className="w-32 px-3 py-2 border rounded-md"
        placeholder="e.g. 8"
      />
    </div>
  );
}