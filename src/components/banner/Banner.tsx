"use client";

import { motion } from "framer-motion";

const Banner = () => {
  const developerName = "John Doe";
  const developerTitle = "Full Stack Developer";
  const description = "I build scalable and robust web applications.";

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2 * i,
      },
    }),
  };

  const item = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50 },
    },
  };

  const backgroundGradient = {
    initial: { backgroundPosition: "0% 50%" },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 10,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      className="text-white py-20"
      style={{
        background:
          "linear-gradient(270deg, #1f2937, #4b5563, #374151, #1f2937)",
        backgroundSize: "400% 400%",
      }}
      variants={backgroundGradient}
      initial="initial"
      animate="animate"
    >
      <div className="container mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {developerName.split("").map((letter, index) => (
            <motion.span key={index} className="inline-block" variants={item}>
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-4xl font-semibold mb-4"
          variants={container}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          {developerTitle.split("").map((letter, index) => (
            <motion.span key={index} className="inline-block" variants={item}>
              {letter}
            </motion.span>
          ))}
        </motion.h2>
        <p className="text-lg md:text-xl">{description}</p>
        {/* <img
          src="/path-to-image.jpg"
          alt="Developer"
          className="mt-8 mx-auto rounded-full w-32 h-32 object-cover shadow-lg"
        /> */}
      </div>
    </motion.div>
  );
};

export default Banner;
