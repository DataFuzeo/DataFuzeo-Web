"use client"

import { Card } from "@/components/ui/card"
import { ScrollAnimation } from "@/components/scroll-animation"

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation direction="left" className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">About Data Fuzeo</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-pretty">
                <p>
                  We are a team of AI specialists, data scientists, and automation experts dedicated to transforming
                  businesses through intelligent technology solutions.
                </p>
                <p>
                  Founded on the principle that every business deserves access to cutting-edge AI capabilities, we
                  bridge the gap between complex technology and practical business outcomes.
                </p>
                <p>
                  Our mission is to democratize AI and data science, making these powerful tools accessible and
                  actionable for organizations of all sizes.
                </p>
              </div>
            </div>

            <Card className="glass p-6 border-border/50">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Our Vision</h3>
              <p className="text-muted-foreground text-pretty">
                To be the leading catalyst in the AI revolution, empowering businesses to unlock their full potential
                through intelligent automation and data-driven insights.
              </p>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation direction="right" delay={0.2} className="relative">
            <div className="glass p-8 rounded-2xl">
              <img
                src="/ai-data-network-visualization.jpg"
                alt="AI and Data Network Visualization"
                className="w-full h-auto rounded-lg float-animation"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.svg";
                }}
              />
            </div>

            <ScrollAnimation delay={0.4} className="absolute -top-4 -right-4 glass p-4 rounded-lg">
              <div className="text-2xl font-bold gradient-text">500+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.6} className="absolute -bottom-4 -left-4 glass p-4 rounded-lg">
              <div className="text-2xl font-bold gradient-text">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </ScrollAnimation>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
