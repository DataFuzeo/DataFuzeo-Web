"use client"

import { Card } from "@/components/ui/card"
import { Search, Hammer, Rocket, TrendingUp } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "We analyze your business needs, data landscape, and identify opportunities for AI and automation.",
  },
  {
    icon: Hammer,
    title: "Build",
    description: "Our experts develop custom solutions using cutting-edge AI technologies and best practices.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "Seamless integration and deployment of solutions with comprehensive testing and validation.",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    description: "Continuous optimization and scaling to maximize ROI and adapt to evolving business needs.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">How We Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our proven methodology ensures successful AI implementation from concept to scale.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ScrollAnimation key={step.title} delay={index * 0.15} className="relative">
              <Card className="glass p-6 text-center hover:scale-105 transition-all duration-300 border-border/50">
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <div className="p-4 rounded-full bg-primary/10">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm text-pretty">{step.description}</p>
                </div>
              </Card>

              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2" />
              )}
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
