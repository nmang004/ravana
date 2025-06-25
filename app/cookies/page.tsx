import { Metadata } from "next";
import { Cookie, Shield, BarChart3, Target, Settings, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageTransition from "@/components/layout/PageTransition";
import RevealOnScroll from "@/components/interactive/RevealOnScroll";

const cookieTypes = [
  {
    icon: Shield,
    title: "Essential Cookies",
    description: "These cookies are necessary for the website to function and cannot be switched off.",
    examples: ["Session management", "Security tokens", "Authentication"],
    duration: "Session or up to 1 year",
    required: true
  },
  {
    icon: BarChart3,
    title: "Analytics Cookies",
    description: "Help us understand how visitors interact with our website by collecting anonymous information.",
    examples: ["Google Analytics", "Page views", "User behavior"],
    duration: "Up to 2 years",
    required: false
  },
  {
    icon: Target,
    title: "Marketing Cookies",
    description: "Used to track visitors across websites to display relevant advertisements.",
    examples: ["Ad targeting", "Conversion tracking", "Retargeting"],
    duration: "Up to 1 year",
    required: false
  },
  {
    icon: Settings,
    title: "Functional Cookies",
    description: "Enable enhanced functionality and personalization, such as remembering your preferences.",
    examples: ["Language preferences", "Theme settings", "Form data"],
    duration: "Up to 1 year",
    required: false
  }
];

const cookieList = [
  {
    name: "_ga",
    provider: "Google Analytics",
    purpose: "Distinguish unique users",
    duration: "2 years",
    type: "Analytics"
  },
  {
    name: "_gid",
    provider: "Google Analytics", 
    purpose: "Distinguish unique users",
    duration: "24 hours",
    type: "Analytics"
  },
  {
    name: "vercel-analytics",
    provider: "Vercel",
    purpose: "Website performance analytics",
    duration: "1 year",
    type: "Analytics"
  },
  {
    name: "session",
    provider: "Ravana Digital",
    purpose: "Maintain user session",
    duration: "Session",
    type: "Essential"
  }
];

export const metadata: Metadata = {
  title: "Cookie Policy - How We Use Cookies",
  description: "Learn about how Ravana Digital Agency uses cookies to improve your browsing experience and provide better services.",
  keywords: ["cookie policy", "privacy", "data protection", "website cookies", "analytics"],
  openGraph: {
    title: "Cookie Policy | Ravana Digital Agency",
    description: "Learn about how Ravana Digital Agency uses cookies to improve your browsing experience and provide better services.",
    type: "website",
  },
};

export default function CookiesPage() {
  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 px-6">
          <div className="container mx-auto text-center">
            <RevealOnScroll>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-2xl mb-8">
                <Cookie className="w-10 h-10 text-accent" />
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                Cookie <span className="text-accent">Policy</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
                We use cookies to enhance your browsing experience, provide personalized content, 
                and analyze our website traffic. Learn about how we use cookies and how you can control them.
              </p>
              <Badge variant="outline" className="text-sm">
                Last updated: December 2024
              </Badge>
            </RevealOnScroll>
          </div>
        </section>

        {/* What Are Cookies */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-4xl">
            <RevealOnScroll>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-3xl font-heading font-bold mb-6 text-accent">
                  What Are Cookies?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                  They are widely used to make websites work more efficiently and to provide information to the owners of the site.
                </p>
                <p className="text-muted-foreground mb-8">
                  Cookies allow us to recognize your device and store some information about your preferences or past actions 
                  to improve your experience on our website.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Types of Cookies */}
        <section className="py-12 px-6 bg-muted/20">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Types of <span className="text-accent">Cookies We Use</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We use different types of cookies for various purposes to enhance your experience on our website.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieTypes.map((cookie, index) => {
                const Icon = cookie.icon;
                return (
                  <RevealOnScroll key={index} delay={index * 0.1}>
                    <Card className="p-8 bg-background/50 border-accent/20 hover:border-accent/40 transition-all duration-300 h-full">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-heading font-bold">{cookie.title}</h3>
                            {cookie.required && (
                              <Badge variant="secondary" className="text-xs">Required</Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground mb-4">{cookie.description}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-accent">Examples:</h4>
                          <ul className="space-y-1">
                            {cookie.examples.map((example, exampleIndex) => (
                              <li key={exampleIndex} className="text-sm text-muted-foreground flex items-center">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                                {example}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-1 text-accent">Duration:</h4>
                          <p className="text-sm text-muted-foreground">{cookie.duration}</p>
                        </div>
                      </div>
                    </Card>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
        </section>

        {/* Specific Cookies */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Specific <span className="text-accent">Cookies We Use</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Here's a detailed list of the specific cookies used on our website and their purposes.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <Card className="p-8 bg-background/50 border-accent/20">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-muted">
                        <th className="text-left py-4 px-2 font-semibold text-accent">Cookie Name</th>
                        <th className="text-left py-4 px-2 font-semibold text-accent">Provider</th>
                        <th className="text-left py-4 px-2 font-semibold text-accent">Purpose</th>
                        <th className="text-left py-4 px-2 font-semibold text-accent">Duration</th>
                        <th className="text-left py-4 px-2 font-semibold text-accent">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cookieList.map((cookie, index) => (
                        <tr key={index} className="border-b border-muted/50">
                          <td className="py-4 px-2 font-mono text-sm">{cookie.name}</td>
                          <td className="py-4 px-2 text-sm text-muted-foreground">{cookie.provider}</td>
                          <td className="py-4 px-2 text-sm text-muted-foreground">{cookie.purpose}</td>
                          <td className="py-4 px-2 text-sm text-muted-foreground">{cookie.duration}</td>
                          <td className="py-4 px-2">
                            <Badge variant="outline" className="text-xs">
                              {cookie.type}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </RevealOnScroll>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className="py-12 px-6 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <RevealOnScroll>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-3xl font-heading font-bold mb-6 text-accent">
                  Managing Your Cookie Preferences
                </h2>
                
                <h3 className="text-xl font-semibold mb-4">Browser Settings</h3>
                <p className="text-muted-foreground mb-6">
                  You can control and manage cookies in various ways. Most web browsers automatically accept cookies, 
                  but you can usually modify your browser settings to decline cookies if you prefer.
                </p>

                <h3 className="text-xl font-semibold mb-4">Disabling Cookies</h3>
                <p className="text-muted-foreground mb-6">
                  If you choose to disable cookies, some features of our website may not function properly. 
                  Essential cookies cannot be disabled as they are necessary for the website to function.
                </p>

                <h3 className="text-xl font-semibold mb-4">Third-Party Cookies</h3>
                <p className="text-muted-foreground mb-6">
                  We use Google Analytics to analyze website usage. You can opt out of Google Analytics by installing 
                  the Google Analytics opt-out browser add-on available at{" "}
                  <a href="https://tools.google.com/dlpage/gaoptout" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                    https://tools.google.com/dlpage/gaoptout
                  </a>
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Contact */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-4xl">
            <RevealOnScroll>
              <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 text-center">
                <Eye className="w-12 h-12 text-accent mx-auto mb-6" />
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Questions About Our Cookie Policy?
                </h2>
                <p className="text-muted-foreground mb-6">
                  If you have any questions about how we use cookies or this policy, 
                  please don't hesitate to contact us.
                </p>
                <p className="text-sm text-muted-foreground">
                  Email us at{" "}
                  <a href="mailto:privacy@ravanadigital.com" className="text-accent hover:underline">
                    privacy@ravanadigital.com
                  </a>
                </p>
              </Card>
            </RevealOnScroll>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}