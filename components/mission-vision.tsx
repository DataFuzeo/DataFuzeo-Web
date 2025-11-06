"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Eye } from "lucide-react"

export function MissionVision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Mission & Vision</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driving the future of business through intelligent technology solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group"
          >
            <div className="glass p-8 rounded-2xl h-full hover:scale-105 transition-all duration-300 border border-primary/10 hover:border-primary/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-primary to-secondary">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower businesses with intelligent AI-driven solutions that transform operations, enhance
                decision-making, and unlock unprecedented growth opportunities through the power of data science and
                automation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group"
          >
            <div className="glass p-8 rounded-2xl h-full hover:scale-105 transition-all duration-300 border border-secondary/10 hover:border-secondary/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-secondary to-primary">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the trusted global partner for AI and automation transformation, enabling businesses worldwide
                to thrive in the digital age through innovative technology solutions and strategic intelligence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
