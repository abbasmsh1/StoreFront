import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Cart from './components/Cart'

export default function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [filter, setFilter] = useState('all')

  const products = [
    {
      id: 1,
      name: 'Wireless Pro Headphones',
      price: 299,
      category: 'audio',
      image: 'from-slate-700 to-slate-900',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Smart Watch Ultra',
      price: 399,
      category: 'wearables',
      image: 'from-indigo-950 to-slate-800',
      rating: 4.7,
    },
    {
      id: 3,
      name: '4K Action Camera',
      price: 449,
      category: 'camera',
      image: 'from-stone-700 to-slate-900',
      rating: 4.9,
    },
    {
      id: 4,
      name: 'Premium Speaker',
      price: 199,
      category: 'audio',
      image: 'from-teal-900 to-slate-900',
      rating: 4.6,
    },
    {
      id: 5,
      name: 'USB-C Hub Pro',
      price: 89,
      category: 'accessories',
      image: 'from-slate-600 to-slate-900',
      rating: 4.5,
    },
    {
      id: 6,
      name: 'Laptop Stand',
      price: 79,
      category: 'accessories',
      image: 'from-zinc-700 to-slate-900',
      rating: 4.4,
    },
  ]

  const addToCart = (product) => {
    const existing = cart.find(p => p.id === product.id)
    if (existing) {
      setCart(cart.map(p => 
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(p => p.id !== id))
  }

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter)

  return (
    <div className="min-h-screen bg-slate-950">
      <Header cartCount={cart.length} onCartClick={() => setCartOpen(!cartOpen)} />
      
      {cartOpen && (
        <Cart 
          items={cart} 
          onRemove={removeFromCart}
          onClose={() => setCartOpen(false)}
        />
      )}

      <Hero />

      <motion.section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
          {['all', 'audio', 'wearables', 'camera', 'accessories'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={`px-5 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-colors ${
                filter === cat
                  ? 'bg-cyan-400 text-cyan-950 font-semibold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <Products 
          products={filteredProducts} 
          onAddToCart={addToCart}
        />
      </motion.section>
    </div>
  )
}
