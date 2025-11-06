"use client"

import { Github, Linkedin, Briefcase } from "lucide-react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-background border-t border-primary/20 relative">
      {/* Glowing top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-2xl font-bold gradient-text">Data Fuzeo</span>
            <p className="text-muted-foreground text-pretty">
              Transforming businesses through AI, data science, and intelligent automation solutions.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Navigation</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("hero")}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <div className="space-y-2 text-muted-foreground">
              <div>Data Science</div>
              <div>AI Agents</div>
              <div>Automation</div>
              <div>Data Engineering</div>
              <div>Generative AI</div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/datafuzeo" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/datafuzeo" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://upwork.com/agencies/datafuzeo" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Upwork">
                <Briefcase className="h-5 w-5" />
              </a>
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Data Fuzeo. All rights reserved. Built with cutting-edge AI technology.</p>
        </div>
      </div>
    </footer>
  )
}
