"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Users, Globe, Phone, Mail } from "lucide-react";
import RevealOnScroll from "@/components/interactive/RevealOnScroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -180 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0
  }
};

const privacySections = [
  {
    id: "information-collection",
    title: "Information We Collect",
    icon: FileText,
    content: [
      {
        subtitle: "Personal Information",
        text: "We collect information you provide directly to us, such as when you create an account, fill out a form, or contact us. This may include your name, email address, phone number, company information, and project requirements."
      },
      {
        subtitle: "Usage Information",
        text: "We automatically collect information about how you use our website, including your IP address, browser type, operating system, referring URLs, and pages visited. This helps us improve our services and user experience."
      },
      {
        subtitle: "Communication Data",
        text: "When you communicate with us via email, contact forms, or other channels, we store and process these communications to provide support and improve our services."
      }
    ]
  },
  {
    id: "information-use",
    title: "How We Use Your Information",
    icon: Eye,
    content: [
      {
        subtitle: "Service Provision",
        text: "We use your information to provide, maintain, and improve our digital agency services, including SaaS development, web creation, marketing, and SEO services."
      },
      {
        subtitle: "Communication",
        text: "We use your contact information to respond to your inquiries, provide customer support, send project updates, and share relevant information about our services."
      },
      {
        subtitle: "Analytics and Improvement",
        text: "We analyze usage patterns to understand how our website is used, identify areas for improvement, and develop new features and services."
      }
    ]
  },
  {
    id: "information-sharing",
    title: "Information Sharing",
    icon: Users,
    content: [
      {
        subtitle: "Service Providers",
        text: "We may share your information with trusted third-party service providers who assist us in operating our website, conducting business, or serving our clients, provided they agree to keep this information confidential."
      },
      {
        subtitle: "Legal Requirements",
        text: "We may disclose your information if required by law, regulation, or legal process, or if we believe disclosure is necessary to protect our rights, property, or safety, or that of others."
      },
      {
        subtitle: "Business Transfers",
        text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction, subject to the same privacy protections."
      }
    ]
  },
  {
    id: "data-security",
    title: "Data Security",
    icon: Lock,
    content: [
      {
        subtitle: "Security Measures",
        text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
      },
      {
        subtitle: "Encryption",
        text: "All sensitive data is encrypted both in transit and at rest using industry-standard encryption protocols. We regularly update our security practices to address emerging threats."
      },
      {
        subtitle: "Access Controls",
        text: "Access to your personal information is restricted to employees and contractors who need it to perform their job functions, and all personnel are bound by confidentiality agreements."
      }
    ]
  },
  {
    id: "your-rights",
    title: "Your Privacy Rights",
    icon: Shield,
    content: [
      {
        subtitle: "Access and Correction",
        text: "You have the right to access, update, or correct your personal information. You can do this by contacting us directly or through your account settings if applicable."
      },
      {
        subtitle: "Data Portability",
        text: "You have the right to receive a copy of your personal information in a structured, commonly used format, and to transfer this data to another service provider."
      },
      {
        subtitle: "Deletion",
        text: "You can request that we delete your personal information, subject to certain legal obligations and legitimate business interests that may require us to retain certain data."
      },
      {
        subtitle: "Marketing Communications",
        text: "You can opt out of receiving marketing communications from us at any time by following the unsubscribe instructions in our emails or contacting us directly."
      }
    ]
  },
  {
    id: "international-transfers",
    title: "International Data Transfers",
    icon: Globe,
    content: [
      {
        subtitle: "Cross-Border Processing",
        text: "Your information may be processed and stored in countries other than your own. We ensure that any international transfers comply with applicable data protection laws and provide adequate safeguards."
      },
      {
        subtitle: "Data Protection Standards",
        text: "When transferring data internationally, we use appropriate safeguards such as standard contractual clauses, adequacy decisions, or other legally recognized mechanisms."
      }
    ]
  }
];

export default function PrivacyPolicyContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <RevealOnScroll>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="text-center mb-16"
            >
              <motion.div
                variants={iconVariants}
                transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
                className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-2xl mb-8"
              >
                <Shield className="w-10 h-10 text-accent" />
              </motion.div>
              
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
              >
                Privacy <span className="text-accent">Policy</span>
              </motion.h1>
              
              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                Your privacy is fundamental to us. Learn how we protect, use, and respect your personal information.
              </motion.p>
              
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
              >
                <div className="text-sm text-muted-foreground">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="hidden sm:block text-muted-foreground">•</div>
                <div className="text-sm text-muted-foreground">
                  <strong>Effective:</strong> Immediately upon acceptance
                </div>
              </motion.div>
            </motion.div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <RevealOnScroll>
            <motion.div
              variants={fadeInUp}
              className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-20"
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-center">
                Privacy at a Glance
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-xl mb-4">
                    <Lock className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Data Protection</h3>
                  <p className="text-muted-foreground text-sm">
                    Industry-standard encryption and security measures protect your information.
                  </p>
                </motion.div>
                
                <motion.div
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-xl mb-4">
                    <Eye className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Transparency</h3>
                  <p className="text-muted-foreground text-sm">
                    Clear information about what data we collect and how we use it.
                  </p>
                </motion.div>
                
                <motion.div
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-xl mb-4">
                    <Shield className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Your Rights</h3>
                  <p className="text-muted-foreground text-sm">
                    Full control over your personal information with easy access and deletion options.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {privacySections.map((section, index) => (
            <RevealOnScroll key={section.id}>
              <motion.div
                variants={fadeInUp}
                className="mb-16 last:mb-0"
              >
                <div className="flex items-center mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-xl mr-4">
                    <section.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold">
                    {section.title}
                  </h2>
                </div>
                
                <div className="space-y-8">
                  {section.content.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      variants={fadeInUp}
                      className="bg-card border border-border rounded-xl p-6 md:p-8"
                    >
                      <h3 className="text-xl font-semibold mb-4 text-accent">
                        {item.subtitle}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <RevealOnScroll>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-heading font-bold mb-6"
              >
                Questions About Your Privacy?
              </motion.h2>
              
              <motion.p
                variants={fadeInUp}
                className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              >
                We're here to help. Contact our privacy team for any questions about how we handle your personal information.
              </motion.p>
              
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              >
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>nmangubat@ravanasolutions.com</span>
                </div>
                <div className="hidden sm:block text-muted-foreground">•</div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </motion.div>
              
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  <Link href="/contact">
                    Contact Privacy Team
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-border hover:bg-muted font-semibold"
                >
                  <Link href="/terms">
                    View Terms of Service
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}