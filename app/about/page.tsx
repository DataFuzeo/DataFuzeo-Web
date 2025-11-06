import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { MissionVision } from "@/components/mission-vision"
import { OurStory } from "@/components/our-story"
import { CoreValues } from "@/components/core-values"
import { ClientsPartners } from "@/components/clients-partners"
import { AboutCta } from "@/components/about-cta"
import { ScrollProgress } from "@/components/scroll-progress"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <AboutHero />
      <MissionVision />
      <OurStory />
      <CoreValues />
      <ClientsPartners />
      <AboutCta />
      <Footer />
    </main>
  )
}
