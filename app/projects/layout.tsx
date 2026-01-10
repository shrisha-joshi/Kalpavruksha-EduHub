import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable Academic Projects | Minor & Major Projects | Kalpavruksha EduHub",
  description: "High-quality minor and major projects for engineering students. Library Management, E-Commerce, ML, AI projects with timely delivery and professional guidance. CSE, ISE projects at affordable prices.",
  keywords: ["minor projects", "major projects", "final year projects", "semester projects", "CSE projects", "ISE projects", "engineering projects", "project ideas", "affordable projects India", "timely delivery projects", "academic project help", "machine learning projects", "web development projects", "library management project", "ecommerce project"],
  openGraph: {
    title: "Academic Projects for Students",
    description: "Get professional, affordable projects with expert guidance",
    url: "https://kalpavrukshaedu.vercel.app/projects",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
