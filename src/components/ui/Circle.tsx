"use client";

import { Slider } from "@radix-ui/react-slider";
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

interface Skill {
  name: string;
  image: string;
}

interface SkillCircleProps {
  skills: Skill[];
  developerImage: string;
}

const Circle: React.FC<SkillCircleProps> = ({ skills, developerImage }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotationSpeed, setRotationSpeed] = useState(0.005);
  const animationRef = useRef<number>();
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const skillGroupRef = useRef<THREE.Group>();

  useEffect(() => {
    if (!containerRef.current) return;

    // Set up scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(400, 400);
    containerRef.current.appendChild(renderer.domElement);

    // Create developer image
    const loader = new THREE.TextureLoader();
    const developerTexture = loader.load(developerImage);
    const developerMaterial = new THREE.MeshBasicMaterial({
      map: developerTexture,
    });
    const developerGeometry = new THREE.CircleGeometry(0.5, 32);
    const developerMesh = new THREE.Mesh(developerGeometry, developerMaterial);
    scene.add(developerMesh);

    // Create skill icons
    const skillGroup = new THREE.Group();
    skills.forEach((skill: { image: string }, index: number) => {
      const skillTexture = loader.load(skill.image);
      const skillMaterial = new THREE.MeshBasicMaterial({ map: skillTexture });
      const skillGeometry = new THREE.CircleGeometry(0.2, 32);
      const skillMesh = new THREE.Mesh(skillGeometry, skillMaterial);

      const angle = (index / skills.length) * Math.PI * 2;
      const radius = 1;
      skillMesh.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        0
      );

      skillGroup.add(skillMesh);
    });
    scene.add(skillGroup);

    camera.position.z = 2.5;

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    skillGroupRef.current = skillGroup;

    // Animation
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      if (skillGroupRef.current) {
        skillGroupRef.current.rotation.z += rotationSpeed;
      }
      rendererRef.current?.render(sceneRef.current!, cameraRef.current!);
    };
    animate();

    // Clean up
    return () => {
      if (containerRef.current && rendererRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [skills, developerImage, rotationSpeed]);

  const handleSpeedChange = (value: number[]) => {
    setRotationSpeed(value[0]);
  };

  return (
    <div className="flex  flex-col items-center p-6">
      <div ref={containerRef} className="w-[400px] h-[400px]" />
      <div className="flex space-x-4">
        <div className="w-80 ">
          <Slider
            defaultValue={[0.005]}
            max={0.02}
            step={0.001}
            onValueChange={handleSpeedChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Circle;
