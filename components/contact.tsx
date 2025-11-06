"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Send } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Failed to send message. Please try again.')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation>
            <Card className="glass p-12 border-border/50">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold gradient-text">Thank You!</h2>
                <p className="text-xl text-muted-foreground">
                  Your message has been sent successfully. We'll get back to you within 24 hours.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10"
                >
                  Send Another Message
                </Button>
              </div>
            </Card>
          </ScrollAnimation>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ready to transform your business with AI? Let's discuss your project and explore how we can help you achieve
            your goals.
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <Card className="glass p-8 border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-input/50 border-border/50 focus:border-primary"
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-input/50 border-border/50 focus:border-primary"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-card-foreground">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="bg-input/50 border-border/50 focus:border-primary"
                  placeholder="Your company name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-input/50 border-border/50 focus:border-primary resize-none"
                  placeholder="Tell us about your project, challenges, and goals..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground pulse-glow"
              >
                Send Message <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  )
}
