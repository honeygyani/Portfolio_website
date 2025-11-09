"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ["About", "Projects", "Experience", "Contact"]

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 },
  }

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </motion.button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border z-40"
        >
          <motion.div variants={menuVariants} initial="closed" animate="open" className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                variants={itemVariants}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg hover:bg-primary/20 text-foreground/80 hover:text-primary transition-all"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
