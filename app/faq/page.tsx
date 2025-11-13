import { Metadata } from "next";
import { HelpCircle, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import PageTransition from "@/components/layout/PageTransition";
import RevealOnScroll from "@/components/interactive/RevealOnScroll";
import StructuredData from "@/components/seo/StructuredData";

const faqCategories = [
  {
    category: "General & Services",
    questions: [
      {
        question: "What services does Ravana Solutions offer?",
        answer:
          "We specialize in three core areas: Web Development (premium websites that convert), SEO Services (rank higher and drive organic traffic), and SaaS Development (full-stack applications that scale). We also offer digital marketing services including content strategy, social media management, and paid advertising campaigns.",
      },
      {
        question: "What industries do you work with?",
        answer:
          "We work with clients across various industries including tech startups, e-commerce, healthcare, professional services, hospitality, real estate, and more. Our experience spans from early-stage startups to established enterprises looking to enhance their digital presence.",
      },
      {
        question: "Are you a remote-first agency or do you work locally?",
        answer:
          "We're a remote-first agency based in Norfolk, Virginia, serving clients nationwide. While we're available for local in-person meetings in the Hampton Roads area, we've built our processes to work seamlessly with clients anywhere in the United States through video calls, project management tools, and regular communication.",
      },
      {
        question: "Do you work with startups or only established businesses?",
        answer:
          "We work with both! We've helped startups secure their first round of funding and established businesses expand into new markets. Our flexible approach allows us to adapt to your specific needs, whether you're validating an MVP or scaling an enterprise solution.",
      },
    ],
  },
  {
    category: "Pricing & Packages",
    questions: [
      {
        question: "How much does a typical project cost?",
        answer:
          "Project costs vary based on scope, complexity, and timeline. A basic marketing website typically starts around $3,000-$5,000, while custom web applications can range from $10,000-$50,000+. We provide detailed quotes after understanding your specific requirements through our project brief process.",
      },
      {
        question: "Do you offer payment plans or financing options?",
        answer:
          "Yes! We understand that cash flow matters. For larger projects, we typically structure payments in milestones (e.g., 30% upfront, 40% at development completion, 30% at launch). We can also discuss custom payment arrangements that work for your budget.",
      },
      {
        question: "What's included in your pricing?",
        answer:
          "Our pricing includes project management, design, development, quality assurance testing, initial content migration (if applicable), launch support, and 30 days of post-launch bug fixes. Ongoing maintenance, hosting, and additional features are quoted separately based on your needs.",
      },
      {
        question: "Do you charge hourly or project-based rates?",
        answer:
          "We primarily work on fixed-price, project-based contracts for predictable budgeting. However, for ongoing maintenance, updates, or consulting work, we offer hourly rates and monthly retainer packages. We'll recommend the best pricing structure for your specific situation.",
      },
      {
        question: "Are there any hidden fees?",
        answer:
          "Absolutely not. We believe in transparent pricing. All costs are outlined in our proposal, including any third-party services (hosting, domains, premium plugins, etc.). If additional work is requested outside the original scope, we'll provide a change order for approval before proceeding.",
      },
    ],
  },
  {
    category: "Process & Timeline",
    questions: [
      {
        question: "What is your typical project process?",
        answer:
          "Our process has 5 phases: (1) Discovery - understand your goals and requirements, (2) Planning - create wireframes and technical specifications, (3) Design - develop visual designs for approval, (4) Development - build and test the solution, (5) Launch - deploy and provide training. We maintain regular communication throughout each phase.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Timelines vary by project complexity. A marketing website typically takes 4-8 weeks, a custom web application 8-16 weeks, and comprehensive SEO campaigns show results in 3-6 months. We'll provide a detailed timeline in your project proposal and keep you updated on progress.",
      },
      {
        question: "How often will we communicate during the project?",
        answer:
          "We believe in transparent, regular communication. You'll have weekly check-in calls, access to our project management system to track progress in real-time, and direct access to your project manager via email or Slack. For larger projects, we can schedule more frequent touchpoints.",
      },
      {
        question: "What do you need from us to get started?",
        answer:
          "We'll need: (1) completed project brief form, (2) any existing brand assets (logos, style guides, content), (3) access to current website/systems if applicable, (4) key stakeholder availability for kickoff and approval meetings, and (5) signed contract and initial payment.",
      },
      {
        question: "Can we make changes during the project?",
        answer:
          "Yes, with our structured change request process. Minor adjustments within the original scope are included. For significant changes, we'll provide a change order outlining the impact on timeline and cost for your approval before proceeding. This ensures we stay aligned on expectations.",
      },
    ],
  },
  {
    category: "Technical Details",
    questions: [
      {
        question: "What technologies do you use?",
        answer:
          "We specialize in modern, scalable technologies including Next.js, React, TypeScript, Node.js, and Tailwind CSS for web applications. For content management, we work with headless CMS solutions, WordPress, and custom backends. We choose technologies based on your specific needs and long-term goals.",
      },
      {
        question: "Do you provide hosting and domain services?",
        answer:
          "We can set up and manage hosting for you, or work with your existing hosting provider. We typically recommend Vercel for Next.js applications, AWS or DigitalOcean for custom backends, and specialized hosting for WordPress. Domain registration and management can be included in our services.",
      },
      {
        question: "Will I own the code and designs?",
        answer:
          "Yes! Upon final payment, you own all custom code, designs, and assets we create for your project. We provide complete source code access and documentation. You're free to maintain it yourself or continue working with us through a maintenance agreement.",
      },
      {
        question: "Do you offer website maintenance after launch?",
        answer:
          "Absolutely. We offer monthly maintenance packages that include security updates, plugin/dependency updates, content updates, performance monitoring, backup management, and priority support. We also offer on-demand support for clients who prefer to handle routine maintenance themselves.",
      },
      {
        question: "Can you integrate with our existing systems?",
        answer:
          "Yes. We have experience integrating with CRMs (Salesforce, HubSpot), payment processors (Stripe, PayPal), email platforms (Mailchimp, SendGrid), analytics tools, and custom APIs. We'll assess your integration needs during discovery and ensure seamless data flow between systems.",
      },
    ],
  },
  {
    category: "Support & Results",
    questions: [
      {
        question: "What kind of support do you provide after launch?",
        answer:
          "All projects include 30 days of post-launch bug fixes and support. After that, we offer various support tiers from basic on-demand support to comprehensive managed services with guaranteed response times, regular updates, and proactive monitoring.",
      },
      {
        question: "Do you provide training on how to use our new website?",
        answer:
          "Yes! We provide comprehensive training tailored to your team's needs, including recorded video tutorials, written documentation, and live training sessions. We ensure your team feels confident managing and updating your website or application.",
      },
      {
        question: "What if we're not satisfied with the results?",
        answer:
          "Client satisfaction is our top priority. We have approval checkpoints throughout the project to ensure alignment. If you're not satisfied with any deliverable, we'll work with you to make it right. We offer revision rounds at each phase and maintain open communication to address concerns proactively.",
      },
      {
        question: "How do you measure project success?",
        answer:
          "We define success metrics during discovery based on your goals - whether that's increased traffic, higher conversion rates, improved user engagement, or other KPIs. We implement analytics tracking and provide reports showing how the solution performs against these benchmarks.",
      },
      {
        question: "Can you help with ongoing marketing and SEO?",
        answer:
          "Yes! We offer ongoing digital marketing and SEO services through monthly retainers. This includes content creation, technical SEO optimization, link building, paid advertising management, social media, and analytics reporting. We become an extension of your team for continuous growth.",
      },
    ],
  },
];

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Ravana Solutions",
  description:
    "Find answers to common questions about our services, pricing, process, timelines, and support. Learn how Ravana Solutions can help transform your digital presence.",
  keywords: [
    "faq",
    "frequently asked questions",
    "web development questions",
    "seo questions",
    "agency pricing",
    "project timeline",
    "digital agency support",
  ],
  openGraph: {
    title: "FAQ - Ravana Solutions",
    description:
      "Find answers to common questions about our services, pricing, process, and support.",
    type: "website",
  },
};

