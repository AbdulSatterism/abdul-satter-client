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
        <h2 className="card-title shadow-xl text-blue-600 bg-gray-400 rounded-sm font-extrabold uppercase ">
          {name}
        </h2>
      </div>
    </motion.div>
  );
};

export default SkillCard;
