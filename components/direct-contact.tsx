"use client"

import { motion } from "framer-motion"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Mail, Phone, MapPin, Copy } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function DirectContact() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  const copyToClipboard = (text: string, item: string) => {
    navigator.clipboard.writeText(text)
    setCopiedItem(item)
    setTimeout(() => setCopiedItem(null), 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "datafuzeo@gmail.com",
      href: "mailto:datafuzeo@gmail.com",
      copyText: "datafuzeo@gmail.com",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+92 319 8562747",
      href: "https://wa.me/923198562747",
      copyText: "+92 319 8562747",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "London, United Kingdom",
      href: "https://maps.google.com/?q=London,UK",
      copyText: "London, United Kingdom",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimation direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Prefer direct contact? Reach out to us through any of these channels.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((contact, index) => (
            <ScrollAnimation key={contact.label} direction="up" delay={index * 0.1}>
              <motion.div
                className="glass p-6 rounded-xl text-center group"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <contact.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>

                <h3 className="text-xl font-semibold mb-2">{contact.label}</h3>
                <p className="text-muted-foreground mb-4">{contact.value}</p>

                <div className="flex gap-2 justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    <a href={contact.href} target="_blank" rel="noopener noreferrer">
                      Visit
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(contact.copyText, contact.label)}
                    className="hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  >
                    <Copy className="w-4 h-4 mr-1" />
                    {copiedItem === contact.label ? "Copied!" : "Copy"}
                  </Button>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
