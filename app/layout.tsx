import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedCursor from "@/components/interactive/AnimatedCursor";
import StructuredData from "@/components/seo/StructuredData";
import { LenisProvider } from "@/context/LenisContext";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Ravana Solutions | Web Development & SEO Services",
    template: "%s | Ravana Solutions"
  },
  description: "Professional web development and SEO services in Hampton Roads. We build custom websites, web applications, and implement proven search optimization strategies.",
  keywords: ["web development", "SEO services", "Hampton Roads web design", "custom websites", "web applications", "search engine optimization", "Next.js", "React", "Virginia web development"],
  authors: [{ name: "Nicholas Mangubat" }],
  creator: "Nicholas Mangubat",
  publisher: "Ravana Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.ravanasolutions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ravanasolutions.com',
    title: 'Ravana Solutions | Web Development & SEO',
    description: 'Expert web development and SEO services in Hampton Roads. Custom websites, web applications, and strategic search optimization that deliver results.',
    siteName: 'Ravana Solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ravana Solutions - Professional Web Development & SEO Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ravana Solutions | Web Development & SEO',
    description: 'Expert web development and SEO services in Hampton Roads. Custom websites, web applications, and strategic search optimization that deliver results.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <StructuredData type="organization" />
        <StructuredData type="website" />
        <StructuredData type="localBusiness" />
      </head>
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        <LenisProvider>
          <AnimatedCursor />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}