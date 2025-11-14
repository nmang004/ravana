"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  service?: string;
}

interface ContactFormProps {
  selectedService?: string;
}

export default function ContactForm({ selectedService }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: "",
    service: selectedService || "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
          service: selectedService || "",
        });
      } else {
        throw new Error(result.error || "Failed to submit form");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    { value: "", label: "Select a service (optional)" },
    { value: "saas", label: "SaaS Development" },
    { value: "web", label: "Web Development" },
    { value: "marketing", label: "Digital Marketing" },
    { value: "seo", label: "SEO Services" },
    { value: "consultation", label: "Free Consultation" },
  ];

  return (
    <Card className="p-2 sm:p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
        {/* Success Message */}
        {submitStatus === "success" && (
          <motion.div
            role="alert"
            aria-live="polite"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center space-x-3"
          >
            <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
            <div>
              <p className="font-semibold text-green-500">Message sent successfully!</p>
              <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>
            </div>
          </motion.div>
        )}

        {/* Error Message */}
        {submitStatus === "error" && (
          <motion.div
            role="alert"
            aria-live="assertive"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-center space-x-3"
          >
            <AlertCircle className="w-5 h-5 text-destructive" aria-hidden="true" />
            <div>
              <p className="font-semibold text-destructive">Failed to send message</p>
              <p className="text-sm text-muted-foreground">{errorMessage}</p>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Your full name"
              className="transition-all duration-300 focus:ring-2 focus:ring-accent/20"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="your@email.com"
              className="transition-all duration-300 focus:ring-2 focus:ring-accent/20"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Company */}
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Your company name"
              className="transition-all duration-300 focus:ring-2 focus:ring-accent/20"
            />
          </div>

          {/* Service */}
          <div className="space-y-2">
            <Label htmlFor="service">Service of Interest</Label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/20 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {services.map((service) => (
                <option key={service.value} value={service.value}>
                  {service.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            placeholder="Tell us about your project, goals, and how we can help..."
            rows={6}
            className="transition-all duration-300 focus:ring-2 focus:ring-accent/20"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          aria-label={isSubmitting ? "Sending message" : "Send message"}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 group"
        >
          {isSubmitting ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" aria-hidden="true" />
              <span>Sending...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <span>Send Message</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </div>
          )}
        </Button>

        <p className="text-sm text-muted-foreground text-center">
          We'll respond within 24 hours. For urgent inquiries, call us directly.
        </p>
      </form>
    </Card>
  );
}