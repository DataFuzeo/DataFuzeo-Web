"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Clock, DollarSign, Users } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const caseStudies = [
  {
    title: "Retail Giant Transformation",
    problem: "Manual inventory management leading to 20% stockouts and $2M annual losses",
    solution: "AI-powered demand forecasting and automated inventory optimization system",
    impact: "Reduced stockouts by 85% and increased profit margins by 32%",
    metrics: [
      { icon: TrendingUp, label: "Profit Increase", value: "32%" },
      { icon: Clock, label: "Time Saved", value: "15hrs/day" },
    ],
  },
  {
    title: "Healthcare Efficiency Boost",
    problem: "Patient scheduling inefficiencies causing 40% no-show rates and staff burnout",
    solution: "ML-based patient flow optimization and automated reminder system",
    impact: "Improved patient satisfaction by 60% and reduced operational costs by $500K",
    metrics: [
      { icon: Users, label: "Satisfaction", value: "+60%" },
      { icon: DollarSign, label: "Cost Savings", value: "$500K" },
    ],
  },
  {
    title: "Manufacturing Excellence",
    problem: "Unexpected equipment failures causing 25% production downtime",
    solution: "IoT sensors with predictive maintenance AI models",
    impact: "Achieved 99.2% uptime and extended equipment lifespan by 40%",
    metrics: [
      { icon: TrendingUp, label: "Uptime", value: "99.2%" },
      { icon: Clock, label: "Lifespan", value: "+40%" },
    ],
  },
]

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Real results from real businesses. See how our AI solutions drive measurable impact.
          </p>
        </ScrollAnimation>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <ScrollAnimation key={study.title} delay={index * 0.3} direction={index % 2 === 0 ? "left" : "right"}>
              <Card
                className={`glass p-8 hover:scale-105 transition-all duration-300 border-border/50 ${
                  index % 2 === 1 ? "lg:ml-12" : "lg:mr-12"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-card-foreground">{study.title}</h3>

                    <div>
                      <h4 className="font-semibold text-destructive mb-2">Problem</h4>
                      <p className="text-muted-foreground text-pretty">{study.problem}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-2">Solution</h4>
                      <p className="text-muted-foreground text-pretty">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-accent mb-2">Impact</h4>
                      <p className="text-muted-foreground text-pretty">{study.impact}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {study.metrics.map((metric, metricIndex) => (
                        <ScrollAnimation
                          key={metricIndex}
                          delay={index * 0.3 + metricIndex * 0.1}
                          className="glass p-6 text-center hover:scale-105 transition-all duration-300"
                        >
                          <metric.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                          <div className="text-3xl font-bold gradient-text mb-1">{metric.value}</div>
                          <div className="text-muted-foreground text-sm">{metric.label}</div>
                        </ScrollAnimation>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
