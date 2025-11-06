"use client"

import { motion } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CaseStudyCta() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Ready to Transform Your Business?</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Let's discuss how we can deliver similar results for your organization. Our team is ready to tackle your
            most complex challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground"
            >
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">
                <MessageCircle className="w-5 h-5 mr-2" />
                View More Projects
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
