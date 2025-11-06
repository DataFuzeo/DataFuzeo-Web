"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Rocket, Users, Globe } from "lucide-react"

export function OurStory() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const milestones = [
    {
      year: "2025",
      title: "Foundation",
      description:
        "Data Fuzeo was founded with a vision to democratize AI and data science for businesses of all sizes.",
      icon: Rocket,
    },
    {
      year: "2025",
      title: "First Automation Projects",
      description:
        "Successfully delivered our first automation solutions, helping clients reduce operational costs by 40%.",
      icon: Users,
    },
    {
      year: "2025",
      title: "AI Agent Platform",
      description: "Launched our proprietary AI agent platform, enabling intelligent automation at scale.",
      icon: Globe,
    },
    {
      year: "Future",
      title: "Global Expansion",
      description: "Scaling our AI and data platforms to serve enterprises worldwide.",
      icon: Calendar,
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Story</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From a vision to transform business operations to becoming a leader in AI-driven solutions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg prose-invert max-w-none mb-16"
          >
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Data Fuzeo emerged from a simple yet powerful belief: that every business, regardless of size, should have
              access to cutting-edge AI and data science capabilities. Founded by a team of experienced data scientists
              and AI engineers, we recognized the growing gap between technological advancement and practical business
              implementation.
            </p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className={`flex items-center gap-8 ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
              >
                <div className="flex-1">
                  <div className="glass p-6 rounded-xl border border-primary/10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-full bg-gradient-to-r from-primary to-secondary">
                        <milestone.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-primary">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
