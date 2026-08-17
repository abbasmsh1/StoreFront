import { motion } from 'framer-motion'
import { ShoppingCart, Search } from 'lucide-react'

export default function Header({ cartCount, onCartClick }) {
  return (
    <motion.header 
      className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.h1 
          className="text-2xl font-bold gradient-neon"
          whileHover={{ scale: 1.05 }}
        >
          ⚡ StoreFront
        </motion.h1>

        <div className="flex-1 max-w-md mx-8">
          <div className="flex items-center bg-slate-800 rounded-lg px-4 py-2">
            <Search size={18} className="text-slate-500" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="bg-transparent ml-3 outline-none w-full text-sm"
            />
          </div>
        </div>

        <motion.button 
          onClick={onCartClick}
          className="relative p-2 hover:bg-slate-800 rounded-lg transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ShoppingCart size={24} />
          {cartCount > 0 && (
            <motion.span 
              className="absolute top-1 right-1 bg-pink-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
            >
              {cartCount}
            </motion.span>
          )}
        </motion.button>
      </div>
    </motion.header>
  )
}
