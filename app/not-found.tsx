import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Home, Search, ArrowLeft, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  const popularPages = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: MapPin },
    { name: 'Portfolio', href: '/portfolio', icon: Search },
    { name: 'Contact', href: '/contact', icon: MapPin },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-heading font-bold text-accent opacity-20 leading-none">
            404
          </h1>
        </div>

        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 -mt-16">
          Page Not <span className="text-accent">Found</span>
        </h2>

        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been
          moved, deleted, or the URL might be incorrect.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">
              <Search className="w-5 h-5 mr-2" />
              Contact Support
            </Link>
          </Button>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-heading font-bold mb-6">
            Popular Pages
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {popularPages.map((page) => {
            const Icon = page.icon;
            return (
              <Card
                key={page.href}
                className="p-6 hover:shadow-lg transition-all duration-300 border-border hover:border-accent/50"
              >
                <Link href={page.href} className="block">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg">
                    {page.name}
                  </h4>
                </Link>
              </Card>
            );
          })}
        </div>

        <Card className="p-6 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
          <h3 className="font-heading font-semibold text-lg mb-2">
            Need Help Finding Something?
          </h3>
          <p className="text-muted-foreground mb-4">
            Our team is here to help. Contact us and we'll point you in the
            right direction.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm">
            <a
              href="mailto:nmangubat@ravanasolutions.com"
              className="text-accent hover:underline font-medium"
            >
              nmangubat@ravanasolutions.com
            </a>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <a
              href="tel:+17573940583"
              className="text-accent hover:underline font-medium"
            >
              (757) 394-0583
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}
