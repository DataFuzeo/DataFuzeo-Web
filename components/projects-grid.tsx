"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import Link from "next/link"
import Image from "next/image"

const projects = [
{
  id: 8,
  title: "RAG-Based Medical Chatbot (MediBot AI)",
  description:
    "A professional AI chatbot for healthcare that uses Retrieval-Augmented Generation (RAG) to provide accurate and trustworthy medical responses.",
  image: "/main-medai.png", // main image for the project card
  tags: ["RAG", "AI Agents", "Healthcare", "LLM Integration"],
  slug: "medibot-ai",
  metrics: { accuracy: "High", reliability: "Verified Sources" },
},
{
  id: 7,
  title: "AI-Powered Customer Support Agent",
  description:
    "Conversational AI integrated with workflow automation (n8n, Slack, Gmail, and HubSpot) to streamline customer support and eliminate repetitive tasks.",
  image: "/ai-customer-support-automation.jpg",
  tags: ["AI Agents", "Automation", "n8n", "Customer Support"],
  slug: "ai-customer-support-automation",
  metrics: { response: "Instant", efficiency: "+15hrs saved/week" },
},
{
    id: 6,
    title: "Nexa AI Voice Receptionist",
    description: "Human-like AI voice assistant for appointment booking with 98% completion rate and real-time natural language understanding.",
    image: "/nexa.jpg",
    tags: ["AI Agents", "Voice AI", "Automation", "No-Code"],
    slug: "nexa-ai-project",
    metrics: { completion: "98%", response: "<3 sec" },
  },
{
    id: 5,
    title: "AURA — AI Document Intelligence System",
    description: "RAG + LangGraph integration for offline document reasoning with 95% reduction in review time and 100% data privacy.",
    image: "/aura.jpg",
    tags: ["RAG", "LangGraph", "Document Intelligence", "Local AI"],
    slug: "aura-ai-project",
    metrics: { reduction: "95%", privacy: "100%" },
  },
{
    id: 4,
    title: "Generative AI Content Engine",
    description: "Automated content generation system for marketing campaigns using GPT models.",
    image: "/ai-content-generation-interface.jpg",
    tags: ["Generative AI", "Automation"],
    slug: "ai-content-engine",
    metrics: { speed: "10x", quality: "92%" },
  },
{
    id: 3,
    title: "CHARM — AI-Powered Poultry Health Platform",
    description: "Computer vision and deep learning system for real-time poultry disease detection with 92% accuracy and 75% improvement in early detection.",
    image: "/charm.png",
    tags: ["Computer Vision", "Deep Learning", "AgriTech", "AI Agents"],
    slug: "charm-poultry-health",
    metrics: { accuracy: "92%", detection: "+75%" },
  },
{
    id: 2,
    title: "Customer Sentiment Analysis Platform",
    description: "Real-time sentiment analysis of customer feedback across multiple channels.",
    image: "/sentiment-analysis-dashboard.jpg",
    tags: ["Data Science", "Generative AI"],
    slug: "sentiment-analysis",
    metrics: { accuracy: "89%", insights: "24/7" },
  },
{
    id: 1,
    title: "Automated Data Pipeline",
    description: "Scalable data pipeline processing millions of records daily with real-time analytics.",
    image: "/data-pipeline-architecture.png",
    tags: ["Data Engineering", "Automation"],
    slug: "automated-data-pipeline",
    metrics: { throughput: "10M/day", latency: "<100ms" },
  }
]

interface ProjectsGridProps {
  activeFilter?: string
  sortBy?: string
}

export function ProjectsGrid({ activeFilter = "all", sortBy = "newest" }: ProjectsGridProps) {
  // Filter projects based on active filter
  const filteredProjects = projects.filter(project => {
    if (activeFilter === "all") return true
    
    // Convert filter ID to match project tags
    const filterMap: Record<string, string[]> = {
      "ai-agents": ["AI Agents"],
      "rag": ["RAG"],
      "computer-vision": ["Computer Vision"],
      "voice-ai": ["Voice AI"],
      "automation": ["Automation"],
      "agritech": ["AgriTech"],
      "generative-ai": ["Generative AI"],
    }
    
    const filterTags = filterMap[activeFilter] || []
    return project.tags.some(tag => 
      filterTags.some(filterTag => 
        tag.toLowerCase().includes(filterTag.toLowerCase()) ||
        filterTag.toLowerCase().includes(tag.toLowerCase())
      )
    )
  })

  // Sort projects based on sortBy option
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        // Sort by ID (assuming higher ID = newer)
        return b.id - a.id
      
      case "industry":
        // Sort by industry/domain (Healthcare, AgriTech, etc.)
        const getIndustry = (project: typeof projects[0]) => {
          if (project.tags.includes("Healthcare")) return "Healthcare"
          if (project.tags.includes("AgriTech")) return "AgriTech"
          if (project.tags.includes("Voice AI")) return "Communication"
          if (project.tags.includes("Customer Support")) return "Business"
          if (project.tags.includes("RAG") || project.tags.includes("Document Intelligence")) return "Knowledge Management"
          return "Technology"
        }
        return getIndustry(a).localeCompare(getIndustry(b))
      
      case "impact":
        // Sort by impact (based on metrics values)
        const getImpactScore = (project: typeof projects[0]) => {
          const metrics = project.metrics
          // Extract numeric values from metrics for comparison
          if (typeof metrics.accuracy === "string" && metrics.accuracy.includes("%")) {
            return parseInt(metrics.accuracy.replace("%", ""))
          }
          if (typeof metrics.completion === "string" && metrics.completion.includes("%")) {
            return parseInt(metrics.completion.replace("%", ""))
          }
          if (typeof metrics.reduction === "string" && metrics.reduction.includes("%")) {
            return parseInt(metrics.reduction.replace("%", ""))
          }
          if (typeof metrics.privacy === "string" && metrics.privacy.includes("%")) {
            return parseInt(metrics.privacy.replace("%", ""))
          }
          return 0
        }
        return getImpactScore(b) - getImpactScore(a) // Descending order (highest impact first)
      
      default:
        return 0
    }
  })

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg?height=192&width=384"}
                      alt={project.title}
                      width={384}
                      height={192}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        asChild
                        className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground"
                      >
                        <Link href={`/projects/${project.slug}`}>
                          View Case Study
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="flex justify-between text-sm">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="font-semibold text-primary">{value}</div>
                          <div className="text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
