"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContentSliderProps {
    children: React.ReactNode[]
    itemsPerSlide?: number
    autoPlay?: boolean
    autoPlayInterval?: number
    className?: string
}

export function ContentSlider({
                                  children,
                                  itemsPerSlide = 1,
                                  autoPlay = false,
                                  autoPlayInterval = 5000,
                                  className = "",
                              }: ContentSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const sliderRef = useRef<HTMLDivElement>(null)
    const totalSlides = Math.ceil(children.length / itemsPerSlide)

    // Check if mobile on mount and on resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkMobile()
        window.addEventListener("resize", checkMobile)

        return () => {
            window.removeEventListener("resize", checkMobile)
        }
    }, [])

    // Adjust itemsPerSlide based on screen size
    const effectiveItemsPerSlide = isMobile ? 1 : itemsPerSlide

    // Auto play functionality
    useEffect(() => {
        if (!autoPlay || isPaused) return

        const interval = setInterval(() => {
            nextSlide()
        }, autoPlayInterval)

        return () => clearInterval(interval)
    }, [autoPlay, isPaused, currentIndex, autoPlayInterval])

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
    }

    // Get current slide items
    const getCurrentSlideItems = () => {
        const startIdx = currentIndex * effectiveItemsPerSlide
        return children.slice(startIdx, startIdx + effectiveItemsPerSlide)
    }

    return (
        <div
            className={`relative w-full ${className}`}
            ref={sliderRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="flex gap-4 md:gap-6"
                    >
                        {getCurrentSlideItems()}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation controls */}
            <div className="flex justify-center mt-6 gap-2">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={prevSlide}
                    className="rounded-full h-10 w-10 bg-background/80 backdrop-blur hover:bg-background"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="h-5 w-5" />
                </Button>

                <div className="flex items-center gap-2 px-2">
                    {Array.from({ length: totalSlides }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-2 rounded-full transition-all ${
                                idx === currentIndex ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>

                <Button
                    variant="outline"
                    size="icon"
                    onClick={nextSlide}
                    className="rounded-full h-10 w-10 bg-background/80 backdrop-blur hover:bg-background"
                    aria-label="Next slide"
                >
                    <ChevronRight className="h-5 w-5" />
                </Button>
            </div>
        </div>
    )
}
