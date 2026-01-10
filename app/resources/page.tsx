'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Download, Eye, Loader2 } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { StructuredData } from '@/components/seo/StructuredData';

type Resource = {
  _id: string;
  name: string;
  university: string;
  scheme?: string;
  college?: string;
  branch?: string;
  semester?: string;
  subjectCode?: string;
  type: 'notes' | 'pyq' | 'handwritten' | 'syllabus' | 'important-questions';
  fileUrl: string;
  uploadedAt: Date;
};

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    university: '',
    scheme: '',
    branch: '',
    semester: '',
    type: '',
  });

  useEffect(() => {
    fetchResources();
    const interval = setInterval(fetchResources, 10000); // Refresh every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const fetchResources = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_ADMIN_API_URL || 'http://localhost:3001';
      const response = await fetch(`${apiUrl}/api/resources`);
      const data = await response.json();
      setResources(data);
    } catch (error) {
      // Error fetching resources - could add toast notification here
    } finally {
      setLoading(false);
    }
  };

  const filteredResources = resources.filter((resource) => {
    if (filters.university && resource.university !== filters.university) return false;
    if (filters.scheme && resource.scheme !== filters.scheme) return false;
    if (filters.branch && resource.branch !== filters.branch) return false;
    if (filters.semester && resource.semester !== filters.semester) return false;
    if (filters.type && resource.type !== filters.type) return false;
    return true;
  });

  const handleView = (url: string) => {
    // Convert Google Drive links to preview mode
    let viewUrl = url;
    if (url.includes('drive.google.com')) {
      const fileId = url.match(/\/d\/([a-zA-Z0-9_-]+)/)?.[1];
      if (fileId) {
        viewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
      }
    }
    window.open(viewUrl, '_blank');
  };

  const handleDownload = (url: string, name: string) => {
    // Convert Google Drive links to download mode
    let downloadUrl = url;
    if (url.includes('drive.google.com')) {
      const fileId = url.match(/\/d\/([a-zA-Z0-9_-]+)/)?.[1];
      if (fileId) {
        downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      }
    }
    
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = name;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const getTypeBadge = (type: string) => {
    const config = {
      notes: { label: 'Notes', color: 'bg-blue-500' },
      pyq: { label: 'PYQ', color: 'bg-purple-500' },
      handwritten: { label: 'Handwritten', color: 'bg-green-500' },
      syllabus: { label: 'Syllabus', color: 'bg-orange-500' },
      'important-questions': { label: 'Important Q', color: 'bg-red-500' },
    };
    const { label, color } = config[type as keyof typeof config] || config.notes;
    return <Badge className={`${color} text-white`}>{label}</Badge>;
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-background">
      {/* SEO Structured Data */}
      <StructuredData 
        type="course" 
        data={{
          name: 'VTU Study Materials and Resources',
          description: 'Free downloadable study materials, notes, PYQ, and syllabus for all VTU schemes (2018, 2021, 2022, 2025)',
        }}
      />
      
      <div className="container mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary">Free VTU Study Resources - Notes, PYQ, Syllabus for All Schemes</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download free VTU notes, previous year questions (PYQ), handwritten notes, and syllabus for 2018, 2021, 2022, 2025 schemes. All branches - CSE, ISE, ECE, Mechanical, Civil.
          </p>
          <Button 
            size="lg"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdxhC7xX1arSewbXVTcNM-JP4OQO4MXrIHk8YJdZQY43lZW9A/viewform?usp=header', '_blank')}
            className="mt-4"
          >
            📤 Contribute Your Resources
          </Button>
          <p className="text-sm text-muted-foreground">
            Have notes or materials to share? Help your fellow students!
          </p>
        </div>

        {/* Filters */}
        <Card className="bg-card border-border p-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="space-y-2">
              <Label htmlFor="filter-university">University</Label>
              <Select value={filters.university || undefined} onValueChange={(value) => setFilters({ ...filters, university: value })}>
                <SelectTrigger id="filter-university">
                  <SelectValue placeholder="All Universities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vtu">VTU</SelectItem>
                  <SelectItem value="autonomous">Autonomous</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {filters.university === 'vtu' && (
              <div className="space-y-2">
                <Label htmlFor="filter-scheme">Scheme</Label>
                <Select value={filters.scheme || undefined} onValueChange={(value) => setFilters({ ...filters, scheme: value })}>
                  <SelectTrigger id="filter-scheme">
                    <SelectValue placeholder="All Schemes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2018">2018 Scheme</SelectItem>
                    <SelectItem value="2021">2021 Scheme</SelectItem>
                    <SelectItem value="2022">2022 Scheme</SelectItem>
                    <SelectItem value="2025">2025 Scheme</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="filter-branch">Branch</Label>
              <Select value={filters.branch || undefined} onValueChange={(value) => setFilters({ ...filters, branch: value })}>
                <SelectTrigger id="filter-branch">
                  <SelectValue placeholder="All Branches" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cse">Computer Science</SelectItem>
                  <SelectItem value="ece">Electronics</SelectItem>
                  <SelectItem value="mech">Mechanical</SelectItem>
                  <SelectItem value="civil">Civil</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="filter-semester">Semester</Label>
              <Select value={filters.semester || undefined} onValueChange={(value) => setFilters({ ...filters, semester: value })}>
                <SelectTrigger id="filter-semester">
                  <SelectValue placeholder="All Semesters" />
                </SelectTrigger>
                <SelectContent>
                  {['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'].map((sem) => (
                    <SelectItem key={sem} value={sem}>{sem}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="filter-type">Type</Label>
              <Select value={filters.type || undefined} onValueChange={(value) => setFilters({ ...filters, type: value })}>
                <SelectTrigger id="filter-type">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="notes">Notes</SelectItem>
                  <SelectItem value="pyq">PYQ</SelectItem>
                  <SelectItem value="handwritten">Handwritten</SelectItem>
                  <SelectItem value="syllabus">Syllabus</SelectItem>
                  <SelectItem value="important-questions">Important Questions</SelectItem>
                  <SelectItem value="handwritten">Handwritten</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {(filters.university || filters.scheme || filters.branch || filters.semester || filters.type) && (
            <div className="mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setFilters({ university: '', scheme: '', branch: '', semester: '', type: '' })}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </Card>

        {/* Resources Grid */}
        {loading ? (
          <Card className="bg-card border-border p-12">
            <div className="flex items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <span className="ml-3 text-muted-foreground">Loading resources...</span>
            </div>
          </Card>
        ) : filteredResources.length === 0 ? (
          <Card className="bg-card border-border p-12">
            <div className="text-center space-y-4">
              <FileText className="h-16 w-16 mx-auto text-muted-foreground" />
              <h3 className="text-xl font-semibold">No resources found</h3>
              <p className="text-muted-foreground">
                {filters.university || filters.branch || filters.semester || filters.type
                  ? 'Try adjusting your filters'
                  : 'Resources will appear here once added by admin'}
              </p>
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="bg-card border-border hover:shadow-lg transition-shadow h-full flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <FileText className="h-10 w-10 text-primary" />
                      {getTypeBadge(resource.type)}
                    </div>

                    <h3 className="text-lg font-semibold mb-2 flex-1">{resource.name}</h3>

                    <div className="space-y-1 text-sm text-muted-foreground mb-4">
                      <p>🎓 {resource.university.toUpperCase()}</p>
                      {resource.scheme && <p>📋 {resource.scheme} Scheme</p>}
                      {resource.branch && <p>📚 {resource.branch.toUpperCase()}</p>}
                      {resource.semester && <p>📅 {resource.semester} Semester</p>}
                      {resource.subjectCode && <p>🔖 {resource.subjectCode}</p>}
                      {resource.college && <p>🏫 {resource.college}</p>}
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => handleView(resource.fileUrl)}
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={() => handleDownload(resource.fileUrl, resource.name)}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Info Card */}
        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 How to use:</h3>
            <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
              <li>• Click <strong>"View"</strong> to preview the PDF in your browser before downloading</li>
              <li>• Click <strong>"Download"</strong> to save the file to your device</li>
              <li>• Use filters above to find specific resources quickly</li>
              <li>• Resources are updated regularly - check back often!</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
