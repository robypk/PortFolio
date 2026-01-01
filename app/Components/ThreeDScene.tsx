"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float, Stars, Text } from "@react-three/drei";

const AnimatedSphere = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2.4}>
      <MeshDistortMaterial
        color="#22c55e" // Green-500
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
      />
    </Sphere>
  );
};

const ThreeDScene = () => {
  return (
    <div className="w-full h-[400px] md:h-[600px]">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
            <AnimatedSphere />
        </Float>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
};

export default ThreeDScene;
