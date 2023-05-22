'use client';
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
<motion.div
    initial={{ opacity: 0, }}
    animate={{ opacity: 1, }}
    transition={{ duration: 4 }}>
  
        <div className="flex items-center justify-center h-screen">
          <p className="text-center text-white">Vectorcrop is coming with full power!</p>
        </div>
        </motion.div>
    </main>
  )
}
