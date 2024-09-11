"use client";
import { TSkill } from "@/type/skill.type";
import { motion } from "framer-motion";
import Image from "next/image";

const SkillCard = ({ skill }: { skill: TSkill }) => {
  const { name, image } = skill;

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="card image-full items-center w-48 h-48 rounded-full shadow-sm shadow-gray-400 bg-white border-2 border-gray-600 mx-auto "
    >
      <Image
        className=" object-cover transform rounded-full w-44 h-44 bg-white mx-auto text-center shadow-2xl "
        src={image}
        alt="Shoes"
        width={230}
        height={230}
      />

      <div className="flex z-10 text-start">
        <h2 className="card-title  text-orange-600 font-extrabold uppercase ">
          {name}
        </h2>
      </div>
    </motion.div>
    // <motion.div
    //   className={`flex flex-col   mx-auto items-center  rounded-full w-64 h-64 bg-gray-400`}
    //   animate={{ y: [0, -10, 0] }}
    //   transition={{ duration: 2, repeat: Infinity }}
    // >
    //   {/* <div className="relative "> */}
    //   <div className="relative w-24 h-24 overflow-hidden">
    //     {/* <Image
    //       src={image}
    //       alt="image"
    //       className=" object-cover transform"
    //       width={150}
    //       height={150}
    //     />
    //     <h3 className="mt-4 text-lg font-semibold">{name}</h3>
    //   </div>
    // </motion.div>
  );
};

export default SkillCard;
