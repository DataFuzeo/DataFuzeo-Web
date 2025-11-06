"use client"

import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Card } from "@/components/ui/card"

const teamMembers = [
  {
    id: 1,
    name: "Farjad Kareem",
    role: "Chief Executive Officer (CEO)",
    description: "Vision-driven founder leading product innovation, AI strategy, and company growth. Passionate about transforming data into intelligent business outcomes.",
    image: "/profile.jpg",
    linkedin: "https://www.linkedin.com/in/farjad-kareem-3a73aa2b6",
  },
  {
    id: 2,
    name: "Mateen Abid",
    role: "Co-Founder & Business Development Executive",
    description: "Leads partnerships, client relations, and market expansion strategies. Bridges the gap between business needs and AI-driven solutions.",
    image: "/mateen.jpg",
    linkedin: "https://www.linkedin.com/in/mateen-abid-77a5ba246/",
  },
  {
    id: 3,
    name: "Taimoor Amir",
    role: "Co-Founder & Chief Technology Officer (CTO)",
    description: "Oversees the technical architecture and development of DataFuzeo's AI platforms. Ensures scalable, efficient, and production-ready systems.",
    image: "/taimoor.jpg",
    linkedin: "https://www.linkedin.com/in/taimoor-amir-339790280/",
  },
]

export function TeamSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
            The innovators behind DataFuzeo — combining AI, strategy, and engineering to create intelligent data solutions.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <ScrollAnimation key={member.id} delay={index * 0.1}>
              <Card className="glass p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border-border/50 h-full">
                <div className="flex flex-col items-center text-center space-y-6">
                  {/* Profile Image */}
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to placeholder if image doesn't exist
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder-user.jpg";
                        }}
                      />
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300" />
                  </div>

                  {/* Member Info */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium text-sm uppercase tracking-wide">
                        {member.role}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  {/* LinkedIn Link */}
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300 group/link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                </div>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* Call to Action */}
        <ScrollAnimation delay={0.4} className="text-center mt-16">
          <div className="glass p-8 rounded-2xl border-border/50">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Work with <span className="gradient-text">Our Team?</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how our expertise in AI, data science, and automation can transform your business. 
              Get in touch with our team today.
            </p>
            <motion.button
              onClick={() => {
                const contactForm = document.getElementById('contact-form');
                if (contactForm) {
                  contactForm.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 pulse-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
