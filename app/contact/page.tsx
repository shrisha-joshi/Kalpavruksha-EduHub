'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/918951633906', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:Kalpavrukshaeduhub@gmail.com';
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-background">
      <div className="container mx-auto max-w-4xl space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help! Reach out to us anytime.
          </p>
        </div>

        {/* Important Notice */}
        <Card className="bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <MessageCircle className="h-6 w-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                  ⚠️ WhatsApp Messages Only
                </h3>
                <p className="text-amber-800 dark:text-amber-200">
                  Please note that we <strong>only accept WhatsApp messages</strong>. We do not receive or respond to phone calls. 
                  This helps us manage inquiries efficiently and provide better support to everyone.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* WhatsApp */}
          <Card className="bg-card border-border hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-green-100 dark:bg-green-900 rounded-full">
                  <MessageCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground mb-4">
                    Send us a message on WhatsApp
                  </p>
                  <p className="text-lg font-mono mb-4">+91 8951633906</p>
                  <Button onClick={handleWhatsApp} className="w-full">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Message Us
                  </Button>
                  <p className="text-xs text-amber-600 dark:text-amber-400 mt-3">
                    Messages only - No calls please
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="bg-card border-border hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground mb-4">
                    Send us an email anytime
                  </p>
                  <p className="text-lg mb-4 break-all">Kalpavrukshaeduhub@gmail.com</p>
                  <Button onClick={handleEmail} variant="outline" className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Location */}
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    Bangalore, Karnataka<br />
                    India - 560004
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Response Time */}
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Response Time</h3>
                  <p className="text-muted-foreground">
                    We typically respond within<br />
                    <strong>24-48 hours</strong> on weekdays
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-1">📚 How can I access study materials?</h4>
                <p className="text-muted-foreground text-sm">
                  Visit our Resources page to browse and download notes, PYQs, and other materials.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">🎓 How do I join classes?</h4>
                <p className="text-muted-foreground text-sm">
                  Check the Classes page for available sessions and enrollment details.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">📤 Can I contribute resources?</h4>
                <p className="text-muted-foreground text-sm">
                  Yes! Use the "Contribute Resources" button on the Resources page to share your notes.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">📞 Do you accept phone calls?</h4>
                <p className="text-muted-foreground text-sm">
                  No, we only accept WhatsApp messages. Please do not call.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
