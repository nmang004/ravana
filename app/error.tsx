'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-12 h-12 text-accent" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
          Something Went <span className="text-accent">Wrong</span>
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          We encountered an unexpected error. Our team has been notified and is
          working to fix this issue.
        </p>

        <Card className="p-6 mb-8 bg-muted/20 border-border">
          <p className="text-sm text-muted-foreground font-mono break-all">
            {error.message || 'An unexpected error occurred'}
          </p>
          {error.digest && (
            <p className="text-xs text-muted-foreground mt-2">
              Error ID: {error.digest}
            </p>
          )}
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={reset}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">
            If this problem persists, please contact us:
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
        </div>
      </div>
    </div>
  );
}
