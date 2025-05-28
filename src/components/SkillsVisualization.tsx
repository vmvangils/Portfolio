import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls, Float, Sphere, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as THREE from 'three';

interface SkillNodeProps {
  position: [number, number, number];
  name: string;
  color: string;
  scale?: number;
}

function SkillNode({ position, name, color, scale = 1 }: SkillNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Add slight movement based on mouse position
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group position={position}>
        <Sphere 
          ref={meshRef} 
          args={[0.5 * scale, 32, 32]} 
          scale={hovered ? 1.2 : 1}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <meshStandardMaterial 
            color={color} 
            roughness={0.2} 
            metalness={0.8} 
            emissive={color}
            emissiveIntensity={hovered ? 0.8 : 0.4}
          />
        </Sphere>
        <Text
          position={[0, -0.8 * scale, 0]}
          fontSize={0.25 * scale}
          color={hovered ? "white" : "#cccccc"}
          anchorX="center"
          anchorY="middle"
          
        >
          {name}
        </Text>
      </group>
    </Float>
  );
}

// Lines connecting skills
function ConnectionLines() {
  const linesRef = useRef<THREE.Group>(null);

  const skills = [
    { name: 'HTML/CSS', position: [0, 0, 0] },
    { name: 'TypeScript', position: [-2, 1, -1] },
    { name: 'React.js', position: [2, -1, 1] },
    { name: 'JavaScript', position: [1, 2, -1] },
    { name: 'Tailwind', position: [-1, -2, 0] },
    { name: 'Node.js', position: [-2, -1, 2] },
    { name: 'Express', position: [2, 1, 2] },
    { name: 'SQL', position: [0, -1, -2] },
    { name: 'Supabase', position: [1, 0, 3] },
    { name: 'Docker', position: [-1, 1, -3] },
  ];

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={linesRef}>
      {skills.map((skill, i) => 
        skills.slice(i + 1).map((otherSkill, j) => (
          <line key={`${i}-${j}`}>
            <bufferGeometry attach="geometry">
              <bufferAttribute
                attachObject={['attributes', 'position']}
                array={new Float32Array([
                  ...skill.position,
                  ...otherSkill.position
                ])}
                count={2}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial 
              attach="material" 
              color="#8884d8" 
              opacity={0.2} 
              transparent 
              linewidth={1} 
            />
          </line>
        ))
      )}
    </group>
  );
}

export default function SkillsVisualization() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const skills = [
    { name: 'HTML/CSS', color: '#e44d26', position: [0, 0, 0], scale: 1.2 },
    { name: 'TypeScript', color: '#3178c6', position: [-2, 1, -1], scale: 1.1 },
    { name: 'React.js', color: '#61dafb', position: [2, -1, 1], scale: 1.1 },
    { name: 'JavaScript', color: '#f7df1e', position: [1, 2, -1], scale: 1 },
    { name: 'Tailwind', color: '#38bdf8', position: [-1, -2, 0], scale: 0.9 },
    { name: 'Node.js', color: '#6cc24a', position: [-2, -1, 2], scale: 0.9 },
    { name: 'Express', color: '#cccccc', position: [2, 1, 2], scale: 0.9 },
    { name: 'SQL', color: '#f29111', position: [0, -1, -2], scale: 0.9 },
    { name: 'Supabase', color: '#3fcf8e', position: [1, 0, 3], scale: 0.8 },
    { name: 'Docker', color: '#2496ed', position: [-1, 1, -3], scale: 0.7 },
  ];

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="w-full h-[500px] my-8 relative bg-gradient-to-br from-gray-900/80 to-indigo-900/60 backdrop-blur-sm rounded-xl overflow-hidden"
    >
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 50 }}>
        <color attach="background" args={['#1e293b']} />
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <ConnectionLines />
        
        {skills.map((skill, index) => (
          <SkillNode 
            key={index} 
            name={skill.name} 
            position={skill.position} 
            color={skill.color} 
            scale={skill.scale}
          />
        ))}
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 3}
        />
        <Environment preset="city" />
      </Canvas>
      <div className="absolute bottom-4 left-4 text-xs text-white/70 backdrop-blur-sm bg-black/30 px-2 py-1 rounded-md">
        Drag to explore | Touch to interact
      </div>
    </motion.div>
  );
}
