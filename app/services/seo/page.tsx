import { Metadata } from "next";
import { Search, TrendingUp, Target, BarChart3, Globe, MapPin, ArrowRight, Check, Zap, Eye, Award, Crown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import PageTransition from "@/components/layout/PageTransition";
import RevealOnScroll from "@/components/interactive/RevealOnScroll";
import StaggerReveal from "@/components/interactive/StaggerReveal";
import AnimatedCounter from "@/components/interactive/AnimatedCounter";

const services = [
  {
    icon: Search,
    title: "Technical SEO Audit",
    description: "Comprehensive analysis of your website's technical foundation to identify and fix ranking obstacles.",
    details: ["Site Speed Optimization", "Mobile-First Indexing", "Core Web Vitals", "Schema Markup", "XML Sitemaps", "Crawl Error Analysis"]
  },
  {
    icon: Target,
    title: "Keyword Research",
    description: "Strategic keyword targeting to capture high-intent traffic and dominate search results.",
    details: ["Competitor Analysis", "Search Intent Mapping", "Long-tail Keywords", "Keyword Difficulty Analysis", "SERP Analysis", "Opportunity Identification"]
  },
  {
    icon: Globe,
    title: "On-Page Optimization",
    description: "Optimize every element of your pages to maximize search engine visibility and user experience.",
    details: ["Title Tag Optimization", "Meta Descriptions", "Header Structure", "Internal Linking", "Content Optimization", "Image SEO"]
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description: "Dominate local search results and attract customers in your geographic area.",
    details: ["Google My Business", "Local Citations", "Review Management", "Local Content Strategy", "NAP Consistency", "Local Link Building"]
  },
  {
    icon: TrendingUp,
    title: "Link Building",
    description: "Build high-quality backlinks that boost your domain authority and search rankings.",
    details: ["Guest Posting", "Digital PR", "Broken Link Building", "Resource Page Links", "HARO Outreach", "Competitor Analysis"]
  },
  {
    icon: BarChart3,
    title: "SEO Analytics",
    description: "Track performance, measure success, and continuously optimize your SEO strategy.",
    details: ["Ranking Tracking", "Traffic Analysis", "Conversion Tracking", "ROI Measurement", "Custom Reporting", "Competitive Intelligence"]
  }
];

const results = [
  {
    metric: "285%",
    description: "Average Organic Traffic Increase",
    icon: TrendingUp
  },
  {
    metric: "67%",
    description: "First Page Rankings",
    icon: Crown
  },
  {
    metric: "340%",
    description: "Keyword Visibility Boost",
    icon: Eye
  },
  {
    metric: "3-6",
    description: "Months to See Results",
    icon: Zap
  }
];

const seoProcess = [
  {
    step: 1,
    title: "SEO Audit & Analysis",
    description: "Comprehensive audit of your current SEO performance, technical issues, and competitor landscape.",
    deliverables: ["Technical SEO Audit", "Keyword Gap Analysis", "Competitor Research"],
    duration: "Week 1-2"
  },
  {
    step: 2,
    title: "Strategy Development",
    description: "Create a customized SEO strategy based on your business goals and market opportunities.",
    deliverables: ["SEO Strategy Document", "Keyword Targeting Plan", "Content Calendar"],
    duration: "Week 3"
  },
  {
    step: 3,
    title: "On-Page Optimization",
    description: "Optimize your website's content, structure, and technical elements for better rankings.",
    deliverables: ["Optimized Pages", "Technical Fixes", "Content Updates"],
    duration: "Week 4-6"
  },
  {
    step: 4,
    title: "Content & Link Building",
    description: "Create valuable content and build high-quality backlinks to boost your authority.",
    deliverables: ["Content Creation", "Link Acquisition", "PR Outreach"],
    duration: "Week 7-12"
  },
  {
    step: 5,
    title: "Monitor & Optimize",
    description: "Continuous monitoring, reporting, and optimization to maintain and improve rankings.",
    deliverables: ["Monthly Reports", "Ongoing Optimization", "Strategy Refinement"],
    duration: "Ongoing"
  }
];

const tools = [
  { name: "SEMrush", category: "Research", icon: "🔍" },
  { name: "Ahrefs", category: "Backlinks", icon: "🔗" },
  { name: "Google Search Console", category: "Analytics", icon: "📊" },
  { name: "Screaming Frog", category: "Technical", icon: "🕷️" },
  { name: "Google Analytics", category: "Traffic", icon: "📈" },
  { name: "PageSpeed Insights", category: "Performance", icon: "⚡" },
  { name: "Schema.org", category: "Markup", icon: "🏷️" },
  { name: "Google My Business", category: "Local", icon: "📍" }
];

const caseStudy = {
  client: "E-commerce Fashion Brand",
  industry: "Retail Fashion",
  challenge: "Low organic visibility and poor local search presence",
  solution: "Comprehensive SEO strategy focusing on product pages and local optimization",
  results: [
    { metric: "420%", description: "Organic Traffic Increase" },
    { metric: "150+", description: "First Page Keywords" },
    { metric: "280%", description: "Local Search Visibility" },
    { metric: "65%", description: "Conversion Rate Improvement" }
  ],
  duration: "6 months"
};

const pricingTiers = [
  {
    name: "Local",
    price: "$1,500",
    period: "/month",
    description: "Perfect for local businesses",
    features: [
      "Local SEO optimization",
      "Google My Business management",
      "15 target keywords",
      "Monthly reporting",
      "Basic technical SEO",
      "Review management"
    ]
  },
  {
    name: "Growth",
    price: "$3,000",
    period: "/month",
    description: "Ideal for growing businesses",
    features: [
      "50 target keywords",
      "Content optimization",
      "Link building (5/month)",
      "Technical SEO audit",
      "Competitor analysis",
      "Bi-weekly reporting"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large-scale SEO campaigns",
    features: [
      "Unlimited keywords",
      "Dedicated SEO manager",
      "Advanced link building",
      "Custom content creation",
      "Priority support",
      "Weekly reporting & calls"
    ]
  }
];

export const metadata: Metadata = {
  title: "SEO Services - Dominate Search Results & Drive Organic Traffic",
  description: "Boost your search engine rankings with our proven SEO strategies. Technical optimization, keyword research, content creation, and link building services.",
  keywords: ["SEO services", "search engine optimization", "organic traffic", "keyword research", "link building", "local SEO", "technical SEO"],
  openGraph: {
    title: "SEO Services | Ravana Digital Agency",
    description: "Boost your search engine rankings with our proven SEO strategies. Technical optimization, keyword research, content creation, and link building services.",
    type: "website",
  },
};

export default function SEOServicesPage() {
  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="container mx-auto relative z-10">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-2xl mb-8">
                  <Search className="w-10 h-10 text-accent" />
                </div>
                <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                  SEO <span className="text-accent">Services</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
                  Dominate search results and drive qualified organic traffic with our proven SEO strategies. 
                  From technical optimization to content creation, we help you rank higher and convert more visitors.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/contact?service=seo">
                      Boost Your Rankings
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#case-study">
                      See Case Study
                    </Link>
                  </Button>
                </div>
              </div>
            </RevealOnScroll>
          </div>
          
          {/* Animated Search Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 flex items-center space-x-2 animate-pulse">
              <Search className="w-4 h-4 text-accent" />
              <div className="h-2 bg-accent rounded w-20"></div>
            </div>
            <div className="absolute top-40 right-20 animate-bounce delay-1000">
              <div className="text-accent font-mono text-sm">#1 Ranking</div>
            </div>
            <div className="absolute bottom-40 left-20 animate-pulse delay-2000">
              <div className="flex flex-col space-y-1">
                <div className="h-1 bg-accent rounded w-16"></div>
                <div className="h-1 bg-accent/60 rounded w-12"></div>
                <div className="h-1 bg-accent/40 rounded w-14"></div>
              </div>
            </div>
            <div className="absolute bottom-20 right-10 text-accent text-2xl animate-spin">🎯</div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-24 px-6 bg-muted/20">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  SEO <span className="text-accent">Results</span> That Matter
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our data-driven SEO strategies deliver measurable improvements in rankings, traffic, and conversions.
                </p>
              </div>
            </RevealOnScroll>

            <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((result, index) => {
                const Icon = result.icon;
                return (
                    <Card key={index} className="p-8 text-center bg-background/50 border-accent/20 hover:border-accent/40 transition-all duration-300 group hover:scale-105">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                      <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                        {result.metric.includes('%') ? (
                          <AnimatedCounter value={parseInt(result.metric)} suffix="%" />
                        ) : (
                          result.metric
                        )}
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
                  Comprehensive <span className="text-accent">SEO Services</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  From technical optimization to content strategy, we cover every aspect of SEO to maximize your visibility.
                </p>
              </div>
            </RevealOnScroll>

            <StaggerReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Card key={index} className="p-8 bg-background/50 border-accent/20 hover:border-accent/40 transition-all duration-500 group">
                      <div className="w-14 h-14 bg-gradient-to-r from-accent/10 to-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-accent/20 group-hover:to-accent/30 transition-all duration-300">
                        <Icon className="w-7 h-7 text-accent group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h3 className="text-xl font-heading font-bold mb-4 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <div className="space-y-2">
                        {service.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="text-sm text-muted-foreground flex items-start">
                            <Check className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </Card>
                  );
                })}
            </StaggerReveal>
          </div>
        </section>

        {/* Case Study Section */}
        <section id="case-study" className="py-24 px-6 bg-muted/20">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Success <span className="text-accent">Case Study</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  See how we helped a fashion e-commerce brand dominate their market through strategic SEO.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <Card className="p-8 md:p-12 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <Badge variant="outline" className="mb-4">
                      {caseStudy.industry}
                    </Badge>
                    <h3 className="text-3xl font-heading font-bold mb-6">{caseStudy.client}</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-accent">Challenge</h4>
                        <p className="text-muted-foreground">{caseStudy.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-accent">Solution</h4>
                        <p className="text-muted-foreground">{caseStudy.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-accent">Timeline</h4>
                        <Badge variant="secondary">{caseStudy.duration}</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-6 text-accent text-xl">Results Achieved</h4>
                    <div className="grid grid-cols-2 gap-6">
                      {caseStudy.results.map((result, index) => (
                        <div key={index} className="text-center">
                          <div className="text-3xl font-bold text-accent mb-2">
                            {result.metric.includes('%') ? (
                              <AnimatedCounter value={parseInt(result.metric)} suffix="%" />
                            ) : result.metric.includes('+') ? (
                              <AnimatedCounter value={parseInt(result.metric)} suffix="+" />
                            ) : (
                              result.metric
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{result.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </RevealOnScroll>
          </div>
        </section>

        {/* SEO Tools */}
        <section className="py-24 px-6">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Professional <span className="text-accent">SEO Tools</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We use industry-leading tools and platforms to deliver comprehensive SEO insights and results.
                </p>
              </div>
            </RevealOnScroll>

            <StaggerReveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {tools.map((tool, index) => (
                  <Card key={index} className="p-6 text-center bg-background/50 hover:bg-accent/5 transition-all duration-300 group">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {tool.icon}
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                      {tool.name}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {tool.category}
                    </Badge>
                  </Card>
                ))}
            </StaggerReveal>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-6 bg-muted/20">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Our SEO <span className="text-accent">Process</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A proven methodology that delivers consistent, long-term SEO success for your business.
                </p>
              </div>
            </RevealOnScroll>

            <div className="space-y-16">
              {seoProcess.map((step, index) => (
                <RevealOnScroll key={index} delay={index * 0.1}>
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent/80 rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl mb-4 relative">
                        {step.step}
                        <div className="absolute inset-0 bg-accent/30 rounded-full animate-ping"></div>
                      </div>
                      <Badge variant="outline">{step.duration}</Badge>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold mb-4">{step.title}</h3>
                      <p className="text-muted-foreground text-lg mb-6">{step.description}</p>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-accent">Deliverables:</h4>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((deliverable, deliverableIndex) => (
                            <Badge key={deliverableIndex} variant="secondary">
                              {deliverable}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 px-6">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  SEO <span className="text-accent">Pricing</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Choose an SEO package that fits your business size and growth objectives. All plans include detailed reporting.
                </p>
              </div>
            </RevealOnScroll>

            <StaggerReveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => (
                  <Card key={index} className={`p-8 relative transition-all duration-300 ${tier.popular ? 'border-accent bg-accent/5 scale-105 hover:scale-110' : 'bg-background/50 hover:scale-105'}`}>
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-accent text-accent-foreground">Most Popular</Badge>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-heading font-bold mb-2">{tier.name}</h3>
                      <div className="flex items-baseline justify-center mb-2">
                        <span className="text-4xl font-bold">{tier.price}</span>
                        <span className="text-lg text-muted-foreground ml-1">{tier.period}</span>
                      </div>
                      <p className="text-muted-foreground">{tier.description}</p>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className={`w-full ${tier.popular ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : ''}`}>
                      <Link href={`/contact?service=seo&package=${tier.name.toLowerCase()}`}>
                        Get Started
                      </Link>
                    </Button>
                  </Card>
                ))}
            </StaggerReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-accent/10 to-accent/5">
          <div className="container mx-auto text-center">
            <RevealOnScroll>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Ready to <span className="text-accent">Dominate Search Results</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's create an SEO strategy that drives qualified traffic, increases conversions, and grows your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/contact?service=seo">
                    Start Ranking Today
                    <Search className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    Free SEO Audit
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