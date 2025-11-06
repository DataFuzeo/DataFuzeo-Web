"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function ClientsPartners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const partners = [
    { name: "AWS", logo: "/aws.png" },
    { name: "Microsoft Azure", logo: "/azure.png" },
    { name: "OpenAI", logo: "/openai.png" },
    { name: "Snowflake", logo: "/snowflake.png" },
    { name: "Tableau", logo: "/tableau-logo.png" },
    { name: "n8n", logo: "/n8n-logo.jpg" },
    { name: "Google Cloud", logo: "/images/partners/google-cloud-logo.png" },
    { name: "Databricks", logo: "/databricks-logo.png" },
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
            Trusted <span className="gradient-text">Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We work with industry-leading technology partners to deliver best-in-class solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden"
        >
          <div className="flex animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center">
                <div className="glass w-32 h-20 p-4 rounded-xl border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:scale-105 flex items-center justify-center">
  <Image
    src={partner.logo}
    alt={partner.name}
    fill
    className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
  />
</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground">
            Building on the most trusted and innovative technology platforms in the industry
          </p>
        </motion.div>
      </div>
    </section>
  )
}
