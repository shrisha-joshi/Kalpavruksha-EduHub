import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get Academic Help | Kalpavruksha EduHub",
  description: "Contact Kalpavruksha EduHub for academic projects, study materials, classes, and student support. Quick response guaranteed. Reach us for VTU projects and notes.",
  keywords: ["contact educational services", "project inquiry", "get academic help", "student support contact", "VTU project help", "academic consultation"],
  openGraph: {
    title: "Contact Kalpavruksha EduHub",
    description: "Get in touch for projects, notes, and academic support",
    url: "https://kalpavrukshaedu.vercel.app/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
