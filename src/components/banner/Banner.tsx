"use client";

// import { motion } from "framer-motion";
import myImage from "../../assets/satter.png";
import Image from "next/image";
import Link from "next/link";

// const nameVariants = {
//   hidden: { y: -50, opacity: 0 },
//   visible: (i: number) => ({
//     y: 0,
//     opacity: 1,
//     transition: {
//       delay: i * 0.1,
//       type: "spring",
//       stiffness: 100,
//     },
//   }),
// };
const Banner = () => {
  //   const renderNameWithAnimation = (name: string) => {
  //     return name.split("").map((letter, index) => (
  //       <motion.span
  //         key={index}
  //         custom={index}
  //         variants={nameVariants}
  //         initial="hidden"
  //         animate="visible"
  //         className="inline-block"
  //       >
  //         {letter === " " ? "\u00A0" : letter}
  //       </motion.span>
  //     ));
  //   };

  //   const titleVariants = {
  //     hidden: { x: -100, opacity: 0 },
  //     visible: {
  //       x: 0,
  //       opacity: 1,
  //       transition: {
  //         duration: 0.5,
  //         ease: "easeInOut",
  //       },
  //     },
  //   };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#030c3c] to-[#01051b] p-8 md:p-16 min-h-screen">
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-5xl font-bold text-orange-500 mb-4">
          Md. Abdul Satter
        </h1>
        <h2 className="text-3xl  text-gray-300 font-light mb-6">
          Full Stack Developer(MERN)
        </h2>
        <p className="text-xl text-gray-400 mb-6 justify-center">
          I am expert as a full stack developer.I have the ability to build web
          applications that deliver exceptional results.I am expert and
          comfortable in Javascript | Typescript | React js | Next js | Redux
          RTK | Mongodb | Mongoose | Node js | Express js.
        </p>
        <Link
          href="https://drive.google.com/file/d/1Vpc9HYjEcUO-as0tA5TGNLgwzKjdqUQL/view?usp=drive_link"
          target="_blank"
        >
          <button className="btn px-4 bg-gradient-to-r from-orange-500 to-blue-950 hover:bg-slate-100 text-white">
            See Resume
          </button>
        </Link>
      </div>

      <div className="md:w-1/3 flex items-center justify-center ">
        <Image
          src={myImage}
          alt="Profile Image"
          className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover border-2 border-white shadow-lg transition duration-500 transform group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Banner;
