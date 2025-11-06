"use client"

import { Card } from "@/components/ui/card"
import { Brain, Bot, Zap, Database, Sparkles } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const services = [
  {
    icon: Brain,
    title: "Data Science",
    description:
      "Advanced analytics and machine learning models to extract insights from your data and predict future trends.",
  },
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Intelligent automation agents that handle complex tasks, customer interactions, and business processes.",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Streamline operations with custom automation solutions that reduce costs and increase efficiency.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Robust data pipelines and infrastructure to collect, process, and store your data at scale.",
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    description: "Custom AI solutions for content generation, code assistance, and creative problem-solving.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Comprehensive AI and data solutions tailored to transform your business operations and drive growth.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimation key={service.title} delay={index * 0.1}>
              <Card className="glass p-8 hover:scale-105 transition-all duration-300 group cursor-pointer border-border/50 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-pretty">{service.description}</p>
                </div>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
