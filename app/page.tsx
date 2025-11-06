import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Projects } from "@/components/projects"
import { CaseStudies } from "@/components/case-studies"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Projects />
      <CaseStudies />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
