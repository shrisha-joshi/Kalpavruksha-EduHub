import Link from 'next/link';
import { Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card w-full border-t border-border mt-auto py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold text-primary mb-4 font-serif">Kalpavruksha EduHub</h3>
                <p className="text-muted-foreground max-w-sm">
                    Fulfilling educational wishes like the divine Kalpavruksha tree. We provide projects, resources, and guidance to help students grow and excel.
                </p>
            </div>
            
            <div>
                <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
                <ul className="space-y-2">
                    <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                    <li><Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
                    <li><Link href="/classes" className="text-muted-foreground hover:text-primary transition-colors">Classes</Link></li>
                    <li><Link href="/resources" className="text-muted-foreground hover:text-primary transition-colors">Resources</Link></li>
                </ul>
            </div>
            
            <div>
                <h4 className="font-bold text-foreground mb-4">Connect</h4>
                <div className="flex space-x-4 mb-4">
                    <Link href="https://www.instagram.com/kalpavrukshaedu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                        <Instagram className="w-5 h-5" />
                    </Link>
                    <Link href="https://linkedin.com/company/kalpavruksha-eduhub" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                        <Linkedin className="w-5 h-5" />
                    </Link>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:Kalpavrukshaeduhub@gmail.com" className="hover:text-primary">info@kalpavrukshaeduhub.com</a>
                </div>
            </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kalpavruksha EduHub. All rights reserved.
        </div>
    </footer>
  );
}
