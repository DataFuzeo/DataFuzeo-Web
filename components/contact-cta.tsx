"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ArrowRight } from "lucide-react"

export function ContactCta() {
  const scrollToForm = () => {
    const element = document.getElementById("contact-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-background via-primary/5 to-secondary/5">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollAnimation direction="up">
          <motion.div className="glass p-12 rounded-2xl" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to accelerate your business with <span className="gradient-text">AI?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's talk about how we can transform your ideas into powerful AI solutions that drive real business
              results.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={scrollToForm}
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-8 py-4 text-lg pulse-glow group"
              >
                Start a Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
