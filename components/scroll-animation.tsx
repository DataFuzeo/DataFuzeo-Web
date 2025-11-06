"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, memo } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  duration?: number
}

export const ScrollAnimation = memo(function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
}: ScrollAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px", // Reduced margin for earlier trigger
    amount: 0.1, // Only need 10% of element visible
  })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0, // Reduced movement distance
      x: direction === "left" ? 30 : direction === "right" ? -30 : 0, // Reduced movement distance
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.25, 0, 1], // Optimized easing curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
})
