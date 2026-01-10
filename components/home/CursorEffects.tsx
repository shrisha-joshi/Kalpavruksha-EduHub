'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function GlowingCursorOrb() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // Use spring physics for smooth trailing
  const springConfig = { stiffness: 300, damping: 20 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    function moveHandler(event: MouseEvent) {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    }
    window.addEventListener('mousemove', moveHandler);
    return () => window.removeEventListener('mousemove', moveHandler);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ translateX: x, translateY: y, x: -12, y: -12 }}
      className="pointer-events-none fixed top-0 left-0 w-6 h-6 rounded-full bg-primary/30 z-50 mix-blend-screen"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
        <div className="w-full h-full rounded-full blur-md bg-primary/50" />
    </motion.div>
  );
}

export function ParticleTrail() {
  const [particles, setParticles] = useState<{id:number, x:number, y:number}[]>([]);

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      if (Math.random() > 0.3) return; // Throttling particle creation
      const id = Date.now() + Math.random();
      setParticles(p => [...p.slice(-20), { id, x: e.clientX, y: e.clientY }]); // Limit to simple trail
      
      // Cleanup is mostly handled by the slice above, but we can purge old ones
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== id));
      }, 1000);
    }
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <>
      {particles.map(p => (
        <motion.span
          key={p.id}
          initial={{ x: p.x, y: p.y, opacity: 0.8, scale: 0.5 }}
          animate={{ 
              x: p.x + (Math.random() * 20 - 10), 
              y: p.y + (Math.random() * 20 + 20), // Fall down slightly like leaves
              opacity: 0, 
              scale: 0 
          }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="pointer-events-none fixed w-2 h-2 rounded-full bg-secondary text-gold-500"
          style={{
             backgroundColor: Math.random() > 0.5 ? '#B8860B' : '#02452B' 
          }}
        />
      ))}
    </>
  );
}
