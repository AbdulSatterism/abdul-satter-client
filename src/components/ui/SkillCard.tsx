import { TSkill } from "@/type/skill.type";
import { motion } from "framer-motion";
import Image from "next/image";

const SkillCard = ({ skill }: { skill: TSkill }) => {
  const { name, image } = skill;

  return (
    <motion.div
      className="flex flex-col  items-center bg-gray-600 rounded-full shadow-xl shadow-blue-100"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <div className="relative w-24 h-24">
        <div className=" w-full h-full overflow-hidden">
          <Image
            src={image}
            alt="image"
            className=" object-cover transform"
            width={150}
            height={150}
          />
        </div>
      </div>
      <h3 className="mt-4 text-lg font-semibold">{name}</h3>
    </motion.div>
  );
};

export default SkillCard;
