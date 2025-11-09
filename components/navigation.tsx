"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"
import { motion } from "framer-motion"
import MobileMenu from "./mobile-menu"

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navItems = ["About", "Projects", "Experience", "Contact"]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} onClick={scrollToTop} className="cursor-pointer">
            <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Honey Gyani
            </div>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.05, color: "#8B5CF6" }}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu & Back to Top */}
          <div className="flex items-center gap-4">
            <MobileMenu />
            {scrolled && (
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={scrollToTop}
                className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
              >
                <ChevronUp className="w-5 h-5 text-primary" />
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
