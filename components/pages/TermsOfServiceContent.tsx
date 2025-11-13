"use client";

import { motion } from "framer-motion";
import { Scale, FileText, Users, CreditCard, Shield, AlertTriangle, Globe, Clock } from "lucide-react";
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

const termsSections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    icon: FileText,
    content: [
      {
        subtitle: "Agreement to Terms",
        text: "By accessing and using Ravana Solutions's website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services."
      },
      {
        subtitle: "Legal Capacity",
        text: "You represent that you are at least 18 years old and have the legal capacity to enter into these terms. If you are acting on behalf of an organization, you represent that you have the authority to bind that organization to these terms."
      },
      {
        subtitle: "Modifications",
        text: "We reserve the right to modify these terms at any time. We will notify users of significant changes via email or prominent website notice. Continued use of our services after modifications constitutes acceptance of the updated terms."
      }
    ]
  },
  {
    id: "services",
    title: "Our Services",
    icon: Globe,
    content: [
      {
        subtitle: "Service Description",
        text: "Ravana Solutions provides premium digital services including SaaS development, web development, digital marketing, SEO services, and related consulting. Our services are provided subject to availability and may be modified or discontinued at our discretion."
      },
      {
        subtitle: "Service Level Commitments",
        text: "We commit to providing high-quality services with professional standards. Specific deliverables, timelines, and performance metrics will be detailed in individual service agreements or statements of work."
      },
      {
        subtitle: "Third-Party Integrations",
        text: "Our services may integrate with third-party platforms and tools. While we strive to ensure compatibility and functionality, we are not responsible for third-party service availability, performance, or changes that may affect our services."
      }
    ]
  },
  {
    id: "user-responsibilities",
    title: "User Responsibilities",
    icon: Users,
    content: [
      {
        subtitle: "Account Security",
        text: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account."
      },
      {
        subtitle: "Content and Information",
        text: "You are responsible for the accuracy, completeness, and legality of all content and information you provide to us. You warrant that you have the necessary rights to share any materials provided for our services."
      },
      {
        subtitle: "Compliance",
        text: "You agree to comply with all applicable laws, regulations, and these terms when using our services. You will not use our services for any illegal, harmful, or unauthorized purposes."
      },
      {
        subtitle: "Cooperation",
        text: "You agree to provide reasonable cooperation, information, and access necessary for us to perform our services effectively. Delays caused by lack of cooperation may affect project timelines and deliverables."
      }
    ]
  },
  {
    id: "payment-terms",
    title: "Payment and Billing",
    icon: CreditCard,
    content: [
      {
        subtitle: "Payment Obligations",
        text: "You agree to pay all fees and charges associated with your use of our services as specified in your service agreement. Payment terms, including due dates and accepted payment methods, will be outlined in your specific agreement."
      },
      {
        subtitle: "Billing Cycles",
        text: "Billing cycles and payment schedules vary by service type and will be specified in your service agreement. Recurring services will be billed according to the agreed schedule until cancelled or modified."
      },
      {
        subtitle: "Late Payments",
        text: "Late payments may result in service suspension and additional fees. We reserve the right to charge interest on overdue amounts at the rate of 1.5% per month or the maximum rate permitted by law, whichever is lower."
      },
      {
        subtitle: "Refunds",
        text: "Refund policies vary by service type and will be specified in your service agreement. Generally, custom development work and completed services are non-refundable, while unused portions of subscription services may be eligible for pro-rated refunds."
      }
    ]
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    icon: Shield,
    content: [
      {
        subtitle: "Ownership of Deliverables",
        text: "Upon full payment, you will own the custom work products specifically created for you, excluding our pre-existing intellectual property, tools, methodologies, and general knowledge. Ownership terms will be detailed in your service agreement."
      },
      {
        subtitle: "Our Intellectual Property",
        text: "We retain ownership of our proprietary tools, methodologies, frameworks, and any pre-existing intellectual property used in providing services. You receive a license to use deliverables but not to our underlying intellectual property."
      },
      {
        subtitle: "Third-Party Rights",
        text: "Some services may incorporate third-party software, tools, or content. You are responsible for complying with all third-party licensing terms and obtaining necessary permissions for your use of such materials."
      },
      {
        subtitle: "Portfolio Usage",
        text: "We reserve the right to use completed projects in our portfolio and marketing materials unless otherwise agreed in writing. We will respect confidentiality requirements and obtain approval for sensitive projects."
      }
    ]
  },
  {
    id: "limitations",
    title: "Limitations and Disclaimers",
    icon: AlertTriangle,
    content: [
      {
        subtitle: "Service Availability",
        text: "While we strive for maximum uptime, we do not guarantee uninterrupted service availability. We may perform maintenance, updates, or experience technical issues that temporarily affect service access."
      },
      {
        subtitle: "Performance Disclaimers",
        text: "We cannot guarantee specific business results, traffic levels, conversion rates, or other performance metrics from our services. Results depend on many factors beyond our control, including market conditions and your business execution."
      },
      {
        subtitle: "Third-Party Dependencies",
        text: "Our services may depend on third-party platforms, APIs, or services. We are not liable for third-party service disruptions, changes, or limitations that may affect our service delivery."
      },
      {
        subtitle: "Limitation of Liability",
        text: "Our total liability for any claims arising from our services shall not exceed the amount paid by you for the specific services giving rise to the claim in the 12 months preceding the claim."
      }
    ]
  },
  {
    id: "termination",
    title: "Termination",
    icon: Clock,
    content: [
      {
        subtitle: "Termination by Either Party",
        text: "Either party may terminate ongoing services with appropriate notice as specified in the service agreement. Completed work and one-time projects are not subject to termination except for breach of terms."
      },
      {
        subtitle: "Effect of Termination",
        text: "Upon termination, your right to use our services ceases immediately. You remain obligated to pay for services performed before termination. We will provide reasonable assistance in transitioning completed work to you or your designated provider."
      },
      {
        subtitle: "Survival",
        text: "Provisions regarding payment obligations, intellectual property, confidentiality, and limitations of liability survive termination of these terms and any service agreements."
      }
    ]
  },
  {
    id: "general",
    title: "General Provisions",
    icon: Scale,
    content: [
      {
        subtitle: "Governing Law",
        text: "These terms are governed by the laws of [Your Jurisdiction] without regard to conflict of law principles. Any disputes will be resolved in the courts of [Your Jurisdiction]."
      },
      {
        subtitle: "Severability",
        text: "If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect. The unenforceable provision will be modified to the minimum extent necessary to make it enforceable."
      },
      {
        subtitle: "Entire Agreement",
        text: "These terms, together with any applicable service agreements and privacy policy, constitute the entire agreement between you and Ravana Solutions regarding the use of our services."
      },
      {
        subtitle: "Force Majeure",
        text: "We are not liable for any failure or delay in performance due to circumstances beyond our reasonable control, including natural disasters, government actions, internet outages, or other force majeure events."
      }
    ]
  }
];

