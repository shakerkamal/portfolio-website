"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { useMemo } from "react"

interface FloatingShapesProps {
  className?: string
  count?: number
  color?: string
}

export function FloatingShapes({ className = "", count = 5, color = "currentColor" }: FloatingShapesProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Generate random shapes
  const shapes = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 60 + 20
      const left = `${Math.random() * 100}%`
      const top = `${Math.random() * 100}%`
      const delay = Math.random() * 0.5
      const duration = Math.random() * 20 + 10
      const isCircle = Math.random() > 0.5
      const opacity = Math.random() * 0.15 + 0.05

      const yStart = Math.random() * 100 - 50
      const yEnd = Math.random() * 100 - 50
      const rotateStart = Math.random() * 360
      const rotateEnd = Math.random() * 360 + 180

      return { size, left, top, delay, duration, isCircle, opacity, yStart, yEnd, rotateStart, rotateEnd }
    })
  }, [count])

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.left,
            top: shape.top,
            opacity: shape.opacity,
            backgroundColor: "transparent",
            border: `2px solid ${color}`,
            borderRadius: shape.isCircle ? "50%" : "20%",
          }}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.left,
            top: shape.top,
            opacity: shape.opacity,
            backgroundColor: "transparent",
            border: `2px solid ${color}`,
            borderRadius: shape.isCircle ? "50%" : "20%",
          }}
          animate={{
            y: [shape.yStart, shape.yEnd],
            rotate: [shape.rotateStart, shape.rotateEnd],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}
