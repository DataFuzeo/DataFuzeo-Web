"use client"

import { motion } from "framer-motion"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Linkedin, Twitter, Github, Briefcase } from "lucide-react"

export function SocialConnect() {
  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/company/datafuzeo",
      color: "hover:text-blue-600",
    },
    // {
    //   icon: Twitter,
    //   label: "Twitter/X",
    //   href: "https://twitter.com/datafuzeo",
    //   color: "hover:text-sky-500",
    // },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/datafuzeo",
      color: "hover:text-gray-600",
    },
    {
      icon: Briefcase,
      label: "Upwork",
      href: "https://upwork.com/agencies/datafuzeo",
      color: "hover:text-green-600",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollAnimation direction="up">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Connect with <span className="gradient-text">Data Fuzeo</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">Follow us on social media and check out our work</p>
            <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-3 rounded-full">
              <p className="text-sm font-medium gradient-text">"Proudly serving clients worldwide."</p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.2}>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center p-4 rounded-xl transition-all duration-300 ${social.color}`}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-3 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <social.icon className="w-8 h-8" />
                </motion.div>
                <span className="text-sm font-medium group-hover:font-semibold transition-all duration-300">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
