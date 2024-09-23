/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import Link from "next/link";
import { TDeveloper } from "@/type/developer.type";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { TSkill } from "@/type/skill.type";

interface IParams {
  devInfo: TDeveloper[];
  skills: TSkill[];
}

const skillLogos = [
  "https://i.ibb.co.com/RQtb6Bp/react-removebg-preview.png",
  "https://i.ibb.co.com/RQtb6Bp/react-removebg-preview.png",
  "https://i.ibb.co.com/RQtb6Bp/react-removebg-preview.png",
  "https://i.ibb.co.com/RQtb6Bp/react-removebg-preview.png",
  "https://i.ibb.co.com/RQtb6Bp/react-removebg-preview.png",
  "https://i.ibb.co.com/RQtb6Bp/react-removebg-preview.png",
];

const Banner = ({ devInfo, skills }: IParams) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = mountRef.current?.clientWidth || window.innerWidth;
    const height = mountRef.current?.clientHeight || window.innerHeight;

    // Create Three.js scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);

    // Attach renderer to the DOM
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    camera.position.z = 7; // Adjusted to give a more zoomed-out view

    const radius = 4; // Adjust radius for circular positioning

    // Add skill logos as sprites in circular layout
    const logos = skills.map((skill, index) => {
      const angle = (index / skillLogos.length) * Math.PI * 2; // Evenly distribute logos around the circle
      const texture = new THREE.TextureLoader().load(skill.image);
      const material = new THREE.SpriteMaterial({ map: texture });
      const sprite = new THREE.Sprite(material);

      sprite.scale.set(1, 1, 1); // Set skill logo size
      sprite.position.set(
        Math.cos(angle) * radius, // X position based on circle
        Math.sin(angle) * radius, // Y position based on circle
        0
      );

      scene.add(sprite);
      return sprite;
    });

    // Animate rotation of the skill logos around the image
    const animate = () => {
      requestAnimationFrame(animate);

      logos.forEach((logo, index) => {
        const angle =
          (index / logos.length) * Math.PI * 2 + Date.now() * 0.0015; // Slow down the rotation
        logo.position.set(
          Math.cos(angle) * radius, // Update X position
          Math.sin(angle) * radius, // Update Y position
          0
        );
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="bg-[#01051b] py-10 min-h-screen">
      {devInfo?.slice(0, 1).map((info: TDeveloper) => (
        <div
          key={info?._id}
          className="flex flex-col p-12 md:p-16 md:flex-row items-center justify-between mx-auto"
        >
          {/* Left Side: Developer Info */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-5xl font-bold text-orange-500 mb-4">
              {info?.name}
            </h1>
            <h2 className="text-3xl text-gray-300 font-light mb-6">
              {info?.title}
            </h2>
            <p className="text-xl text-gray-400 mb-6 justify-center">
              {info?.summary}
            </p>
            <Link href={info?.resume} target="_blank">
              <button className="btn px-4 bg-gradient-to-r from-orange-500 to-blue-950 hover:bg-slate-100 text-white">
                See Resume
              </button>
            </Link>
          </div>

          {/* Right Side: Developer Image and Skill Circle */}
          <div className="md:w-1/3 relative flex items-center justify-center ">
            <div ref={mountRef} className="absolute " />
            <Image
              src={info?.image}
              alt="Profile Image"
              className="w-52 h-52 bg-[#01051b] md:w-64 md:h-64 rounded-full object-cover border-2 border-white shadow-lg transition duration-500 transform group-hover:scale-105"
              width={208}
              height={208}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;

/**
 


 <div className="bg-[#01051b] py-10  min-h-screen">
      {devInfo?.slice(0, 1).map((info: TDeveloper) => (
        <div
          key={info?._id}
          className="flex flex-col p-8 md:p-16  md:flex-row items-center justify-between mx-auto"
        >
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-5xl font-bold text-orange-500 mb-4">
              {info?.name}
            </h1>
            <h2 className="text-3xl  text-gray-300 font-light mb-6">
              {info?.title}
            </h2>
            <p className="text-xl text-gray-400 mb-6 justify-center">
              {info?.summary}
            </p>
            <Link href={info?.resume} target="_blank">
              <button className="btn px-4 bg-gradient-to-r from-orange-500 to-blue-950 hover:bg-slate-100 text-white">
                See Resume
              </button>
            </Link>
          </div>

          <div className="md:w-1/3 flex items-center justify-center ">
            <Image
              src={info?.image}
              alt="Profile Image"
              className="w-52 h-52 bg-[#01051b] md:w-64 md:h-64 rounded-full object-cover border-2 border-white shadow-lg transition duration-500 transform group-hover:scale-105"
              width={208}
              height={208}
            />
          </div>
        </div>
      ))}
    </div>



 */
