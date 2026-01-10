import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Study Resources | VTU Notes, PYQ, Syllabus | Kalpavruksha EduHub",
  description: "Download free VTU notes, previous year questions (PYQ), handwritten notes, syllabus for 2018, 2021, 2022, 2025 schemes. All branches - CSE, ISE, ECE, Mechanical, Civil. Get study materials instantly.",
  keywords: ["VTU notes", "university notes download", "PYQ papers", "previous year questions", "semester notes", "engineering notes PDF", "handwritten notes", "syllabus download", "important questions", "study material free", "2018 scheme notes", "2021 scheme notes", "2022 scheme notes", "2025 scheme notes", "VTU CSE notes", "VTU ISE notes", "VTU ECE notes", "engineering study material"],
  openGraph: {
    title: "Free VTU Notes & Study Materials",
    description: "Download notes, PYQ, and study materials for all VTU schemes and branches",
    url: "https://kalpavrukshaedu.vercel.app/resources",
    type: "website",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
