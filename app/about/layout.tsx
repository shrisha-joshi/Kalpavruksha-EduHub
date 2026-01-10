import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Professional Educational Services | Kalpavruksha EduHub",
  description: "Learn about Kalpavruksha EduHub - providing quality education, projects, and resources to university students with professional guidance. Meet our expert team.",
  keywords: ["educational services", "student support", "project consultancy", "academic help", "professional guidance", "education company"],
  openGraph: {
    title: "About Kalpavruksha EduHub",
    description: "Professional educational services and student support",
    url: "https://kalpavrukshaedu.vercel.app/about",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
