"use client"

import { useEffect } from "react"

export function ScrollTrigger() {
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      // Get all elements with data-animate attribute
      const animatableElements = document.querySelectorAll('[data-animate="true"]')

      animatableElements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0

        // Add or remove the 'in-view' class based on visibility
        if (isVisible) {
          element.classList.add("in-view")
        } else {
          element.classList.remove("in-view")
        }
      })
    }

    // Initial check
    handleScroll()

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return null
}
