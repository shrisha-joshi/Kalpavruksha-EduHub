'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, BookOpen, Users, Loader2 } from 'lucide-react';

type ClassData = {
  _id: string;
  name: string;
  status: 'ongoing' | 'upcoming';
  schedule: string;
  time: string;
  university: string;
  college?: string;
  branch: string;
  semester: string;
};

export default function ClassesPage() {
    const [university, setUniversity] = useState<string>("");
    const [college, setCollege] = useState<string>("");
    const [branch, setBranch] = useState<string>("");
    const [classesData, setClassesData] = useState<ClassData[]>([]);
    const [loading, setLoading] = useState(true);

    // Fetch classes from API (admin portal)
    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_ADMIN_API_URL || 'http://localhost:3001';
                const response = await fetch(`${apiUrl}/api/classes`);
                const data = await response.json();
                setClassesData(data);
            } catch (error) {
                console.error('Failed to fetch classes:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchClasses();
        
        // Poll for updates every 5 seconds
        const interval = setInterval(fetchClasses, 5000);
        return () => clearInterval(interval);
    }, []);

    // Filter classes based on selections
    const filteredClasses = useMemo(() => {
        return classesData.filter(cls => {
            // If no filters selected, show all
            if (!university && !college && !branch) return true;
            
            if (university && cls.university !== university) return false;
            if (university === 'autonomous' && college && cls.college !== college) return false;
            if (branch && cls.branch !== branch) return false;
            return true;
        });
    }, [classesData, university, college, branch]);

    // Reset dependent filters when parent changes
    const handleUniversityChange = (value: string) => {
        setUniversity(value);
        setCollege("");
        setBranch("");
    };

    const handleCollegeChange = (value: string) => {
        setCollege(value);
    };

    // Placeholder for Google Form
    const openBookingForm = (classId: string) => {
        window.open('https://forms.google.com', '_blank');
    };

    const openRequestForm = () => {
        window.open('https://forms.google.com', '_blank');
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-background">
            <div className="container mx-auto space-y-12">
                
                {/* Header & Filters */}
                <div className="space-y-8">
                     <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary">Extra Classes</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Master your subjects with expert guidance. Find ongoing classes or request new ones for your specific curriculum.
                        </p>
                    </div>

                    {loading ? (
                        <Card className="bg-card border-border p-6">
                            <div className="flex items-center justify-center py-8">
                                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                                <span className="ml-3 text-muted-foreground">Loading classes...</span>
                            </div>
                        </Card>
                    ) : (
                        <Card className="bg-card border-border p-6 shadow-lg shadow-black/50">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="university">University</Label>
                                <Select value={university} onValueChange={handleUniversityChange}>
                                    <SelectTrigger id="university">
                                        <SelectValue placeholder="Select University" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="vtu">VTU</SelectItem>
                                        <SelectItem value="autonomous">Autonomous</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {university === 'autonomous' && (
                                <motion.div 
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="space-y-2"
                                >
                                    <Label htmlFor="college">College</Label>
                                    <Select value={college} onValueChange={handleCollegeChange}>
                                        <SelectTrigger id="college">
                                            <SelectValue placeholder="Select College" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="bms">BMS College of Engineering</SelectItem>
                                            <SelectItem value="rv">RV College of Engineering</SelectItem>
                                            <SelectItem value="ambedkar">Dr. Ambedkar Institute of Technology</SelectItem>
                                            <SelectItem value="other">Other (Specify in Form)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </motion.div>
                            )}

                            <div className="space-y-2">
                                <Label htmlFor="branch">Branch</Label>
                                <Select value={branch} onValueChange={setBranch}>
                                    <SelectTrigger id="branch">
                                        <SelectValue placeholder="Select Branch" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="cse">Computer Science (CSE)</SelectItem>
                                        <SelectItem value="ece">Electronics & Comm (ECE)</SelectItem>
                                        <SelectItem value="eee">Electrical (EEE)</SelectItem>
                                        <SelectItem value="mech">Mechanical</SelectItem>
                                        <SelectItem value="civil">Civil</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        {(university || college || branch) && (
                            <div className="flex justify-end mt-4">
                                <Button 
                                    variant="outline" 
                                    onClick={() => {
                                        setUniversity("");
                                        setCollege("");
                                        setBranch("");
                                    }}
                                >
                                    Clear Filters
                                </Button>
                            </div>
                        )}
                    </Card>
                    )}
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Ongoing Classes */}
                    <div className="lg:col-span-2 space-y-8">
                         <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-foreground flex items-center">
                                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                                Ongoing & Upcoming Classes
                                {(university || branch) && (
                                    <Badge variant="outline" className="ml-4 text-xs">{filteredClasses.length} classes found</Badge>
                                )}
                            </h2>
                            
                            <div className="grid gap-6">
                                {filteredClasses.length === 0 ? (
                                    <Card className="bg-secondary/10 border-dashed border-2">
                                        <CardContent className="p-12 text-center">
                                            <BookOpen className="w-12 h-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                                            <p className="text-muted-foreground text-lg">No classes found for your selection.</p>
                                            <p className="text-sm text-muted-foreground mt-2">Try different filters or request a new class below.</p>
                                        </CardContent>
                                    </Card>
                                ) : (
                                    filteredClasses.map((cls) => (
                                        <Card key={cls._id} className={`hover:bg-secondary/40 transition-colors border-l-4 ${cls.status === 'ongoing' ? 'bg-secondary/20 border-l-primary/50' : 'bg-secondary/10 border-l-orange-500/50'}`}>
                                            <CardContent className="p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                                                <div className="space-y-2">
                                                    <Badge className={cls.status === 'ongoing' ? 'bg-green-900/50 text-green-400 hover:bg-green-900/70 border-green-800' : 'bg-orange-900/50 text-orange-400 hover:bg-orange-900/70 border-orange-800'}>
                                                        {cls.status === 'ongoing' ? 'Ongoing' : 'Starting Soon'}
                                                    </Badge>
                                                    <h3 className="text-xl font-bold text-foreground">{cls.name}</h3>
                                                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                                        <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {cls.schedule}</span>
                                                        <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {cls.time}</span>
                                                        <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> {cls.university.toUpperCase()} / {cls.semester} Sem</span>
                                                    </div>
                                                </div>
                                                <Button 
                                                    onClick={() => openBookingForm(cls._id)} 
                                                    className={cls.status === 'ongoing' ? 'bg-primary hover:bg-accent text-primary-foreground min-w-[120px]' : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground min-w-[120px]'}
                                                    variant={cls.status === 'ongoing' ? 'default' : 'outline'}
                                                >
                                                    {cls.status === 'ongoing' ? 'Book Seat' : 'Register'}
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    ))
                                )}
                            </div>
                         </div>
                    </div>

                    {/* Request Section */}
                    <div className="space-y-6">
                        <Card className="bg-card border-primary/20 sticky top-24">
                            <CardHeader>
                                <CardTitle className="text-primary">Request a Subject</CardTitle>
                                <CardDescription>Don't see the class you need? Submit a request and we'll arrange a tutor for you.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {/* <div className="space-y-2">
                                    <Label>Subject Name</Label>
                                    <Input placeholder="e.g. Operating Systems" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Problem Area</Label>
                                    <Input placeholder="e.g. Backlog preparation" />
                                </div> */}
                                <Button className="w-full bg-primary text-primary-foreground hover:bg-accent" onClick={openRequestForm}>
                                    Submit Request
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </div>
        </div>
    );
}
