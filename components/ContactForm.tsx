"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error"
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: "loading", message: "Sending message..." })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ type: "success", message: data.message || "Message sent successfully!" })
        setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" })
      } else {
        setStatus({ type: "error", message: data.error || "Failed to send message." })
      }
    } catch (error) {
      setStatus({ type: "error", message: "Network error. Please try again." })
    }
  }

  const isLoading = status.type === "loading"

  return (
    <Card className="bg-[#053133]/50 border-[#4A7C7A]/30 text-white">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                disabled={isLoading}
                className="bg-[#053133]/80 border-[#4A7C7A]/30 text-white placeholder-gray-400 focus:border-[#B8860B]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
              <Input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                disabled={isLoading}
                className="bg-[#053133]/80 border-[#4A7C7A]/30 text-white placeholder-gray-400 focus:border-[#B8860B]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@example.com"
              required
              disabled={isLoading}
              className="bg-[#053133]/80 border-[#4A7C7A]/30 text-white placeholder-gray-400 focus:border-[#B8860B]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
            <Input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Discussion"
              required
              disabled={isLoading}
              className="bg-[#053133]/80 border-[#4A7C7A]/30 text-white placeholder-gray-400 focus:border-[#B8860B]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
              disabled={isLoading}
              className="bg-[#053133]/80 border-[#4A7C7A]/30 text-white placeholder-gray-400 focus:border-[#B8860B] min-h-[120px]"
            />
          </div>

          {status.type !== "idle" && (
            <div
              className={`flex items-center gap-2 p-4 rounded-lg text-sm font-medium ${
                status.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : status.type === "error"
                  ? "bg-red-50 text-red-800 border border-red-200"
                  : "bg-blue-50 text-blue-800 border border-blue-200"
              }`}
            >
              {status.type === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
              {status.type === "success" && <CheckCircle className="w-4 h-4" />}
              {status.type === "error" && <AlertCircle className="w-4 h-4" />}
              <span>{status.message}</span>
            </div>
          )}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#4A7C7A] hover:bg-[#4A7C7A]/80 text-white py-3 text-lg"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
