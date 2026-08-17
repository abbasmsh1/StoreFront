import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

export default function Hero() {
  return (
    <motion.section 
      className="relative overflow-hidden py-20 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="absolute inset-0 bg-slate-900 border-b border-slate-800" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0.9, 0.3, 1] }}
        >
          Premium tech,<br /><span className="text-cyan-300">delivered fast.</span>
        </motion.h1>

        <motion.p
          className="text-xl text-slate-300 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.5, ease: [0.2, 0.9, 0.3, 1] }}
        >
          Discover cutting-edge gadgets and accessories designed for modern life
        </motion.p>

        <motion.div 
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.5, ease: [0.2, 0.9, 0.3, 1] }}
        >
          <button className="bg-cyan-400 hover:bg-cyan-300 text-cyan-950 px-8 py-3 rounded-lg font-bold transition-colors">
            Shop now
          </button>
          <button className="border border-slate-700 text-white px-8 py-3 rounded-lg font-semibold hover:border-slate-500 transition-colors">
            View catalog
          </button>
        </motion.div>
      </div>
    </motion.section>
  )
}
