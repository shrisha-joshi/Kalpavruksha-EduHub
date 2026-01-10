'use client';

import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code } from 'lucide-react';
import { StructuredData } from '@/components/seo/StructuredData';

export default function ProjectsPage() {
    const openProjectForm = () => {
        window.open('https://forms.google.com', '_blank');
    };

    const minorProjects = [
        {
            title: 'Library Management System',
            description: 'A complete solution for managing books, users, and borrowing history with an intuitive interface.',
            tech: ['Next.js', 'MongoDB', 'Node.js']
        },
        {
            title: 'E-Commerce Website',
            description: 'Full-featured online shopping platform with cart, payment integration, and admin dashboard.',
            tech: ['MongoDB', 'Express', 'React', 'Node.js']
        },
        {
            title: 'Railway Crack Detection',
            description: 'AI-powered system detecting railway track cracks using computer vision for enhanced safety.',
            tech: ['Raspberry Pi 5', 'YOLOv5', 'Python', 'ML']
        }
    ];

    const majorProjects = [
        {
            title: 'Stock Price Prediction',
            description: 'Machine learning model predicting stock trends with real-time data analysis and visualization.',
            tech: ['Machine Learning', 'React', 'MongoDB', 'Python']
        },
        {
            title: 'Chronic Kidney Disease Detection',
            description: 'ML-based model analyzing medical data for early CKD detection, enabling timely diagnosis and treatment.',
            tech: ['Machine Learning', 'Python', 'TensorFlow', 'Flask']
        },
        {
            title: 'Collision Detection & Landslide Prediction',
            description: 'Intelligent system using sensors and data analysis to detect collisions and predict landslides with early warnings.',
            tech: ['IoT', 'Machine Learning', 'Python', 'Sensors']
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-background">
             {/* SEO Structured Data */}
             <StructuredData 
                type="service" 
                data={{
                    serviceType: 'Academic Project Development',
                    name: 'Academic Projects for Engineering Students',
                    description: 'Professional minor and major project development for CSE, ISE, ECE students with timely delivery',
                }}
             />
             
             <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary">Affordable Academic Projects - Minor & Major Projects for Engineering Students</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Get <strong className="text-foreground">high-quality</strong> and <strong className="text-foreground">affordable</strong> minor and major projects for CSE, ISE, ECE students. Professional guidance, complete code, documentation, and <strong className="text-foreground">timely delivery guaranteed</strong>. Library Management, E-Commerce, ML, AI, IoT projects available.
                    </p>
                </div>

                <Tabs defaultValue="minor" className="w-full">
                    <div className="flex justify-center mb-12">
                        <TabsList className="grid w-full max-w-md grid-cols-2 bg-secondary">
                            <TabsTrigger value="minor">Minor Projects</TabsTrigger>
                            <TabsTrigger value="major">Major Projects</TabsTrigger>
                        </TabsList>
                    </div>

                    {['minor', 'major'].map((type) => {
                        const projects = type === 'minor' ? minorProjects : majorProjects;
                        return (
                            <TabsContent key={type} value={type} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {projects.map((project, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <Card className="bg-card border-border hover:border-primary/50 transition-colors h-full flex flex-col">
                                                <CardHeader>
                                                    <div className="flex justify-between items-start mb-2">
                                                        <Badge variant="outline" className="border-primary text-primary capitalize">{type} Project</Badge>
                                                        <Code className="text-muted-foreground h-5 w-5" />
                                                    </div>
                                                    <CardTitle className="text-xl text-foreground">
                                                        {project.title}
                                                    </CardTitle>
                                                    <CardDescription>
                                                        {project.description}
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent className="flex-grow">
                                                    <div className="flex flex-wrap gap-2 text-xs">
                                                        {project.tech.map((tech, idx) => (
                                                            <span key={idx} className="bg-secondary text-foreground px-2 py-1 rounded">
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>

                                <Card className="bg-gradient-to-r from-primary/10 to-transparent border-primary/20 mt-12">
                                    <CardContent className="flex flex-col md:flex-row items-center justify-between p-8 gap-6">
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-bold text-primary">Need a Custom Project?</h3>
                                            <p className="text-muted-foreground">
                                                Fill out our requirement form and our team will get back to you with a tailored proposal.
                                            </p>
                                        </div>
                                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-accent min-w-[200px]" onClick={openProjectForm}>
                                            Apply Now
                                        </Button>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        );
                    })}
                </Tabs>
             </div>
        </div>
    );
}