export default function TermsOfServiceContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />
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
                <Scale className="w-10 h-10 text-accent" />
              </motion.div>
              
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
              >
                Terms of <span className="text-accent">Service</span>
              </motion.h1>
              
              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                Clear terms and conditions governing our services and your use of our platform. Built on fairness and transparency.
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

      {/* Key Highlights */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <RevealOnScroll>
            <motion.div
              variants={fadeInUp}
              className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-20"
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-center">
                Key Terms Summary
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-xl mb-4">
                    <FileText className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Clear Agreements</h3>
                  <p className="text-muted-foreground text-sm">
                    Transparent terms with detailed service descriptions and expectations.
                  </p>
                </motion.div>
                
                <motion.div
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-xl mb-4">
                    <Shield className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">IP Protection</h3>
                  <p className="text-muted-foreground text-sm">
                    Clear intellectual property rights and ownership terms.
                  </p>
                </motion.div>
                
                <motion.div
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-xl mb-4">
                    <CreditCard className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Fair Billing</h3>
                  <p className="text-muted-foreground text-sm">
                    Transparent pricing and payment terms with clear refund policies.
                  </p>
                </motion.div>
                
                <motion.div
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-xl mb-4">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Mutual Respect</h3>
                  <p className="text-muted-foreground text-sm">
                    Terms that protect both parties and promote successful partnerships.
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
          {termsSections.map((section, index) => (
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
                Questions About These Terms?
              </motion.h2>
              
              <motion.p
                variants={fadeInUp}
                className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              >
                Our legal team is available to clarify any questions about our terms of service and how they apply to your specific situation.
              </motion.p>
              
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
                    Contact Legal Team
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-border hover:bg-muted font-semibold"
                >
                  <Link href="/privacy">
                    View Privacy Policy
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