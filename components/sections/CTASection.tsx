import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import RevealOnScroll from "@/components/interactive/RevealOnScroll";
import { scaleIn } from "@/lib/animations/variants";

export default function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <RevealOnScroll variants={scaleIn}>
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-12 md:p-16 text-center border border-accent/20 shadow-lg">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Ready to Build Something{" "}
              <span className="text-accent">Extraordinary?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Let's discuss your project and turn your vision into reality. 
              We're here to help you succeed in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold group"
              >
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-accent/20 hover:bg-accent/10 font-semibold group"
              >
                <Link href="/contact?type=consultation">
                  <Calendar className="mr-2 w-4 h-4" />
                  Book a Consultation
                </Link>
              </Button>
            </div>
            
            <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Free consultation
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                No commitment required
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                24-hour response time
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}