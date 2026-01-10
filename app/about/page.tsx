'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AboutPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-background">
      <div className="container mx-auto space-y-20">
        
        {/* Mission & Vision Section */}
        <div className="text-center space-y-6">
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold font-serif text-primary"
            >
                About Kalpavruksha EduHub
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
                Like the divine wish-fulfilling tree, we exist to nurture educational aspirations and turn academic potential into reality.
            </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <Card className="h-full bg-card/50 border-primary/20 hover:border-primary/50 transition-colors">
                    <CardContent className="p-8 space-y-4">
                        <h2 className="text-3xl font-serif font-bold text-accent">Our Mission</h2>
                        <p className="text-gray-300 leading-relaxed">
                            To empower university students by providing accessible, high - quality resources, project guidance, and supplemental learning opportunities. We strive to bridge the gap between academic requirements and industry standards.
                        </p>
                    </CardContent>
                </Card>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <Card className="h-full bg-card/50 border-primary/20 hover:border-primary/50 transition-colors">
                    <CardContent className="p-8 space-y-4">
                        <h2 className="text-3xl font-serif font-bold text-accent">Our Vision</h2>
                        <p className="text-gray-300 leading-relaxed">
                            To become the leading academic support ecosystem where every student's educational wish — be it a complex project, understanding a tough subject, or career guidance — is fulfilled efficiently and ethically.
                        </p>
                    </CardContent>
                </Card>
            </motion.div>
        </div>

        {/* Team Section */}
        <div className="space-y-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-white">Meet Our Leadership</h2>
            
            <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                {[
                    { role: "CEO & Co-Founder", name: "Shreekar Kulkarni", message: "Kalpavruksha EduHub exists to give students clarity, direction, and reliable academic support where it truly matters. Our focus is on building competence, confidence, and outcomes—not shortcuts." },
                    { role: "COO & Co-Founder", name: "Susheel Kulkarni", message: "We operate with discipline and intent, ensuring every project, class, and resource delivers real value to students. Consistency, quality, and trust guide everything we build." },
                    // { role: "CTO", name: "Chief Technology Officer", message: "Building the technology that powers your learning journey." }
                ].map((member, index) => (
                    <motion.div key={index} variants={item}>
                        <Card className="bg-secondary/30 border-none overflow-hidden group">
                            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-2 border border-primary/30 group-hover:scale-105 transition-transform">
                                    <Avatar className="w-20 h-20">
                                        <AvatarImage src="" />
                                        <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
                                            {member.role}
                                        </AvatarFallback>
                                    </Avatar>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary">{member.role}</h3>
                                    <p className="text-sm text-muted-foreground">{member.name}</p>
                                </div>
                                <blockquote className="text-gray-400 italic text-sm border-t border-border pt-4 w-full">
                                    "{member.message}"
                                </blockquote>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </div>
    </div>
  );
}
