"use client";

import { useGetProjectsQuery } from "@/redux/features/project/ProjectApi";
import ProjectCard from "./ProjectCard";
import { TProject } from "../../type/project.type";

const Projects = () => {
  const { data: projects } = useGetProjectsQuery(undefined);

  return (
    <div className="p-6 ">
      <h1 className=" mt-5 text-3xl font-bold  text-blue-600 uppercase text-end">
        projects
      </h1>

      <div className="container mx-auto my-10">
        {projects?.data?.map((project: TProject) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
