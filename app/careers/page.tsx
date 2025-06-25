import type { Metadata } from "next";
import CareersContent from "@/components/pages/CareersContent";

export const metadata: Metadata = {
  title: "Careers - Join Ravana Digital Agency",
  description: "Join our team of exceptional digital innovators at Ravana Digital Agency. Explore exciting career opportunities in SaaS development, web design, digital marketing, and more.",
  keywords: ["careers", "jobs", "employment", "digital agency jobs", "SaaS developer", "web developer", "digital marketing", "remote work", "Ravana Digital Agency"],
  openGraph: {
    title: "Careers - Join Ravana Digital Agency",
    description: "Join our team of exceptional digital innovators. Explore exciting career opportunities in cutting-edge technology.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers - Join Ravana Digital Agency",
    description: "Join our team of exceptional digital innovators. Explore exciting career opportunities in cutting-edge technology.",
  },
};

export default function CareersPage() {
  return <CareersContent />;
}