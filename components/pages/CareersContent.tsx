"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  Users, 
  Zap, 
  Globe, 
  Heart, 
  TrendingUp, 
  Code, 
  Palette, 
  BarChart3, 
  Search,
  MapPin,
  Clock,
  DollarSign,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import RevealOnScroll from "@/components/interactive/RevealOnScroll";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

const values = [
  {
    icon: Zap,
    title: "Innovation First",
    description: "We push boundaries and embrace cutting-edge technologies to deliver exceptional results for our clients."
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "We believe in the power of teamwork and create an environment where every voice is heard and valued."
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "We invest in our team's development and provide opportunities for career advancement and skill building."
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "We prioritize well-being and offer flexible arrangements to help our team thrive professionally and personally."
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Our work reaches clients worldwide, giving you the opportunity to make a meaningful impact on a global scale."
  },
  {
    icon: CheckCircle,
    title: "Excellence Driven",
    description: "We maintain the highest standards in everything we do and celebrate achievements together as a team."
  }
];

const jobOpenings = [
  {
    id: "senior-fullstack-developer",
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    salary: "$120k - $180k",
    icon: Code,
    skills: ["React", "Node.js", "TypeScript", "Next.js", "PostgreSQL", "AWS"],
    description: "Lead the development of cutting-edge SaaS applications and client projects. Work with modern technologies and shape our technical architecture.",
    responsibilities: [
      "Architect and develop scalable web applications",
      "Mentor junior developers and conduct code reviews",
      "Collaborate with design and product teams",
      "Optimize application performance and user experience",
      "Implement best practices for security and testing"
    ]
  },
  {
    id: "ui-ux-designer",
    title: "Senior UI/UX Designer",
    department: "Design",
    location: "Remote / New York",
    type: "Full-time",
    salary: "$90k - $140k",
    icon: Palette,
    skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research", "Design Systems"],
    description: "Create beautiful, intuitive user experiences that delight users and drive business results. Lead design projects from concept to implementation.",
    responsibilities: [
      "Design user interfaces for web and mobile applications",
      "Conduct user research and usability testing",
      "Create and maintain design systems",
      "Collaborate with developers to ensure design implementation",
      "Present design concepts to clients and stakeholders"
    ]
  },
  {
    id: "digital-marketing-manager",
    title: "Digital Marketing Manager",
    department: "Marketing",
    location: "Remote / Austin",
    type: "Full-time",
    salary: "$80k - $120k",
    icon: BarChart3,
    skills: ["Google Ads", "Social Media", "Content Marketing", "Analytics", "SEO/SEM"],
    description: "Drive growth for our clients through innovative digital marketing strategies. Manage campaigns across multiple channels and platforms.",
    responsibilities: [
      "Develop and execute digital marketing strategies",
      "Manage PPC campaigns and social media advertising",
      "Analyze campaign performance and optimize ROI",
      "Create content marketing strategies",
      "Collaborate with clients to understand business goals"
    ]
  },
  {
    id: "seo-specialist",
    title: "SEO Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    salary: "$60k - $90k",
    icon: Search,
    skills: ["Technical SEO", "Content Strategy", "Analytics", "Link Building", "Local SEO"],
    description: "Help our clients dominate search results through strategic SEO initiatives. Work with technical and content teams to implement comprehensive SEO strategies.",
    responsibilities: [
      "Conduct comprehensive SEO audits and analysis",
      "Develop and implement SEO strategies",
      "Optimize website content and technical elements",
      "Monitor and report on SEO performance",
      "Stay updated with search engine algorithm changes"
    ]
  },
  {
    id: "project-manager",
    title: "Senior Project Manager",
    department: "Operations",
    location: "Remote / Chicago",
    type: "Full-time",
    salary: "$75k - $110k",
    icon: Briefcase,
    skills: ["Agile", "Scrum", "Project Planning", "Client Relations", "Risk Management"],
    description: "Lead complex digital projects from inception to delivery. Ensure projects are completed on time, within scope, and exceed client expectations.",
    responsibilities: [
      "Manage multiple client projects simultaneously",
      "Coordinate cross-functional teams and resources",
      "Maintain client relationships and communications",
      "Implement project management best practices",
      "Identify and mitigate project risks"
    ]
  },
  {
    id: "business-development",
    title: "Business Development Manager",
    department: "Sales",
    location: "Remote / Los Angeles",
    type: "Full-time",
    salary: "$70k + Commission",
    icon: TrendingUp,
    skills: ["Sales", "Lead Generation", "CRM", "Negotiation", "Market Research"],
    description: "Drive business growth by identifying new opportunities and building relationships with potential clients. Help expand our market presence.",
    responsibilities: [
      "Identify and pursue new business opportunities",
      "Build and maintain client relationships",
      "Develop sales strategies and proposals",
      "Attend industry events and networking functions",
      "Collaborate with delivery teams on client solutions"
    ]
  }
];

