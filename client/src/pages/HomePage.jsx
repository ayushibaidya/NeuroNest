import { motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';

export default function HomePage() {
  const facts = [
    "Autistic people can have exceptional memory for facts.",
    "ADHD brains thrive in high-stimulation, creative environments.",
    "Neurodivergent people often bring unique problem-solving skills.",
    "Routine isn't boring—it's empowering for many minds."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-lightSkyBlue-500 to-pinkLavender-500 text-white font-sans">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6 py-12">
        <motion.section 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-ultraViolet-800 font-serif">Welcome to NeuroNest 🧠🍀</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-ultraViolet-800">
            A calm, flexible productivity platform designed for neurodivergent minds—track moods, build momentum, and grow sustainably.
          </p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.3, duration: 1 }}
        >
          <h3 className="text-2xl font-bold text-center mb-6 text-ultraViolet-800">Core Features</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left text-ultraViolet-800">
            {[
              '🌤️ Mood & Energy Tracker with reflections',
              '🧠 Task Flow based on Must / Should / Could',
              '📈 Visual Momentum + Positive Reinforcement',
              '🎧 Motivation Corner: Affirmations + Pep Talks',
              '📓 Guided Journal + Gratitude Entries',
              '🔒 Secure Auth with JWT / OAuth'
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                className="bg-teaGreen-900/30 p-6 rounded-lg shadow hover:scale-105 hover:bg-teaGreen-900/60 transition duration-300"
                whileHover={{ rotate: 1 }}
              >
                <p className="text-lg">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-4 text-ultraViolet-800">🧬 Fun Neurodivergent Facts</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {facts.map((fact, i) => (
              <motion.div 
                key={i} 
                className="bg-purple-900/30 border border-white/10 p-4 rounded-lg hover:bg-purple-900/50 transition duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-sm text-purple-100">{fact}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
