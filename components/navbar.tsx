"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${sectionId}`
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "glass backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <img 
                  src="/updatedlogo.png" 
                  alt="Data Fuzeo Logo" 
                  className="h-8 w-8 object-contain"
                />
                <span className="text-2xl font-bold gradient-text">Data Fuzeo</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-foreground hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/projects" className="text-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
                <Link href="/blogs" className="text-foreground hover:text-primary transition-colors">
                  Blogs
                </Link>
                <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground pulse-glow">
                  Contact Sales
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/projects"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/blogs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors"
              >
                Blogs
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground mt-8">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
