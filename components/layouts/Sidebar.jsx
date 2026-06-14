// components/layout/Sidebar.jsx
import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Sidebar({ isOpen, onClose }) {
  const router = useRouter()

  return (
    <motion.aside
      initial={{ x: -264 }}
      animate={{ x: isOpen ? 0 : -264 }}
      className="fixed left-0 top-0 z-40 h-screen w-64 bg-primary-900/90 
                 backdrop-blur-xl border-r border-primary-700/50 pt-20 px-4"
    >
      <div className="flex flex-col gap-6">
        <div className="space-y-4">
          <h2 className="text-primary-200 text-sm font-semibold">Navigation</h2>
          <nav className="space-y-2">
            <Link href="/"
              className="flex items-center px-4 py-2 text-primary-200 hover:bg-primary-700/50 
                       rounded-lg transition-colors"
            >
              Home
            </Link>
            {/* Add more navigation items */}
          </nav>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-primary-200 text-sm font-semibold">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {/* Add tag cloud component here */}
          </div>
        </div>
      </div>
    </motion.aside>
  )
}