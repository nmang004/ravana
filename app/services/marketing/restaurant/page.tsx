import { Metadata } from "next";
import { Utensils, Star, MapPin, Users, Smartphone, Camera, TrendingUp, Check, ChefHat, Heart, Calendar, MessageSquare, Globe, Award, ArrowRight } from "lucide-react";
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
    icon: MapPin,
    title: "Local SEO Dominance",
    description: "Position your restaurant as the top choice for local diners with powerful SEO strategies.",
    details: ["Google Business Profile Optimization", "Local Citation Building", "Location-Based Keywords", "Review Management"],
    highlight: "Get found first"
  },
  {
    icon: Globe,
    title: "Custom Website & Online Ordering",
    description: "Commission-free online ordering system that keeps 100% of your profits.",
    details: ["Mobile-Responsive Design", "Zero Commission Ordering", "Menu Management System", "Customer Data Ownership"],
    highlight: "Keep your profits"
  },
  {
    icon: Camera,
    title: "Visual Content Creation",
    description: "Professional photography and videography that captures the heart of your restaurant.",
    details: ["Food Photography", "Restaurant Videography", "Social Media Content", "Menu Photography"],
    highlight: "Own your content"
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "Build a loyal following with engaging content that drives foot traffic.",
    details: ["Instagram Strategy", "Facebook Marketing", "Content Calendar", "Community Management"],
    highlight: "Build loyalty"
  },
  {
    icon: Star,
    title: "Reputation Management",
    description: "Turn every review into an opportunity to showcase your commitment to excellence.",
    details: ["Review Generation", "Response Management", "Rating Improvement", "Crisis Management"],
    highlight: "5-star reputation"
  },
  {
    icon: Heart,
    title: "Customer Loyalty Programs",
    description: "Convert one-time diners into lifetime customers with strategic loyalty programs.",
    details: ["Digital Loyalty Cards", "SMS Marketing", "Email Campaigns", "Birthday Clubs"],
    highlight: "Increase retention"
  }
];

const results = [
  {
    metric: "650%",
    description: "Average Increase in Online Orders",
    icon: TrendingUp,
    detail: "Within 6 months"
  },
  {
    metric: "45%",
    description: "Customer Retention Rate Increase",
    icon: Heart,
    detail: "Through loyalty programs"
  },
  {
    metric: "$90K",
    description: "Monthly Online Revenue",
    icon: ChefHat,
    detail: "Up from $12K"
  },
  {
    metric: "89%",
    description: "Mobile Traffic Conversion",
    icon: Smartphone,
    detail: "Optimized for diners"
  }
];

const process = [
  {
    step: 1,
    title: "Discovery & Strategy",
    description: "We analyze your market, competition, and unique value proposition to craft a tailored marketing strategy.",
    duration: "Week 1",
    icon: MessageSquare
  },
  {
    step: 2,
    title: "Foundation Building",
    description: "Optimize your online presence, set up tracking systems, and create your digital marketing infrastructure.",
    duration: "Week 2-3",
    icon: Globe
  },
  {
    step: 3,
    title: "Content & Campaigns",
    description: "Launch targeted campaigns, create engaging content, and implement your custom loyalty program.",
    duration: "Week 4-6",
    icon: Camera
  },
  {
    step: 4,
    title: "Growth & Optimization",
    description: "Monitor performance, optimize campaigns, and scale successful strategies for maximum ROI.",
    duration: "Ongoing",
    icon: TrendingUp
  }
];

const features = [
  { name: "Google Business Profile", status: "Essential", description: "Optimized for local search" },
  { name: "Online Ordering System", status: "Commission-Free", description: "Keep 100% of profits" },
  { name: "Email Marketing", status: "4400% ROI", description: "Highest ROI channel" },
  { name: "Social Media Presence", status: "Critical", description: "Where diners discover" },
  { name: "Review Management", status: "Trust Builder", description: "Build credibility" },
  { name: "Loyalty Programs", status: "70% Valued", description: "By repeat customers" }
];

const pricingTiers = [
  {
    name: "Foundation",
    price: "$1,500",
    period: "/month",
    description: "Perfect for new restaurants",
    features: [
      "Google Business Profile setup & optimization",
      "Basic website with online menu",
      "Social media setup (2 platforms)",
      "Monthly performance reports",
      "Review monitoring & alerts",
      "Basic local SEO"
    ]
  },
  {
    name: "Growth",
    price: "$3,500",
    period: "/month",
    description: "Ideal for expanding restaurants",
    features: [
      "Everything in Foundation",
      "Commission-free online ordering",
      "Professional content creation",
      "Email & SMS marketing",
      "Digital loyalty program",
      "Advanced local SEO",
      "Bi-weekly strategy calls"
    ],
    popular: true
  },
  {
    name: "Dominate",
    price: "$5,500",
    period: "/month",
    description: "For market leaders",
    features: [
      "Everything in Growth",
      "Multi-location management",
      "Video content production",
      "Influencer partnerships",
      "Custom mobile app",
      "Weekly performance optimization",
      "Dedicated account manager"
    ]
  }
];

