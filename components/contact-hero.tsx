"use client"

import { motion } from "framer-motion"
import { ScrollAnimation } from "@/components/scroll-animation"

export function ContactHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5">
        <div className="absolute inset-0">
          {/* Floating particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation direction="up">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Let's Build the <span className="gradient-text">Future of AI</span> Together
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? Looking to scale your business with AI, Data Science, or Automation? Our team is
              here to help.
            </p>
          </motion.div>
        </ScrollAnimation>

        {/* Lottie Animation Placeholder */}
        <ScrollAnimation direction="up" delay={0.2}>
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-32 h-32 md:w-48 md:h-48">
              {/* Chat bubbles animation */}
              <motion.div
                className="absolute top-0 left-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0,
                }}
              >
                <div className="w-6 h-6 bg-primary/40 rounded-full" />
              </motion.div>
              <motion.div
                className="absolute top-8 right-0 w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0.5,
                }}
              >
                <div className="w-8 h-8 bg-secondary/40 rounded-full" />
              </motion.div>
              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center"
                animate={{
                  y: [0, -12, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 1,
                }}
              >
                <div className="w-5 h-5 bg-accent/40 rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
