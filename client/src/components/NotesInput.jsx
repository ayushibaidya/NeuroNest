export default function NotesInput() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Notes</h2>
      <textarea
        className="w-full px-3 py-2 border rounded-md"
        rows="4"
        placeholder="Write how you're feeling today..."
      ></textarea>
      <button className="mt-6 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Submit Log
        </button>
    </div>
  );
}