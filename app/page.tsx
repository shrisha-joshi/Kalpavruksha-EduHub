'use client';

import { Hero } from '@/components/home/Hero';
import { GlowingCursorOrb, ParticleTrail } from '@/components/home/CursorEffects';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookOpen, Codepen, GraduationCap } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background selection:bg-primary/30">
      {/* Global Cursor Effects */}
      <GlowingCursorOrb />
      <ParticleTrail />
      
      <Navbar />
      
      <Hero />
      
      {/* What We Offer Section */}
      <section className="py-20 px-4 container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-primary mb-4">Our Offerings</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Just like the divine Kalpavruksha, we provide everything you need to flourish in your academic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                    <Codepen className="w-12 h-12 text-primary mb-4" />
                    <CardTitle className="text-2xl text-foreground">Projects</CardTitle>
                    <CardDescription>Minor & Major Projects</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="mb-6 text-muted-foreground">Expert guidance and resources for your semester projects. From ideation to execution.</p>
                    <Link href="/projects">
                        <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/10 hover:text-primary">Explore Projects</Button>
                    </Link>
                </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                    <GraduationCap className="w-12 h-12 text-primary mb-4" />
                    <CardTitle className="text-2xl text-foreground">Classes</CardTitle>
                    <CardDescription>Exams & Backlogs</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="mb-6 text-muted-foreground">Catch up on missed subjects or prepare for upcoming exams with focused sessions.</p>
                    <Link href="/classes">
                        <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/10 hover:text-primary">Find Classes</Button>
                    </Link>
                </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                    <BookOpen className="w-12 h-12 text-primary mb-4" />
                    <CardTitle className="text-2xl text-foreground">Resources</CardTitle>
                    <CardDescription>Notes & PYQs</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="mb-6 text-muted-foreground">Access a vast repository of notes, question banks, and previous year papers.</p>
                    <Link href="/resources">
                        <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/10 hover:text-primary">Access Resources</Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-20 bg-muted/20 px-4 border-y border-border/50">
        <div className="container mx-auto">
             <h2 className="text-3xl font-bold font-serif text-center text-foreground mb-12">Student Success Stories</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {[1, 2, 3].map((i) => (
                     <div key={i} className="p-6 rounded-lg bg-card border border-border">
                         <p className="italic text-muted-foreground mb-4">"Kalpavruksha EduHub helped me clear my backlog with ease. The resources were spot on!"</p>
                         <p className="font-bold text-primary">- Student {String.fromCharCode(64 + i)}</p>
                     </div>
                 ))}
             </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
