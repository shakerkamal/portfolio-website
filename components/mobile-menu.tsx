"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"

interface MobileMenuProps {
  items: {
    href: string
    label: string
    isScrollLink?: boolean
  }[]
}

export function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isScrollLink?: boolean) => {
    if (isScrollLink) {
      e.preventDefault()
      setIsOpen(false)

      // Small delay to allow menu to close before scrolling
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({
          behavior: "smooth",
        })
      }, 300)
    } else {
      setIsOpen(false)
    }
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" className="h-10 w-10" onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-muted/90 backdrop-blur-sm border-t border-b w-full absolute left-0 top-16"
            style={{ transformOrigin: "top" }}
          >
            <div className="container px-4">
              <nav className="flex flex-col py-6 space-y-3">
                {items.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-lg font-medium transition-colors hover:text-primary flex items-center py-2"
                      onClick={(e) => handleLinkClick(e, item.href, item.isScrollLink)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
