"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollAnimation } from "@/components/scroll-animation"
import { CheckCircle, Loader2 } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
    interest: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        return value.trim() ? "" : "Name is required"
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Valid email is required"
      case "message":
        return value.trim() ? "" : "Message is required"
      case "interest":
        return value ? "" : "Please select an area of interest"
      default:
        return ""
    }
  }

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate all fields
    const newErrors: Record<string, string> = {}
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "company") {
        // Company is optional
        const error = validateField(key, value)
        if (error) newErrors[key] = error
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

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

      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false)
        setFormData({
          name: "",
          company: "",
          email: "",
          message: "",
          interest: "",
        })
      }, 3000)
    } catch (error) {
      console.error('Error sending message:', error)
      setIsSubmitting(false)
      // You could add error state handling here
      alert('Failed to send message. Please try again.')
    }
  }

  if (isSuccess) {
    return (
      <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass p-8 rounded-2xl text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            </motion.div>
            <h3 className="text-2xl font-bold text-foreground mb-2">✅ Message Sent Successfully!</h3>
            <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you within 24 hours.</p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <ScrollAnimation direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your <span className="gradient-text">AI Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Tell us about your project and let's create something amazing together.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.2}>
          <motion.div className="glass p-8 rounded-2xl" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={`${errors.name ? "border-red-500" : ""} transition-all duration-200 focus:ring-2 focus:ring-primary/20`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Input
                    placeholder="Company (Optional)"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`${errors.email ? "border-red-500" : ""} transition-all duration-200 focus:ring-2 focus:ring-primary/20`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <Select value={formData.interest} onValueChange={(value) => handleInputChange("interest", value)}>
                  <SelectTrigger
                    className={`${errors.interest ? "border-red-500" : ""} transition-all duration-200 focus:ring-2 focus:ring-primary/20`}
                  >
                    <SelectValue placeholder="Interested in *" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="data-science">Data Science</SelectItem>
                    <SelectItem value="ai-agents">AI Agents</SelectItem>
                    <SelectItem value="automation">Automation</SelectItem>
                    <SelectItem value="data-engineering">Data Engineering</SelectItem>
                    <SelectItem value="generative-ai">Generative AI</SelectItem>
                  </SelectContent>
                </Select>
                {errors.interest && <p className="text-red-500 text-sm mt-1">{errors.interest}</p>}
              </div>

              <div>
                <Textarea
                  placeholder="Tell us about your project *"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className={`${errors.message ? "border-red-500" : ""} min-h-[120px] transition-all duration-200 focus:ring-2 focus:ring-primary/20`}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground py-3 text-lg pulse-glow"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
