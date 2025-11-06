"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Filter } from "lucide-react"

const filters = [
  { id: "all", label: "All Projects" },
  { id: "ai-agents", label: "AI Agents" },
  { id: "rag", label: "RAG" },
  { id: "computer-vision", label: "Computer Vision" },
  { id: "voice-ai", label: "Voice AI" },
  { id: "automation", label: "Automation" },
  { id: "agritech", label: "AgriTech" },
  { id: "generative-ai", label: "Generative AI" },
]

const sortOptions = [
  { id: "newest", label: "Newest → Oldest" },
  { id: "industry", label: "By Industry" },
  { id: "impact", label: "By Impact" },
]

interface ProjectFiltersProps {
  onFilterChange?: (filter: string) => void
  onSortChange?: (sort: string) => void
}

export function ProjectFilters({ onFilterChange, onSortChange }: ProjectFiltersProps) {
  const [activeFilter, setActiveFilter] = useState("all")
  const [sortBy, setSortBy] = useState("newest")
  const [showSortDropdown, setShowSortDropdown] = useState(false)

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId)
    onFilterChange?.(filterId)
  }

  const handleSortChange = (sortId: string) => {
    setSortBy(sortId)
    onSortChange?.(sortId)
  }

  return (
    <section className="py-12 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Filter Tags */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => handleFilterChange(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg"
                    : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <Button
              variant="outline"
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              {sortOptions.find((option) => option.id === sortBy)?.label}
              <ChevronDown className={`w-4 h-4 transition-transform ${showSortDropdown ? "rotate-180" : ""}`} />
            </Button>

            <AnimatePresence>
              {showSortDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-10"
                >
                  {sortOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        handleSortChange(option.id)
                        setShowSortDropdown(false)
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg ${
                        sortBy === option.id ? "bg-muted text-primary" : ""
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
