import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent font-serif tracking-wider">
            Kalpavruksha EduHub
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">About</Link>
            <Link href="/projects" className="text-foreground/80 hover:text-primary transition-colors">Projects</Link>
            <Link href="/classes" className="text-foreground/80 hover:text-primary transition-colors">Classes</Link>
            <Link href="/resources" className="text-foreground/80 hover:text-primary transition-colors">Resources</Link>
            <Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</Link>
        </div>

        {/* Mobile Menu Toggle (Simplified placeholder) */}
        <div className="md:hidden">
            <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-foreground" />
            </Button>
        </div>
      </div>
    </nav>
  );
}