export const metadata: Metadata = {
  title: "Restaurant Marketing Services - Fill Tables & Grow Revenue",
  description: "Transform your restaurant with targeted marketing strategies. Local SEO, commission-free online ordering, social media management, and loyalty programs that drive results.",
  keywords: ["restaurant marketing", "restaurant SEO", "online ordering", "restaurant social media", "local restaurant marketing", "restaurant loyalty programs"],
  openGraph: {
    title: "Restaurant Marketing Services | Ravana Digital Agency",
    description: "Transform your restaurant with targeted marketing strategies. Local SEO, commission-free online ordering, and loyalty programs that drive results.",
    type: "website",
  },
};

export default function RestaurantMarketingPage() {
  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="container mx-auto relative z-10">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <div className="flex flex-col items-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-2xl mb-4 group hover:bg-accent/20 transition-colors">
                    <Utensils className="w-10 h-10 text-accent group-hover:scale-110 transition-transform" />
                  </div>
                  <Badge className="bg-accent/10 text-accent border-accent/20">Specialized Restaurant Marketing</Badge>
                </div>
                <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                  Transform Your <span className="text-accent">Restaurant</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
                  Your restaurant is more than a business—it's where unforgettable experiences happen. 
                  Let us help you fill every table with targeted marketing that delivers measurable results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group">
                    <Link href="/contact?service=restaurant-marketing">
                      Start Growing Today
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#results">
                      See Real Results
                    </Link>
                  </Button>
                </div>
              </div>
            </RevealOnScroll>
          </div>
          
          {/* Animated Restaurant Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 text-4xl animate-bounce">🍕</div>
            <div className="absolute top-40 right-20 text-4xl animate-pulse delay-1000">🍔</div>
            <div className="absolute bottom-40 left-20 text-4xl animate-bounce delay-2000">🍝</div>
            <div className="absolute bottom-20 right-10 text-4xl animate-pulse delay-3000">🥘</div>
            <div className="absolute top-1/2 left-1/4 text-3xl animate-spin-slow">⭐</div>
            <div className="absolute top-1/3 right-1/3 text-3xl animate-pulse">❤️</div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-muted/20 to-background">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="max-w-4xl mx-auto text-center">
                <Award className="w-16 h-16 text-accent mx-auto mb-8" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Why Your Restaurant Needs a <span className="text-accent">Game-Changing</span> Marketing Strategy
                </h2>
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                  Despite your passion for food and hospitality, the reality is clear—running a restaurant isn't easy. 
                  You're dealing with endless operational tasks and rapidly evolving digital trends, leaving no room 
                  to tackle marketing challenges. That's where our expertise steps in.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="p-6 text-center bg-background/50 border-accent/20 hover:border-accent/40 transition-all">
                    <h3 className="font-semibold text-lg mb-2">Tailored Strategies</h3>
                    <p className="text-muted-foreground">Your marketing plan is as bespoke as your menu</p>
                  </Card>
                  <Card className="p-6 text-center bg-background/50 border-accent/20 hover:border-accent/40 transition-all">
                    <h3 className="font-semibold text-lg mb-2">Measurable Results</h3>
                    <p className="text-muted-foreground">Every campaign shows transparent, trackable ROI</p>
                  </Card>
                  <Card className="p-6 text-center bg-background/50 border-accent/20 hover:border-accent/40 transition-all">
                    <h3 className="font-semibold text-lg mb-2">Full Ownership</h3>
                    <p className="text-muted-foreground">The content and systems we build are yours to keep</p>
                  </Card>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Results Section */}
        <section id="results" className="py-24 px-6 bg-muted/20">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Real <span className="text-accent">Results</span> for Real Restaurants
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our proven strategies deliver measurable growth for restaurants just like yours.
                </p>
              </div>
            </RevealOnScroll>

            <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((result, index) => {
                const Icon = result.icon;
                return (
                  <Card key={index} className="p-8 text-center bg-background/50 border-accent/20 hover:border-accent/40 transition-all duration-300 group hover:scale-105">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                      <AnimatedCounter value={parseInt(result.metric)} suffix={result.metric.replace(/[0-9]/g, '')} />
                    </div>
                    <p className="text-muted-foreground font-medium mb-2">{result.description}</p>
                    <p className="text-sm text-muted-foreground/70">{result.detail}</p>
                  </Card>
                );
              })}
            </StaggerReveal>

            {/* Case Study Callout */}
            <RevealOnScroll delay={0.3}>
              <Card className="mt-12 p-8 bg-accent/5 border-accent/20">
                <div className="text-center">
                  <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Case Study</Badge>
                  <p className="text-lg mb-4">
                    A family-owned Italian restaurant switched to our commission-free system and boosted their 
                    monthly online orders from <span className="text-accent font-bold">$12,000</span> to{" "}
                    <span className="text-accent font-bold">$90,000</span> within six months.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/contact?service=restaurant-marketing">Learn How</Link>
                  </Button>
                </div>
              </Card>
            </RevealOnScroll>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-6">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  A Suite of Services <span className="text-accent">Designed for Restaurants</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We excel in creating holistic marketing strategies specifically designed to address 
                  the challenges and opportunities restaurant owners face.
                </p>
              </div>
            </RevealOnScroll>

            <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="p-8 bg-background/50 border-accent/20 hover:border-accent/40 transition-all duration-500 group hover:scale-105 relative overflow-hidden">
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="text-xs opacity-70">
                        {service.highlight}
                      </Badge>
                    </div>
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

        {/* Features Grid Section */}
        <section className="py-24 px-6 bg-muted/20">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Digital Tools That <span className="text-accent">Drive Success</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  With 89% of diners using their phones to research restaurants, your digital presence has never been more important.
                </p>
              </div>
            </RevealOnScroll>

            <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 bg-background/50 hover:bg-accent/5 transition-all duration-300 group">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold group-hover:text-accent transition-colors">
                      {feature.name}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {feature.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
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
                  Your Path to <span className="text-accent">Restaurant Success</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A proven process that transforms your restaurant's marketing from the ground up.
                </p>
              </div>
            </RevealOnScroll>

            <div className="relative">
              {/* Progress Line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-accent/20 hidden md:block"></div>
              
              <div className="space-y-12">
                {process.map((step, index) => {
                  const Icon = step.icon;
                  return (
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
                            <div className="flex items-center gap-3">
                              <Icon className="w-6 h-6 text-accent" />
                              <h3 className="text-2xl font-heading font-bold">{step.title}</h3>
                            </div>
                            <Badge variant="outline" className="self-start md:self-center mt-2 md:mt-0">
                              {step.duration}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground text-lg">{step.description}</p>
                        </div>
                      </div>
                    </RevealOnScroll>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-accent/5 to-muted/20">
          <div className="container mx-auto">
            <RevealOnScroll>
              <Card className="p-12 bg-background/50 border-accent/20 max-w-4xl mx-auto text-center">
                <Star className="w-12 h-12 text-accent mx-auto mb-6" />
                <blockquote className="text-xl md:text-2xl mb-6 italic">
                  "Thanks to the strategies implemented by Ravana, we saw a 45% increase in customer 
                  retention rates within three months. The loyalty program alone has been a game-changer for us!"
                </blockquote>
                <p className="text-muted-foreground">— Restaurant Owner, Italian Bistro</p>
              </Card>
            </RevealOnScroll>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 px-6">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Transparent, Flexible <span className="text-accent">Pricing</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Choose a package that matches your restaurant's growth goals. No hidden fees, no surprises.
                </p>
              </div>
            </RevealOnScroll>

            <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <Card key={index} className={`p-8 relative hover:scale-105 transition-transform duration-300 ${tier.popular ? 'border-accent bg-accent/5 scale-105' : 'bg-background/50'}`}>
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
                    <Link href={`/contact?service=restaurant-marketing&package=${tier.name.toLowerCase()}`}>
                      Get Started
                    </Link>
                  </Button>
                </Card>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* Benefits Summary */}
        <section className="py-24 px-6 bg-muted/20">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  What You Can <span className="text-accent">Expect</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  When you work with us, we commit to being your dedicated partner in growth.
                </p>
              </div>
            </RevealOnScroll>

            <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="p-8 text-center bg-background/50 border-accent/20 hover:border-accent/40 transition-all">
                <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold mb-3">No Hidden Fees</h3>
                <p className="text-muted-foreground">Transparent pricing ensures you know where every dollar is going</p>
              </Card>
              <Card className="p-8 text-center bg-background/50 border-accent/20 hover:border-accent/40 transition-all">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold mb-3">Content Ownership</h3>
                <p className="text-muted-foreground">You own your website, customer list, and every piece of content we create</p>
              </Card>
              <Card className="p-8 text-center bg-background/50 border-accent/20 hover:border-accent/40 transition-all">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold mb-3">Flexible Contracts</h3>
                <p className="text-muted-foreground">We don't believe in locking clients into rigid agreements</p>
              </Card>
            </StaggerReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-accent/10 to-accent/5">
          <div className="container mx-auto text-center">
            <RevealOnScroll>
              <ChefHat className="w-16 h-16 text-accent mx-auto mb-8" />
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Your Next Step Towards a <span className="text-accent">Thriving Restaurant</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Effective restaurant marketing is no longer optional—it's the key to your growth. 
                Whether you're looking to fill your tables, enhance your online presence, or build 
                enduring customer loyalty, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group">
                  <Link href="/contact?service=restaurant-marketing">
                    Get Your Free Consultation
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/portfolio">
                    View Success Stories
                  </Link>
                </Button>
              </div>
              <p className="text-lg font-semibold text-accent">
                Invest in your marketing. Transform your restaurant.
              </p>
              <p className="text-muted-foreground mt-2">
                Together, we'll create strategies that attract, engage, and retain more customers than ever before.
              </p>
            </RevealOnScroll>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}