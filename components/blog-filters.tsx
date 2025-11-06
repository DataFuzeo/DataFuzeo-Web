"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const categories = ["All", "Data Science", "AI Agents", "Automation", "Data Engineering", "Generative AI"]

export function BlogFilters() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="mb-12 space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-card border-border"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
            className={`transition-all duration-200 ${
              activeCategory === category
                ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                : "hover:bg-primary/10"
            }`}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}
