'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Code, Database, Globe, Cpu } from 'lucide-react';

export default function ProjectsPage() {
    // Placeholder function for opening Google Form
    const openProjectForm = (type: string) => {
        // Replace with actual Google Form URL in future
        window.open('https://forms.google.com', '_blank');
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-background">
             <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary">Academic Projects</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Turn your ideas into reality. We provide <strong className="text-foreground">high-quality</strong> and <strong className="text-foreground">very affordable</strong> projects <strong className="text-foreground">within your timeline</strong>. Complete guidance, code, and documentation for both Minor and Major university projects.
                    </p>
                </div>

                <Tabs defaultValue="minor" className="w-full">
                    <div className="flex justify-center mb-12">
                        <TabsList className="grid w-full max-w-md grid-cols-2 bg-secondary">
                            <TabsTrigger value="minor">Minor Projects</TabsTrigger>
                            <TabsTrigger value="major">Major Projects</TabsTrigger>
                        </TabsList>
                    </div>

                    {['minor', 'major'].map((type) => (
                        <TabsContent key={type} value={type} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Example Project Cards */}
                                {[1, 2, 3].map((i) => (
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
                                                    {type === 'minor' ? 'Library Management System' : 'AI-Powered Healthcare Bot'}
                                                </CardTitle>
                                                <CardDescription>
                                                    {type === 'minor' 
                                                        ? 'A complete solution for managing books, users, and borrowing history.' 
                                                        : 'Advanced machine learning model for preliminary diagnosis and patient assistance.'}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="flex-grow">
                                                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                                                    <span className="bg-secondary px-2 py-1 rounded">Next.js</span>
                                                    <span className="bg-secondary px-2 py-1 rounded">MongoDB</span>
                                                    <span className="bg-secondary px-2 py-1 rounded">Python</span>
                                                </div>
                                            </CardContent>
                                            <CardFooter>
                                                <Button 
                                                    className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20"
                                                    onClick={() => openProjectForm(type)}
                                                >
                                                    Get Information <ArrowRight className="ml-2 h-4 w-4" />
                                                </Button>
                                            </CardFooter>
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
                                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-accent min-w-[200px]" onClick={() => openProjectForm('custom')}>
                                        Apply Now
                                    </Button>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    ))}
                </Tabs>
             </div>
        </div>
    );
}
