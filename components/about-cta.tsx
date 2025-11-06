"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutCta() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="glass p-12 rounded-2xl border border-primary/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            We help businesses unlock growth with{" "}
            <span className="gradient-text">AI, Data Science, and Automation</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Let's build the future together. Ready to transform your business with intelligent solutions?
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground pulse-glow"
          >
            <Link href="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
