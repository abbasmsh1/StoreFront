import { motion } from 'framer-motion'
import { Star, ShoppingCart } from 'lucide-react'

export default function Products({ products, onAddToCart }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {products.map((product) => (
        <motion.div
          key={product.id}
          variants={item}
          className="card-glow rounded-xl overflow-hidden group"
        >
          <div className="relative h-64 overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${product.image} transition-transform duration-500 group-hover:scale-105`} />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="absolute top-4 right-4 bg-slate-950/85 px-3 py-1 rounded-full">
              <span className="text-white font-semibold tabular-nums">${product.price}</span>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-bold mb-2">{product.name}</h3>
            
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-600'}
                />
              ))}
              <span className="text-sm text-slate-400 ml-2">{product.rating}</span>
            </div>

            <button
              onClick={() => onAddToCart(product)}
              className="w-full bg-cyan-400 hover:bg-cyan-300 text-cyan-950 py-2.5 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors active:scale-[0.98]"
            >
              <ShoppingCart size={17} />
              Add to cart
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
