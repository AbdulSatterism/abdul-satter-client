"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import {
  Lensflare,
  LensflareElement,
} from "three/examples/jsm/objects/Lensflare.js";

const BackgroundAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    let scene: THREE.Scene,
      camera: THREE.PerspectiveCamera,
      renderer: THREE.WebGLRenderer;
    let controls: any, stats: any;

    // Create Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x01051b); // Dark color background

    // Create Camera
    camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      1,
      15000
    );
    camera.position.z = 250;

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container?.appendChild(renderer.domElement);

    // Geometry and Material (Boxes)
    const geometry = new THREE.BoxGeometry(250, 250, 250);
    const material = new THREE.MeshPhongMaterial({
      color: 0xff8800,
      shininess: 50,
    });

    for (let i = 0; i < 2000; i++) {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        8000 * (2.0 * Math.random() - 1.0),
        8000 * (2.0 * Math.random() - 1.0),
        8000 * (2.0 * Math.random() - 1.0)
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      mesh.matrixAutoUpdate = false;
      mesh.updateMatrix();
      scene.add(mesh);
    }

    // Lights and Lensflare
    const textureLoader = new THREE.TextureLoader();
    const textureFlare0 = textureLoader.load("../../../public/lensflare0.png");
    const textureFlare3 = textureLoader.load("../../../public/lensflare3.png");

    function addLight(
      h: number,
      s: number,
      l: number,
      x: number,
      y: number,
      z: number
    ) {
      const light = new THREE.PointLight(0xffffff, 1.5, 2000);
      light.color.setHSL(h, s, l);
      light.position.set(x, y, z);
      scene.add(light);

      const lensflare = new Lensflare();
      lensflare.addElement(
        new LensflareElement(textureFlare0, 700, 0, light.color)
      );
      lensflare.addElement(new LensflareElement(textureFlare3, 60, 0.6));
      lensflare.addElement(new LensflareElement(textureFlare3, 70, 0.7));
      lensflare.addElement(new LensflareElement(textureFlare3, 120, 0.9));
      lensflare.addElement(new LensflareElement(textureFlare3, 70, 1));
      light.add(lensflare);
    }

    addLight(0.55, 0.9, 0.5, 5000, 0, -1000);
    addLight(0.08, 0.8, 0.5, 0, 0, -1000);
    addLight(0.995, 0.5, 0.9, 5000, 5000, -1000);

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      container?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default BackgroundAnimation;
