"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxBackgroundProps {
  children: React.ReactNode
  className?: string
  imageUrl?: string
  speed?: number
}

export function ParallaxBackground({ children, className = "", imageUrl = "", speed = 0.2 }: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])

  const backgroundStyle = imageUrl
    ? {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : {}

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y,
          ...backgroundStyle,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
