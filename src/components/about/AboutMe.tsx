/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { TSkill } from "@/type/skill.type";

interface IParams {
  skills: TSkill[];
}

const AboutMe = ({ skills }: IParams) => {
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
    const logos = skills?.map((skill, index) => {
      const angle = (index / skills?.length) * Math.PI * 2; // Evenly distribute logos around the circle
      const texture = new THREE.TextureLoader().load(skill.image);
      const material = new THREE.SpriteMaterial({ map: texture });
      const sprite = new THREE.Sprite(material);

      sprite.scale.set(0.75, 0.75, 0.75); // Set skill logo size
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
          (index / logos.length) * Math.PI * 2 + Date.now() * 0.0002; // Slow down the rotation
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
    <div className="bg-[#01051b] p-10 min-h-screen overflow-hidden">
      <h1 className="mb-10 py-6 text-5xl  text-[#0ef79d] uppercase text-center">
        about me
        <div className="bg-gradient-to-r from-[#0ef79d] via-[#2b027c] to-[#0ef79d] h-1 text-center w-1/4 mx-auto rounded-sm mt-2"></div>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-around mx-auto">
        {/* seft Side: Developer Image and Skill Circle */}
        <div className=" w-52 h-52 md:w-64 md:h-64 relative flex items-center justify-center bg-gradient-to-r from-[#0ef79d] via-[#2b027c] to-[#0ef79d] rounded-full p-1 ">
          <div ref={mountRef} className="absolute  " />
          <Image
            src="https://i.ibb.co.com/vjFHRxR/laptop-removebg-preview.png"
            alt="Image"
            className="w-52 h-52 md:w-64 md:h-64 bg-[#01051b]  rounded-full object-cover  shadow-lg transition duration-500 transform group-hover:scale-105"
            width={208}
            height={208}
          />
        </div>

        {/* Right Side: Developer Info */}
        <div className=" md:w-1/2 text-center md:text-left mb-8 md:mb-0 ">
          <h1 className="text-3xl font-bold text-white mb-4">
            Hi this is <br /> Abdul Satter
          </h1>

          <p className="text-xl text-gray-400 mb-6 justify-center ">
            I am MD. Abdul Satter, full stack developer (MERN) and technology
            Javascript | Typescript | React | Next js | Redux | Node js |
            Express js | Mongodb |. I completed my Diploma In Computer Science
            and Engineering at Aptouch Polytechnic Institute, Dinajpur. Now I
            studies BSc in Computer Science and Engineering at Manarat
            International University,Ashuliya, Dhaka, Bangladesh. I am honest,
            sincere and hardworking person. I am good at frontend and backend
            development. But I am more comfort and flexible in backend
            development. I want to grow my future position as a backend
            developer and after two or three years later I want to see myself as
            a software analyst.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
