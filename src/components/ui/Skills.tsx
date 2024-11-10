import { TSkill } from "@/type/skill.type";
import SkillCard from "./SkillCard";
import { getAllSkills } from "@/services/skills";

const Skills = async () => {
  const { data: skills } = await getAllSkills();

  return (
    <div className="p-6 bg-[#01051b] text-gray-300">
      <h1 className="mb-10 py-6 text-5xl  text-[#0ef79d] uppercase text-center">
        technical skills
        <div className="bg-gradient-to-r from-[#0ef79d] via-[#2b027c] to-[#0ef79d] h-1 text-center w-1/4 mx-auto rounded-sm mt-2"></div>
      </h1>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1  gap-x-0 gap-y-4  mx-auto">
        {skills?.map((skill: TSkill) => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
