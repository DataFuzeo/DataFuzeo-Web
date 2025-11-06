"use client"
import { BlogHero } from "@/components/blog-hero"
import { BlogGrid } from "@/components/blog-grid"
import { BlogFilters } from "@/components/blog-filters"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <BlogHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <BlogFilters />
        <BlogGrid />
      </div>
      <Footer />
    </div>
  )
}