export default function FAQPage() {
  // Flatten all FAQs for structured data
  const allFaqs = faqCategories.flatMap(category => category.questions);

  return (
    <PageTransition>
      {/* FAQ Page Structured Data */}
      <StructuredData type="faqPage" data={{ faqs: allFaqs }} />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 px-6 text-center">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="flex items-center justify-center mb-6">
                <HelpCircle className="w-16 h-16 text-accent" />
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                Frequently Asked{" "}
                <span className="text-accent">Questions</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
                Everything you need to know about working with Ravana Digital
                Agency. Can't find the answer you're looking for? We'd love to
                chat with you.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <RevealOnScroll key={categoryIndex} delay={categoryIndex * 0.1}>
                  <Card className="p-8">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-accent">
                      {category.category}
                    </h2>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, faqIndex) => (
                        <AccordionItem
                          key={faqIndex}
                          value={`item-${categoryIndex}-${faqIndex}`}
                        >
                          <AccordionTrigger className="text-left text-lg font-semibold">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </Card>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="py-24 px-6">
          <div className="container mx-auto text-center">
            <RevealOnScroll>
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-12 md:p-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Still Have Questions?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  We're here to help. Reach out to our team for personalized
                  answers or start your project brief to get a custom proposal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    <Link href="/contact">
                      Contact Us
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/project-brief">Start Project Brief</Link>
                  </Button>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
