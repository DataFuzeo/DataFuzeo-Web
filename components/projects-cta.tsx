"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import Link from "next/link"

export function ProjectsCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-30, 30, -30],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation>
          <div className="space-y-8">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="inline-block"
            >
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Have a project in mind? <span className="gradient-text">Let's build it together.</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ready to transform your business with AI and data solutions? Our team is here to turn your vision into
              reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground pulse-glow"
              >
                <Link href="/#contact">
                  Contact Sales
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/20 hover:bg-primary/10 bg-transparent"
              >
                <Link href="/#about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
