"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Lightbulb, Target, Users, Shield, Zap, Heart } from "lucide-react"

export function CoreValues() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We push the boundaries of what's possible with AI and data science, constantly exploring new technologies and methodologies.",
    },
    {
      icon: Target,
      title: "Impact",
      description:
        "Every solution we create is designed to deliver measurable business value and drive meaningful transformation.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We work closely with our clients as partners, ensuring solutions are tailored to their unique needs and goals.",
    },
    {
      icon: Shield,
      title: "Trust",
      description:
        "We maintain the highest standards of data security, privacy, and ethical AI practices in everything we do.",
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "We are committed to delivering exceptional quality and performance in every project we undertake.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Our team is driven by a genuine passion for technology and its potential to transform businesses and lives.",
    },
  ]

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
            Our Core <span className="gradient-text">Values</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The principles that guide everything we do and shape our approach to innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="glass p-6 rounded-xl h-full hover:scale-105 hover:rotate-1 transition-all duration-300 border border-primary/10 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-primary to-secondary group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
