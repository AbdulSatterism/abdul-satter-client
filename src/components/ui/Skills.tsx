import { TSkill } from "@/type/skill.type";
import SkillCard from "./SkillCard";
import { getAllSkills } from "@/services/skills";

const Skills = async () => {
  const { data: skills } = await getAllSkills();

  return (
    <div className="p-6 ">
      <h1 className=" mt-5 text-3xl font-bold  text-blue-600 uppercase text-end">
        skills
      </h1>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-y-2 gap-x-0 mx-auto my-10">
        {skills?.map((skill: TSkill) => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
