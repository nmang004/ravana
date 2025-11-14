import { Metadata } from "next";
import { TrendingUp, Target, BarChart3, Users, Megaphone, Mail, ArrowRight, Check, Zap, Brain, Rocket, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import PageTransition from "@/components/layout/PageTransition";
import RevealOnScroll from "@/components/interactive/RevealOnScroll";
import StaggerReveal from "@/components/interactive/StaggerReveal";
import AnimatedCounter from "@/components/interactive/AnimatedCounter";
import Breadcrumb from "@/components/seo/Breadcrumb";

const services = [
  {
    icon: Target,
    title: "Paid Advertising",
    description: "Strategic PPC campaigns across Google, Facebook, LinkedIn, and other platforms to maximize ROI.",
    details: ["Google Ads Management", "Facebook & Instagram Ads", "LinkedIn Advertising", "Retargeting Campaigns"]
  },
  {
    icon: Users,
    title: "Social Media Marketing",
    description: "Build engaged communities and amplify your brand voice across all social media platforms.",
    details: ["Content Strategy", "Community Management", "Influencer Partnerships", "Social Media Analytics"]
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurture leads and retain customers with personalized email campaigns that drive conversions.",
    details: ["Email Automation", "Newsletter Campaigns", "Segmentation Strategy", "Performance Tracking"]
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Data-driven insights to optimize your marketing performance and make informed decisions.",
    details: ["Campaign Analytics", "ROI Tracking", "Custom Dashboards", "Performance Reports"]
  },
  {
    icon: Brain,
    title: "Content Marketing",
    description: "Create valuable content that attracts, engages, and converts your target audience.",
    details: ["Content Strategy", "Blog Writing", "Video Content", "Infographic Design"]
  },
  {
    icon: Rocket,
    title: "Growth Hacking",
    description: "Innovative strategies and tactics to accelerate your business growth and market penetration.",
    details: ["Viral Marketing", "Referral Programs", "Product-Market Fit", "Conversion Optimization"]
  }
];

const results = [
  {
    metric: "250%",
    description: "Average ROI Increase",
    icon: DollarSign
  },
  {
    metric: "150%",
    description: "Lead Generation Growth",
    icon: TrendingUp
  },
  {
    metric: "300%",
    description: "Social Media Engagement",
    icon: Users
  },
  {
    metric: "45%",
    description: "Conversion Rate Improvement",
    icon: Target
  }
];

const process = [
  {
    step: 1,
    title: "Strategy Development",
    description: "Comprehensive market research, competitor analysis, and strategic planning tailored to your business.",
    duration: "Week 1"
  },
  {
    step: 2,
    title: "Campaign Setup",
    description: "Create and configure all marketing campaigns, tracking systems, and automation workflows.",
    duration: "Week 2"
  },
  {
    step: 3,
    title: "Launch & Optimize",
    description: "Launch campaigns and continuously optimize based on performance data and market feedback.",
    duration: "Week 3-4"
  },
  {
    step: 4,
    title: "Scale & Grow",
    description: "Scale successful campaigns and explore new opportunities for growth and expansion.",
    duration: "Ongoing"
  }
];

const platforms = [
  { name: "Google Ads", category: "Search", growth: "+180%" },
  { name: "Facebook Ads", category: "Social", growth: "+220%" },
  { name: "LinkedIn Ads", category: "B2B", growth: "+160%" },
  { name: "Instagram", category: "Visual", growth: "+290%" },
  { name: "YouTube", category: "Video", growth: "+340%" },
  { name: "TikTok", category: "Emerging", growth: "+450%" },
  { name: "Google Analytics", category: "Analytics", growth: "Essential" },
  { name: "HubSpot", category: "CRM", growth: "Core Tool" }
];

export const metadata: Metadata = {
  title: "Digital Marketing Services | Ravana Solutions",
  description: "Data-driven digital marketing services including PPC advertising, social media marketing, and analytics. Complement your web presence with strategic marketing.",
  keywords: ["digital marketing", "PPC advertising", "social media marketing", "Google Ads", "Facebook Ads", "marketing analytics", "Hampton Roads marketing"],
  alternates: {
    canonical: '/services/marketing',
  },
  openGraph: {
    title: "Digital Marketing Services | Ravana Solutions",
    description: "Data-driven digital marketing services including PPC advertising, social media marketing, and analytics to grow your business.",
    type: "website",
    images: [
      {
        url: '/og-digital-marketing.jpg',
        width: 1200,
        height: 630,
        alt: 'Ravana Solutions Digital Marketing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing | Ravana Solutions',
    description: 'Data-driven digital marketing strategies including PPC, social media, and comprehensive analytics.',
    images: ['/og-digital-marketing.jpg'],
  },
};

export default function DigitalMarketingPage() {
  return (
    <PageTransition>
      <div className="pt-20">
        {/* Breadcrumb */}
        <section className="py-6 px-6">
          <div className="container mx-auto">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Digital Marketing" }
              ]}
            />
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="container mx-auto relative z-10">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-2xl mb-8">
                  <TrendingUp className="w-10 h-10 text-accent" />
                </div>
                <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                  Digital <span className="text-accent">Marketing</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
                  Accelerate your business growth with data-driven marketing strategies that deliver measurable results. 
                  From paid advertising to social media, we help you reach and convert your target audience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/contact?service=marketing">
                      Grow Your Business
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#results">
                      See Results
                    </Link>
                  </Button>
                </div>
              </div>
            </RevealOnScroll>
          </div>
          
          {/* Animated Growth Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10">
              <div className="flex items-center space-x-1 animate-pulse">
                <div className="w-2 h-6 bg-accent rounded"></div>
                <div className="w-2 h-8 bg-accent rounded delay-100"></div>
                <div className="w-2 h-10 bg-accent rounded delay-200"></div>
                <div className="w-2 h-12 bg-accent rounded delay-300"></div>
              </div>
            </div>
            <div className="absolute top-40 right-20 text-accent text-2xl animate-bounce delay-1000">📈</div>
            <div className="absolute bottom-40 left-20 text-accent text-2xl animate-pulse delay-2000">💰</div>
            <div className="absolute bottom-20 right-10 text-accent text-2xl animate-bounce delay-3000">🚀</div>
          </div>
        </section>

        {/* Results Section */}
        <section id="results" className="py-24 px-6 bg-muted/20">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Proven <span className="text-accent">Results</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our data-driven approach delivers measurable results that impact your bottom line.
                </p>
              </div>
            </RevealOnScroll>

            <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((result, index) => {
                const Icon = result.icon;
                return (
                  <Card key={index} className="p-8 text-center bg-background/50 border-accent/20 hover:border-accent/40 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                      <AnimatedCounter value={parseInt(result.metric)} suffix={result.metric.replace(/[0-9]/g, '')} />
                    </div>
                    <p className="text-muted-foreground font-medium">{result.description}</p>
                  </Card>
                );
              })}
            </StaggerReveal>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-6">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Our <span className="text-accent">Services</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive digital marketing solutions tailored to your business needs and growth objectives.
                </p>
              </div>
            </RevealOnScroll>

            <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="p-8 bg-background/50 border-accent/20 hover:border-accent/40 transition-all duration-500 group hover:scale-105">
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300 group-hover:rotate-12">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-4 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm text-muted-foreground flex items-start">
                          <Check className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </StaggerReveal>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-24 px-6 bg-muted/20">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Marketing <span className="text-accent">Platforms</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We leverage the most effective marketing platforms and tools to maximize your reach and ROI.
                </p>
              </div>
            </RevealOnScroll>

            <StaggerReveal className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <Card key={index} className="p-6 text-center bg-background/50 hover:bg-accent/5 transition-all duration-300 group">
                  <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                    {platform.name}
                  </h3>
                  <Badge variant="outline" className="mb-3 text-xs">
                    {platform.category}
                  </Badge>
                  <div className="text-sm text-accent font-medium">
                    {platform.growth}
                  </div>
                </Card>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-6">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Our <span className="text-accent">Process</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A systematic approach to marketing that ensures consistent growth and measurable results.
                </p>
              </div>
            </RevealOnScroll>

            <div className="relative">
              {/* Progress Line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-accent/20 hidden md:block"></div>
              
              <div className="space-y-12">
                {process.map((step, index) => (
                  <RevealOnScroll key={index} delay={index * 0.1}>
                    <div className="flex flex-col md:flex-row items-start gap-8">
                      <div className="flex-shrink-0 relative">
                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl relative z-10">
                          {step.step}
                        </div>
                        <div className="absolute inset-0 bg-accent/20 rounded-full animate-ping"></div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className="text-2xl font-heading font-bold">{step.title}</h3>
                          <Badge variant="outline" className="self-start md:self-center">
                            {step.duration}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-lg">{step.description}</p>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-accent/10 to-accent/5">
          <div className="container mx-auto text-center">
            <RevealOnScroll>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Ready to <span className="text-accent">Scale Your Growth</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's create a comprehensive marketing strategy that drives real results and accelerates your business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/contact?service=marketing">
                    Start Growing Today
                    <Rocket className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/portfolio">
                    View Case Studies
                  </Link>
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}