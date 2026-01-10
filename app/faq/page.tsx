'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { StructuredData } from '@/components/seo/StructuredData';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'projects' | 'resources' | 'pricing';
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What schemes do you support for VTU notes?",
      answer: "We provide study materials for all VTU schemes including 2018 scheme, 2021 scheme, 2022 scheme, and the latest 2025 scheme. Materials are available for all branches - CSE, ISE, ECE, Mechanical, and Civil Engineering.",
      category: 'resources',
    },
    {
      question: "Are the notes and study materials free to download?",
      answer: "Yes! All our study resources including notes, previous year questions (PYQ), handwritten notes, syllabus, and important questions are completely free to download. No registration or payment required.",
      category: 'resources',
    },
    {
      question: "What types of projects do you offer?",
      answer: "We offer both minor projects (for 5th/6th semester) and major projects (for 7th/8th semester). Projects include Library Management Systems, E-Commerce websites, Machine Learning projects, AI-based systems, IoT projects, and more. All projects come with complete code, documentation, and implementation guidance.",
      category: 'projects',
    },
    {
      question: "How much do projects cost?",
      answer: "We pride ourselves on being highly affordable. Our projects are priced significantly lower than market rates while maintaining excellent quality. Exact pricing depends on project complexity, technology stack, and deadline. Contact us for a personalized quote.",
      category: 'pricing',
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Project delivery time varies based on complexity. Minor projects typically take 1-2 weeks, while major projects take 2-4 weeks. We understand the importance of deadlines and always deliver on time. Rush delivery options are available for urgent requirements.",
      category: 'projects',
    },
    {
      question: "Do you provide project documentation?",
      answer: "Absolutely! Every project includes complete documentation: project synopsis, abstract, System Requirement Specification (SRS), design diagrams (UML, ER diagrams), code with comments, test cases, and a final project report. Everything you need for submission.",
      category: 'projects',
    },
    {
      question: "Can I get help with backlogs?",
      answer: "Yes! We provide focused classes specifically for students with backlogs. Our expert instructors help you understand concepts quickly and prepare effectively for exams. One-on-one and group sessions available.",
      category: 'general',
    },
    {
      question: "What subjects do you cover for classes?",
      answer: "We cover all major engineering subjects including Data Structures, Algorithms, DBMS, Computer Networks, Operating Systems, Machine Learning, Web Development, and more. Both VTU and autonomous college syllabi supported.",
      category: 'general',
    },
    {
      question: "How do I contribute my own notes?",
      answer: "We love community contributions! Click the 'Contribute Your Resources' button on the Resources page to submit your notes. After quality verification, we'll make them available to help other students.",
      category: 'resources',
    },
    {
      question: "Are projects plagiarism-free?",
      answer: "Yes, all our projects are developed from scratch with unique implementations. We don't provide the same project to multiple students. Each project is customized to ensure originality and meet your specific requirements.",
      category: 'projects',
    },
    {
      question: "Do you provide project demos and explanation?",
      answer: "Yes! We provide complete project explanation, demo video, and technical support. You'll understand every aspect of your project thoroughly, helping you present it confidently and answer viva questions.",
      category: 'projects',
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major payment methods including UPI (Google Pay, PhonePe, Paytm), bank transfer, and online payment. Payment terms are flexible - you can pay 50% advance and remaining 50% after project delivery.",
      category: 'pricing',
    },
    {
      question: "Can I request custom project ideas?",
      answer: "Definitely! We encourage custom project ideas. Share your concept, and our team will help you refine it, suggest the best technology stack, and develop it professionally. We turn your ideas into reality.",
      category: 'projects',
    },
    {
      question: "How do I contact you for urgent requirements?",
      answer: "For urgent requirements, use the WhatsApp number on our Contact page for immediate response. We understand student deadlines and prioritize urgent requests accordingly.",
      category: 'general',
    },
    {
      question: "Do you support projects for other universities besides VTU?",
      answer: "Yes! While we specialize in VTU, we also support autonomous colleges and other universities. Our projects follow industry-standard practices and can be adapted to any university's requirements.",
      category: 'projects',
    },
  ];

  const faqData = faqs.map(faq => ({
    question: faq.question,
    answer: faq.answer,
  }));

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General' },
    { id: 'projects', label: 'Projects' },
    { id: 'resources', label: 'Resources' },
    { id: 'pricing', label: 'Pricing' },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredFAQs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-background">
      {/* SEO Structured Data */}
      <StructuredData 
        type="faq" 
        data={{ questions: faqData }}
      />

      <div className="container mx-auto max-w-4xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HelpCircle className="w-16 h-16 mx-auto text-primary mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground mt-4">
              Find answers to common questions about VTU notes, projects, pricing, and our services
            </p>
          </motion.div>
        </div>

        {/* Category Filter */}
        <Card className="bg-card border-border">
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  className="transition-all"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="bg-card border-border hover:border-primary/50 transition-all">
                <CardHeader
                  className="cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-lg text-left">
                      {faq.question}
                    </CardTitle>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                    )}
                  </div>
                </CardHeader>
                {openIndex === index && (
                  <CardContent className="pt-0">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {faq.answer}
                    </motion.p>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions */}
        <Card className="bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-500/10 border-primary/20">
          <CardContent className="pt-6 text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground">
              Can't find what you're looking for? Contact us directly and we'll be happy to help!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Contact Us
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline">
                  View Projects
                </Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline">
                  Browse Resources
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
