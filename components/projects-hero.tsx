"use client"

import { motion } from "framer-motion"
import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"

export function ProjectsHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.2, 0.8, 0.2],
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
        {/* Breadcrumb Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-8"
        >
          <Link href="/" className="flex items-center hover:text-primary transition-colors">
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">Projects</span>
        </motion.nav>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Our Work in <span className="gradient-text">Action</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Explore how Data Fuzeo has delivered AI, Data Science, and Automation solutions for clients across
            industries.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
