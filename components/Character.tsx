"use client";

import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

// Fallback 3D Character - A stylized human figure made with primitives
function StylizedCharacter() {
  const groupRef = useRef<THREE.Group>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Subtle rotation following mouse
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mousePos.x * 0.3,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mousePos.y * 0.1,
        0.05
      );

      // Gentle floating animation
      groupRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.5, 0]} scale={1.2}>
      {/* Head */}
      <mesh position={[0, 2.2, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial
          color="#f5d0c5"
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      {/* Hair */}
      <mesh position={[0, 2.45, -0.05]}>
        <sphereGeometry args={[0.38, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#2a1810" roughness={1} />
      </mesh>

      {/* Body/Torso - Hoodie style */}
      <mesh position={[0, 1.3, 0]}>
        <capsuleGeometry args={[0.4, 0.8, 8, 16]} />
        <meshStandardMaterial
          color="#1a1a2e"
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>

      {/* Hood */}
      <mesh position={[0, 1.95, -0.1]}>
        <sphereGeometry args={[0.45, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial
          color="#1a1a2e"
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>

      {/* Left Arm */}
      <group position={[-0.55, 1.4, 0]} rotation={[0, 0, 0.3]}>
        <mesh>
          <capsuleGeometry args={[0.12, 0.6, 8, 16]} />
          <meshStandardMaterial
            color="#1a1a2e"
            roughness={0.9}
            metalness={0.1}
          />
        </mesh>
        {/* Hand */}
        <mesh position={[0, -0.5, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color="#f5d0c5"
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>
      </group>

      {/* Right Arm */}
      <group position={[0.55, 1.4, 0]} rotation={[0, 0, -0.3]}>
        <mesh>
          <capsuleGeometry args={[0.12, 0.6, 8, 16]} />
          <meshStandardMaterial
            color="#1a1a2e"
            roughness={0.9}
            metalness={0.1}
          />
        </mesh>
        {/* Hand */}
        <mesh position={[0, -0.5, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color="#f5d0c5"
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>
      </group>

      {/* Legs - Pants */}
      <mesh position={[-0.2, 0.3, 0]}>
        <capsuleGeometry args={[0.15, 0.8, 8, 16]} />
        <meshStandardMaterial color="#16213e" roughness={0.9} metalness={0.1} />
      </mesh>
      <mesh position={[0.2, 0.3, 0]}>
        <capsuleGeometry args={[0.15, 0.8, 8, 16]} />
        <meshStandardMaterial color="#16213e" roughness={0.9} metalness={0.1} />
      </mesh>

      {/* Shoes */}
      <mesh position={[-0.2, -0.35, 0.08]}>
        <boxGeometry args={[0.18, 0.12, 0.35]} />
        <meshStandardMaterial color="#ffffff" roughness={0.5} metalness={0.2} />
      </mesh>
      <mesh position={[0.2, -0.35, 0.08]}>
        <boxGeometry args={[0.18, 0.12, 0.35]} />
        <meshStandardMaterial color="#ffffff" roughness={0.5} metalness={0.2} />
      </mesh>

      {/* Accent glow ring */}
      <mesh position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.8, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#c2a4ff"
          emissive="#c2a4ff"
          emissiveIntensity={2}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}

// Floating particles around the character
function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 50;

  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 6;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#c2a4ff"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

// Ambient lighting setup
function Lighting() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <spotLight
        position={[5, 5, 5]}
        angle={0.4}
        penumbra={1}
        intensity={1}
        color="#ffffff"
      />
      <spotLight
        position={[-5, 5, -5]}
        angle={0.4}
        penumbra={1}
        intensity={0.5}
        color="#c2a4ff"
      />
      <pointLight position={[0, -2, 2]} intensity={0.3} color="#fb8dff" />
    </>
  );
}

const Character = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`w-full h-full transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Lighting />
          <StylizedCharacter />
          <FloatingParticles />
          <Environment preset="city" />
        </Suspense>
      </Canvas>

      {/* Hover area for interactivity */}
      <div className="character-hover absolute w-[280px] h-[280px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-[3]" />
    </div>
  );
};

export default Character;
