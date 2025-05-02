"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxProps {
  children: React.ReactNode
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
  offset?: number
}

export function ParallaxElement({
  children,
  speed = 0.5,
  direction = "up",
  className = "",
  offset = 0,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Calculate transform values based on direction
  const factor = 100 * speed
  const translateYUp = useTransform(scrollYProgress, [0, 1], [`translateY(${offset}px)`, `translateY(-${factor}px)`])
  const translateYDown = useTransform(scrollYProgress, [0, 1], [`translateY(${offset}px)`, `translateY(${factor}px)`])
  const translateXLeft = useTransform(scrollYProgress, [0, 1], [`translateX(${offset}px)`, `translateX(-${factor}px)`])
  const translateXRight = useTransform(scrollYProgress, [0, 1], [`translateX(${offset}px)`, `translateX(${factor}px)`])

  const getTransformValues = () => {
    switch (direction) {
      case "up":
        return translateYUp
      case "down":
        return translateYDown
      case "left":
        return translateXLeft
      case "right":
        return translateXRight
      default:
        return translateYUp
    }
  }

  const transform = getTransformValues()

  return (
    <motion.div ref={ref} style={{ transform }} className={className}>
      {children}
    </motion.div>
  )
}