const benefits = [
  "🏥 Comprehensive health, dental, and vision insurance",
  "💰 Competitive salary with performance bonuses",
  "🏖️ Unlimited PTO and flexible work arrangements",
  "💻 Top-tier equipment and home office stipend",
  "📚 $3,000 annual learning and development budget",
  "🎯 Stock options and profit sharing",
  "🌍 Annual team retreats and company events",
  "⚡ High-impact projects with industry leaders",
  "🚀 Fast-track career growth opportunities",
  "🤝 Collaborative and inclusive culture"
];

export default function CareersContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
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
                <Briefcase className="w-10 h-10 text-accent" />
              </motion.div>
              
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
              >
                Build the <span className="text-accent">Future</span> With Us
              </motion.h1>
              
              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8"
              >
                Join our team of exceptional digital innovators. We're building the future of digital experiences and looking for talented individuals who share our passion for excellence.
              </motion.p>
              
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
                >
                  <Link href="#openings">
                    View Open Positions
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-border hover:bg-muted font-semibold px-8"
                >
                  <Link href="#culture">
                    Learn About Our Culture
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Company Values */}
      <section id="culture" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <RevealOnScroll>
            <motion.div
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                Our <span className="text-accent">Values</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We've built a culture that attracts top talent and empowers everyone to do their best work.
              </p>
            </motion.div>
          </RevealOnScroll>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <RevealOnScroll key={index}>
                <motion.div
                  variants={fadeInUp}
                  className="bg-card border border-border rounded-xl p-8 hover:bg-card/80 transition-colors duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-xl mb-6">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <RevealOnScroll>
            <motion.div
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                Amazing <span className="text-accent">Benefits</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We take care of our team so they can focus on creating exceptional work.
              </p>
            </motion.div>
          </RevealOnScroll>
          
          <RevealOnScroll>
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center space-x-3 p-4 bg-background/50 rounded-lg"
                >
                  <span className="text-lg">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <RevealOnScroll>
            <motion.div
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                Open <span className="text-accent">Positions</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join our growing team and help shape the future of digital experiences.
              </p>
            </motion.div>
          </RevealOnScroll>
          
          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <RevealOnScroll key={job.id}>
                <motion.div
                  variants={fadeInUp}
                  className="bg-card border border-border rounded-xl p-8 hover:bg-card/80 transition-all duration-300 group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-xl">
                        <job.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="secondary" className="text-xs">
                            <MapPin className="w-3 h-3 mr-1" />
                            {job.location}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            {job.type}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            <DollarSign className="w-3 h-3 mr-1" />
                            {job.salary}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {job.description}
                        </p>
                      </div>
                    </div>
                    
                    <Button
                      asChild
                      className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold whitespace-nowrap group-hover:scale-105 transition-transform duration-200"
                    >
                      <Link href="/contact">
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-3 text-accent">Required Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-accent">Key Responsibilities</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {job.responsibilities.slice(0, 3).map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                Don't See Your Perfect Role?
              </motion.h2>
              
              <motion.p
                variants={fadeInUp}
                className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              >
                We're always looking for exceptional talent. Send us your resume and tell us how you'd like to contribute to our mission.
              </motion.p>
              
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
                >
                  <Link href="/contact">
                    Send Your Resume
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-border hover:bg-muted font-semibold px-8"
                >
                  <Link href="/about">
                    Learn More About Us
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