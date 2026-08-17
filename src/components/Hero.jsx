import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

export default function Hero() {
  return (
    <motion.section 
      className="relative overflow-hidden py-20 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-950 via-purple-950 to-slate-950" />
      
      <motion.div 
        className="absolute inset-0"
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div 
          className="flex items-center justify-center gap-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Zap className="text-cyan-400" />
          <span className="text-cyan-400 font-semibold">New Collection 2024</span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-7xl font-bold mb-6 gradient-neon"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Premium Tech, Delivered Fast
        </motion.h1>

        <motion.p 
          className="text-xl text-slate-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Discover cutting-edge gadgets and accessories designed for modern life
        </motion.p>

        <motion.div 
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button 
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now
          </motion.button>
          <motion.button 
            className="border border-slate-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Catalog
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}
