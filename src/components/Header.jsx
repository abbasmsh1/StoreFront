import { motion } from 'framer-motion'
import { ShoppingCart, Search, Zap } from 'lucide-react'

export default function Header({ cartCount, onCartClick }) {
  return (
    <motion.header 
      className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
          <span className="w-8 h-8 rounded-lg bg-cyan-400 flex items-center justify-center">
            <Zap size={17} className="text-cyan-950" />
          </span>
          StoreFront
        </h1>

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

        <button
          onClick={onCartClick}
          aria-label="Open cart"
          className="relative p-2 hover:bg-slate-800 rounded-lg transition-colors"
        >
          <ShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute top-0.5 right-0.5 bg-cyan-400 text-cyan-950 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full tabular-nums">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </motion.header>
  )
}
