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
    default: "Ravana - Premium Digital Agency | SaaS Development & Web Design",
    template: "%s | Ravana Digital Agency"
  },
  description: "Premium digital agency specializing in SaaS development, web creation, digital marketing, and SEO. Transform your business with cutting-edge technology and exceptional design.",
  keywords: ["digital agency", "SaaS development", "web development", "digital marketing", "SEO services", "Next.js", "React", "premium web design"],
  authors: [{ name: "Ravana Digital Agency" }],
  creator: "Ravana Digital Agency",
  publisher: "Ravana Digital Agency",
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
    title: 'Ravana - Premium Digital Agency',
    description: 'Premium digital agency specializing in SaaS development, web creation, digital marketing, and SEO. Transform your business with cutting-edge technology.',
    siteName: 'Ravana Digital Agency',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ravana Digital Agency - Premium Web Development & Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ravana - Premium Digital Agency',
    description: 'Transform your business with cutting-edge SaaS development, web design, and digital marketing services.',
    images: ['/og-image.jpg'],
    creator: '@ravana_agency',
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