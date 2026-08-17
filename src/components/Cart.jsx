import { motion } from 'framer-motion'
import { X, Trash2 } from 'lucide-react'

export default function Cart({ items, onRemove, onClose }) {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <motion.div 
      className="fixed inset-0 z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50" />
      
      <motion.div 
        className="absolute right-0 top-0 h-full w-full max-w-md bg-slate-900 border-l border-slate-800 flex flex-col"
        initial={{ x: 400 }}
        animate={{ x: 0 }}
        exit={{ x: 400 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button onClick={onClose} aria-label="Close cart" className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <p className="text-slate-400 text-center py-8">Your cart is empty</p>
          ) : (
            items.map((item) => (
              <motion.div
                key={item.id}
                className="flex items-center justify-between p-4 bg-slate-800 rounded-lg"
                layout
              >
                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-slate-400 text-sm">${item.price} × {item.quantity}</p>
                </div>
                <motion.button 
                  onClick={() => onRemove(item.id)}
                  className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-red-400"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Trash2 size={18} />
                </motion.button>
              </motion.div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-slate-800 p-6 space-y-4">
            <div className="flex items-center justify-between text-lg font-bold">
              <span>Total:</span>
              <span className="text-cyan-300 tabular-nums">${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-cyan-400 hover:bg-cyan-300 text-cyan-950 py-3 rounded-lg font-bold transition-colors active:scale-[0.98]">
              Checkout
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
