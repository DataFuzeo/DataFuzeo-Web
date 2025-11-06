import { Navbar } from "@/components/navbar"
import { ScrollProgress } from "@/components/scroll-progress"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { TeamSection } from "@/components/team-section"
import { DirectContact } from "@/components/direct-contact"
import { SocialConnect } from "@/components/social-connect"
import { ContactCta } from "@/components/contact-cta"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <main>
        <ContactHero />
        <TeamSection />
        <ContactForm />
        <DirectContact />
        <SocialConnect />
        <ContactCta />
      </main>
      <Footer />
    </div>
  )
}
