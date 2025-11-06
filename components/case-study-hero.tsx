"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Users, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CaseStudyHeroProps {
  caseStudy: {
    title: string
    subtitle: string
    image: string
    client: string
    duration: string
    team: string
    tags: string[]
  }
}

export function CaseStudyHero({ caseStudy }: CaseStudyHeroProps) {
  return (
    <section className="relative py-20 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
            <Link href="/projects" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">{caseStudy.title}</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">{caseStudy.subtitle}</p>

            {/* Project Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Client</div>
                  <div className="font-semibold">{caseStudy.client}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                  <div className="font-semibold">{caseStudy.duration}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Tag className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Team Size</div>
                  <div className="font-semibold">{caseStudy.team}</div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {caseStudy.tags && caseStudy.tags.length > 0 ? (
                caseStudy.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {tag}
                  </span>
                ))
              ) : (
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">No tags available</span>
              )}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={caseStudy.image || "/placeholder.svg"}
                alt={caseStudy.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
