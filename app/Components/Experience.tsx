"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, useScroll, Environment, Float, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import Overlay from "./Overlay";

// Preload the model
useGLTF.preload("/avatar.glb");

const AvatarModel = () => {
    const scroll = useScroll();
    const groupRef = useRef<THREE.Group>(null);
    const { scene } = useGLTF("/avatar.glb");

    useFrame((state, delta) => {
        if (!groupRef.current) return;

        const offset = scroll.offset;

        // SCROLL ANIMATION LOGIC
        // 5 Sections: Hero, About, Experience, Skills, Projects
        // Range: 0-0.2, 0.2-0.4, 0.4-0.6, 0.6-0.8, 0.8-1.0
        
        const targetPos = new THREE.Vector3(0, -1, 0); // Default position
        const targetRot = new THREE.Euler(0, 0, 0); // Default rotation
        const targetScale = new THREE.Vector3(1, 1, 1);

        if (offset < 0.14) {
            // HERO (0 - 0.14)
            targetPos.set(1.5, -2, 0); 
            targetRot.set(0, -0.3, 0);
             targetScale.set(1.5, 1.5, 1.5);
        } else if (offset >= 0.14 && offset < 0.28) {
            // ABOUT + EDUCATION (0.14 - 0.28)
            targetPos.set(-1, -2.5, 2.5);
            targetRot.set(0, 0.5, 0);
             targetScale.set(1.6, 1.6, 1.6);
        } else if (offset >= 0.28 && offset < 0.42) {
             // BIO / STRENGTHS (0.28 - 0.42)
             targetPos.set(0, -2.0, 3.0);
             targetRot.set(0, 0, 0); // Face forward
             targetScale.set(1.6, 1.6, 1.6);
        } else if (offset >= 0.42 && offset < 0.56) {
             // EXPERIENCE (0.42 - 0.56)
             targetPos.set(1.4, -2.0, 1.0);
             targetRot.set(0, -0.8, 0);
             targetScale.set(1.5, 1.5, 1.5);
        } else if (offset >= 0.56 && offset < 0.7) {
            // SKILLS (0.56 - 0.70)
            targetPos.set(-1.2, -1.8, 1.5);
            targetRot.set(0, 0.6, 0);
             targetScale.set(1.4, 1.4, 1.4);
        } else if (offset >= 0.7 && offset < 0.85) {
            // PROJECTS (0.70 - 0.85)
            targetPos.set(1.5, -3.0, 0.0);
            targetRot.set(0, -0.4, 0);
             targetScale.set(1.3, 1.3, 1.3);
        } else {
             // CONTACT (0.85 - 1.0)
            targetPos.set(0, -1.5, 3.5); // Very close up
            targetRot.set(0, 0.2, 0);
            targetScale.set(1.7, 1.7, 1.7);
        }
        
        // Smooth transition (Damping)
        const damp = 4;
        groupRef.current.position.lerp(targetPos, delta * damp);
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRot.x, delta * damp);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRot.y, delta * damp);
        groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetRot.z, delta * damp);
        groupRef.current.scale.lerp(targetScale, delta * damp);
    });

    return (
        <group ref={groupRef}>
             <primitive object={scene} />
        </group>
    );
};

const Experience = () => {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
        <Environment preset="city" />

        <ScrollControls pages={8} damping={0.2} style={{ width: "100%", height: "100%" }}>
            <React.Suspense fallback={null}>
                <AvatarModel />
            </React.Suspense>
            <Overlay />
        </ScrollControls>
      </Canvas>
      
      {/* Instructions for user to swap model */}
      <div className="fixed bottom-4 left-4 text-xs text-gray-400 pointer-events-none opacity-50">
        * Upload 'avatar.glb' to public/ to replace placeholder
      </div>
    </>
  );
};

export default Experience;
