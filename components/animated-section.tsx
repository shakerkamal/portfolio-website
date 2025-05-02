"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  animation?: "fadeIn" | "slideUp" | "slideRight" | "slideLeft" | "scale" | "stagger"
  staggerChildren?: number
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  duration = 0.5,
  once = false,
  animation = "fadeIn",
  staggerChildren = 0.1,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-10% 0px" })
  const controls = useAnimation()

  // Animation variants
  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration, delay } },
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration, delay } },
    },
    slideRight: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration, delay } },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0, transition: { duration, delay } },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration, delay } },
    },
    stagger: {
      hidden: { opacity: 0, y: 20 },
      visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * staggerChildren + delay,
          duration,
        },
      }),
    },
  }

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [isInView, controls, once])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants[animation]}
      className={className}
      data-animate="true"
    >
      {children}
    </motion.div>
  )
}

export function AnimatedItem({
  children,
  className,
  index = 0,
}: { children: React.ReactNode; className?: string; index?: number }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.1,
            duration: 0.5,
          },
        }),
      }}
      custom={index}
      className={className}
      data-animate="true"
    >
      {children}
    </motion.div>
  )
}
