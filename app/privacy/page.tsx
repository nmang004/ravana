import type { Metadata } from "next";
import PrivacyPolicyContent from "@/components/pages/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy - Ravana Solutions",
  description: "Learn how Ravana Solutions protects your privacy and handles your personal information. Comprehensive privacy policy covering data collection, usage, and your rights.",
  keywords: ["privacy policy", "data protection", "GDPR", "privacy rights", "data collection", "Ravana Solutions"],
  openGraph: {
    title: "Privacy Policy - Ravana Solutions",
    description: "Learn how Ravana Solutions protects your privacy and handles your personal information.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy - Ravana Solutions",
    description: "Learn how Ravana Solutions protects your privacy and handles your personal information.",
  },
};

export default function PrivacyPage() {
  return <PrivacyPolicyContent />;
}