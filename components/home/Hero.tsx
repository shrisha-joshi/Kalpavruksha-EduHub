'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden pt-20">
      {/* Texture Overlay */}
      <div className="absolute inset-0 z-0 bg-transparent bg-gradient-to-b from-transparent to-black pointer-events-none" />

      {/* Text Content */}
      <div className="w-full md:w-1/2 px-6 md:px-12 z-10 flex flex-col items-start space-y-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
            <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight text-white drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
              <span className="text-primary block drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]">Kalpavruksha EduHub</span>
              Your Wish-Fulfilling Tree for Education
            </h1>
        </motion.div>
        
        <motion.p 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="text-lg md:text-xl text-gray-300 max-w-lg"
        >
          Empowering university students with projects, classes, and resources to excel. We help valid academic wishes come true.
        </motion.p>
        
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <Link href="/about">
                <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground font-semibold px-8 py-6 rounded-full text-lg shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all hover:shadow-[0_0_30px_rgba(255,215,0,0.5)]">
                  Learn More
                </Button>
            </Link>
        </motion.div>
      </div>

      {/* Static Tree Image */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen flex items-center justify-center relative z-0">
          <motion.div
            className="relative w-full h-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
         >
             <div className="relative w-[1000px] h-[1000px] md:w-[2000px] md:h-[2000px]">
                <Image 
                    src="kalpa_6-removebg-preview.png"
                    alt="Golden Tree of Knowledge"
                    fill
                    className="object-contain drop-shadow-[0_0_50px_rgba(255,215,0,0.2)]"
                    priority
                    unoptimized
                />
                 {/* Glowing Orb Behind */}
                <div className="absolute inset-0 bg-primary/10 blur-[90px] rounded-full -z-10 animate-pulse" />
             </div>
         </motion.div>
      </div>
    </section>
  );
}
