import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Kalpavruksha EduHub",
  description: "Get answers to common questions about VTU notes, projects, pricing, delivery time, and academic support. Learn how we help university students succeed.",
  keywords: ["VTU FAQ", "project questions", "notes download help", "academic project pricing", "delivery time", "student help"],
  openGraph: {
    title: "Frequently Asked Questions",
    description: "Answers to common questions about our services",
    url: "https://kalpavrukshaedu.vercel.app/faq",
    type: "website",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
