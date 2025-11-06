"use client"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { ProjectsHero } from "@/components/projects-hero"
import { ProjectsGrid } from "@/components/projects-grid"
import { ProjectFilters } from "@/components/project-filters"
import { FeaturedCaseStudies } from "@/components/featured-case-studies"
import { ProjectsCTA } from "@/components/projects-cta"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [sortBy, setSortBy] = useState("newest")

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <ProjectsHero />
      <ProjectFilters 
        onFilterChange={setActiveFilter}
        onSortChange={setSortBy}
      />
      <ProjectsGrid 
        activeFilter={activeFilter}
        sortBy={sortBy}
      />
      <FeaturedCaseStudies />
      <ProjectsCTA />
      <Footer />
    </div>
  )
}
