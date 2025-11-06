"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const projects = [
  {
    title: "RAG-Based Medical Chatbot (MediBot AI)",
    description: "A professional AI chatbot for healthcare that uses Retrieval-Augmented Generation (RAG) to provide accurate and trustworthy medical responses.",
    image: "/main-medai.png",
    tags: ["RAG", "AI Agents", "Healthcare", "LLM Integration"],
    metrics: "High Accuracy & Verified Sources",
  },
  {
    title: "Nexa AI Voice Receptionist",
    description: "Human-like AI voice assistant for appointment booking with 98% completion rate and <3 second response time.",
    image: "/nexa.jpg",
    tags: ["AI Agents", "Voice AI", "No-Code"],
    metrics: "98% Completion Rate",
  },
  {
    title: "CHARM — AI-Powered Poultry Health Platform",
    description: "Computer vision and deep learning system for real-time poultry disease detection with 92% accuracy and 75% improvement in early detection.",
    image: "/charm.png",
    tags: ["Computer Vision", "Deep Learning", "AgriTech"],
    metrics: "92% Disease Detection Accuracy",
  },
  {
    title: "AURA — AI Document Intelligence System",
    description: "RAG + LangGraph integration for offline document reasoning with 95% reduction in review time and 100% data privacy.",
    image: "/aura.jpg",
    tags: ["RAG", "LangGraph", "Document Intelligence", "Local AI"],
    metrics: "95% Time Reduction",
  },
]

export function Projects() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover how we've helped businesses transform their operations with AI and data solutions.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <ScrollAnimation key={project.title} delay={index * 0.2} direction={index % 2 === 0 ? "left" : "right"}>
              <Card className="glass overflow-hidden group hover:scale-105 transition-all duration-300 border-border/50">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {project.metrics}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => scrollToSection("case-studies")}
                    className="border-primary/50 hover:bg-primary/10"
                  >
                    View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
