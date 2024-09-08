"use client";

import { useGetSkillQuery } from "@/redux/features/skill/SkillApi";
import { TSkill } from "@/type/skill.type";
import SkillCard from "./SkillCard";

const Skills = () => {
  const { data: skills } = useGetSkillQuery(undefined);
  return (
    <div className="p-6 ">
      <h1 className=" mt-5 text-3xl font-bold  text-blue-600 uppercase text-end">
        skills
      </h1>

      <div className="grid lg:grid-cols-5 grid-cols-2 md:grid-cols-3 gap-4 mx-auto my-10">
        {skills?.data?.map((skill: TSkill) => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
