import { Metadata } from "next";
import { ClipboardList } from "lucide-react";
import PageTransition from "@/components/layout/PageTransition";
import RevealOnScroll from "@/components/interactive/RevealOnScroll";
import ProjectBriefForm from "@/components/forms/ProjectBriefForm";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Project Brief - Start Your Project with Ravana Solutions",
  description:
    "Complete our project brief questionnaire to help us understand your needs and provide you with an accurate proposal. Get started with your digital transformation today.",
  keywords: [
    "project brief",
    "start project",
    "project questionnaire",
    "get proposal",
    "web development quote",
    "seo quote",
    "digital agency proposal",
  ],
  openGraph: {
    title: "Project Brief - Ravana Solutions",
    description:
      "Complete our project brief to get a detailed proposal tailored to your needs.",
    type: "website",
  },
};

const whyProjectBrief = [
  {
    title: "Accurate Proposals",
    description:
      "By understanding your specific needs, we can provide a detailed and accurate project proposal with no surprises.",
  },
  {
    title: "Faster Response",
    description:
      "With comprehensive information upfront, we can prepare your proposal faster - typically within 24-48 hours.",
  },
  {
    title: "Better Planning",
    description:
      "Your input helps us assemble the right team and plan the optimal approach for your project's success.",
  },
  {
    title: "Clear Communication",
    description:
      "Starting with aligned expectations ensures smooth project execution and eliminates misunderstandings.",
  },
];

export default function ProjectBriefPage() {
  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-16 lg:py-24 px-2 md:px-6 text-center">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="flex items-center justify-center mb-6">
                <ClipboardList className="w-16 h-16 text-accent" />
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                Start Your <span className="text-accent">Project</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
                Complete our project brief questionnaire to help us understand
                your needs and goals. We'll use this information to create a
                detailed proposal tailored specifically for your project.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* Why Complete a Project Brief */}
        <section className="py-8 md:py-12 lg:py-16 px-2 md:px-6 bg-muted/20">
          <div className="container mx-auto">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
                Why Complete a Project Brief?
              </h2>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {whyProjectBrief.map((item, index) => (
                <RevealOnScroll key={index} delay={index * 0.1}>
                  <Card className="p-4 md:p-6 h-full hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-lg font-heading font-bold mb-3 text-accent">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Project Brief Form */}
        <section className="py-12 md:py-16 px-2 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <RevealOnScroll>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Tell Us About Your Project
                </h2>
                <p className="text-muted-foreground text-lg">
                  This will take about 5-10 minutes. All information is kept
                  confidential and will only be used to prepare your proposal.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <ProjectBriefForm />
            </RevealOnScroll>

            {/* Help Text */}
            <RevealOnScroll delay={0.3}>
              <Card className="mt-8 p-2 md:p-6 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Need Help?
                </h3>
                <p className="text-muted-foreground mb-4">
                  If you have questions while filling out this form or prefer
                  to discuss your project directly, we're here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 text-sm">
                  <a
                    href="mailto:nmangubat@ravanasolutions.com"
                    className="text-accent hover:underline font-medium"
                  >
                    Email us: nmangubat@ravanasolutions.com
                  </a>
                  <span className="hidden sm:inline text-muted-foreground">•</span>
                  <a
                    href="tel:+17573940583"
                    className="text-accent hover:underline font-medium"
                  >
                    Call us: (757) 394-0583
                  </a>
                  <span className="hidden sm:inline text-muted-foreground">•</span>
                  <a
                    href="https://calendly.com/nmangubat-ravanasolutions/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline font-medium"
                  >
                    Schedule a call
                  </a>
                </div>
              </Card>
            </RevealOnScroll>
          </div>
        </section>

        {/* What Happens Next */}
        <section className="py-12 md:py-16 px-2 md:px-6 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
                What Happens Next?
              </h2>
            </RevealOnScroll>

            <div className="space-y-6">
              <RevealOnScroll delay={0.1}>
                <Card className="p-2 md:p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-accent">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold mb-2">
                        We Review Your Brief
                      </h3>
                      <p className="text-muted-foreground">
                        Our team will carefully review your project brief within
                        24 hours to understand your needs and goals.
                      </p>
                    </div>
                  </div>
                </Card>
              </RevealOnScroll>

              <RevealOnScroll delay={0.2}>
                <Card className="p-2 md:p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-accent">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold mb-2">
                        Discovery Call (Optional)
                      </h3>
                      <p className="text-muted-foreground">
                        We may schedule a brief call to clarify details and
                        ensure we fully understand your vision.
                      </p>
                    </div>
                  </div>
                </Card>
              </RevealOnScroll>

              <RevealOnScroll delay={0.3}>
                <Card className="p-2 md:p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-accent">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold mb-2">
                        Receive Your Proposal
                      </h3>
                      <p className="text-muted-foreground">
                        Within 24-48 hours, you'll receive a detailed proposal
                        including scope, timeline, pricing, and next steps.
                      </p>
                    </div>
                  </div>
                </Card>
              </RevealOnScroll>

              <RevealOnScroll delay={0.4}>
                <Card className="p-2 md:p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-accent">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold mb-2">
                        Project Kickoff
                      </h3>
                      <p className="text-muted-foreground">
                        Once you approve the proposal, we'll schedule a kickoff
                        meeting and begin bringing your vision to life.
                      </p>
                    </div>
                  </div>
                </Card>
              </RevealOnScroll>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
