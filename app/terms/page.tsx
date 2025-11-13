import type { Metadata } from "next";
import TermsOfServiceContent from "@/components/pages/TermsOfServiceContent";

export const metadata: Metadata = {
  title: "Terms of Service - Ravana Solutions",
  description: "Read the terms and conditions for using Ravana Solutions services. Comprehensive terms covering service agreements, intellectual property, and user responsibilities.",
  keywords: ["terms of service", "terms and conditions", "service agreement", "legal terms", "user agreement", "Ravana Solutions"],
  openGraph: {
    title: "Terms of Service - Ravana Solutions",
    description: "Read the terms and conditions for using Ravana Solutions services.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service - Ravana Solutions",
    description: "Read the terms and conditions for using Ravana Solutions services.",
  },
};

export default function TermsPage() {
  return <TermsOfServiceContent />;
}