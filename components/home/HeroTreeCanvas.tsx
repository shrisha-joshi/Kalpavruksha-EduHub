'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

function TreeModel() {
  const trunk = useRef<THREE.Mesh>(null);
  const leaves = useRef<THREE.Mesh>(null);

  // Sway animation on leaves/trunk
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (trunk.current) {
      trunk.current.rotation.z = Math.sin(t / 2) * 0.02; // slow sway
    }
    if (leaves.current) {
       // Gentle independent sway for leaves
      leaves.current.rotation.z = Math.sin(t / 2) * 0.04; 
    }
  });

  return (
    <group position={[0, -1, 0]}>
      {/* Trunk - Dark brownish/grey */}
      <mesh ref={trunk} position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0.2, 0.4, 3, 8]} />
        <meshStandardMaterial color="#3e2723" roughness={0.9} />
      </mesh>
      
      {/* Canopy - Using multiple spheres for a "cloud" look */}
      <group ref={leaves} position={[0, 3.2, 0]}>
         <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <mesh position={[0, 0.5, 0]}>
                <dodecahedronGeometry args={[1.5, 0]} />
                <meshStandardMaterial color="#02452B" emissive="#0f3820" emissiveIntensity={0.2} roughness={0.3} />
            </mesh>
            <mesh position={[1, 0, 0.8]} scale={0.6}>
                <dodecahedronGeometry args={[1.5, 0]} />
                <meshStandardMaterial color="#1A4D2E" emissive="#0f3820" emissiveIntensity={0.1} />
            </mesh>
             <mesh position={[-1, 0.2, -0.5]} scale={0.7}>
                <dodecahedronGeometry args={[1.5, 0]} />
                <meshStandardMaterial color="#02452B" emissive="#0f3820" emissiveIntensity={0.2} />
            </mesh>
             {/* "Gold" Fruits or Lights */}
             <mesh position={[0.5, 1, 0.5]}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="#B8860B" emissive="#FFD700" emissiveIntensity={2} toneMapped={false} />
             </mesh>
             <mesh position={[-0.5, 0.5, 0.8]}>
                <sphereGeometry args={[0.08, 16, 16]} />
                <meshStandardMaterial color="#B8860B" emissive="#FFD700" emissiveIntensity={2} toneMapped={false} />
             </mesh>
         </Float>
      </group>
    </group>
  );
}

export default function HeroTreeCanvas() {
  return (
    <div className="w-full h-[400px] sm:h-[500px] relative">
      <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
        <color attach="background" args={['#012115']} /> 
        {/* Soft ambient and point lights for subtle illumination */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#B8860B" />
        <spotLight position={[-10, 10, -5]} intensity={0.5} color="#02452B" />

        <Suspense fallback={null}>
          <TreeModel />
        </Suspense>

        {/* Allow gentle orbiting */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.8}
          autoRotate 
          autoRotateSpeed={0.5} 
        />
        
        {/* Environment for shiny reflections */}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
