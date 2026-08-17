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
      image: 'from-blue-600 to-cyan-500',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Smart Watch Ultra',
      price: 399,
      category: 'wearables',
      image: 'from-purple-600 to-pink-500',
      rating: 4.7,
    },
    {
      id: 3,
      name: '4K Action Camera',
      price: 449,
      category: 'camera',
      image: 'from-red-600 to-orange-500',
      rating: 4.9,
    },
    {
      id: 4,
      name: 'Premium Speaker',
      price: 199,
      category: 'audio',
      image: 'from-green-600 to-emerald-500',
      rating: 4.6,
    },
    {
      id: 5,
      name: 'USB-C Hub Pro',
      price: 89,
      category: 'accessories',
      image: 'from-indigo-600 to-blue-500',
      rating: 4.5,
    },
    {
      id: 6,
      name: 'Laptop Stand',
      price: 79,
      category: 'accessories',
      image: 'from-yellow-600 to-orange-500',
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
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                filter === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </motion.button>
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
