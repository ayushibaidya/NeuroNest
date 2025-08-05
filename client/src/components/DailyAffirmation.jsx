// components/DailyAffirmation.jsx
const affirmations = [
  "You are doing the best you can, and that’s enough.",
  "Your effort matters more than perfection.",
  "Every small step counts toward progress.",
  "You are stronger than you think.",
  "Be kind to yourself today.",
  "Growth takes time. Trust the process.",
  "You’re allowed to rest. Rest is productive.",
];

export default function DailyAffirmation() {
  const today = new Date().getDate();
  const affirmation = affirmations[today % affirmations.length];

  return (
    <div className="bg-white/70 backdrop-blur-md p-4 rounded-xl shadow text-center">
      <h3 className="text-md font-semibold text-purple-700 mb-2">💡 Daily Affirmation</h3>
      <p className="text-gray-700 italic">"{affirmation}"</p>
    </div>
  );
}
