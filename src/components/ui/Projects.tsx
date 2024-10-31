import ProjectCard from "./ProjectCard";
import { TProject } from "../../type/project.type";
import { getAllProjects } from "@/services/projects";

const Projects = async () => {
  const { data: projects } = await getAllProjects();

  return (
    <div className="p-6 bg-[#01051b] text-gray-300">
      <h1 className="mb-10 py-6 text-5xl  text-[#0ef79d] uppercase text-center">
        latest projects
        <div className="bg-gradient-to-r from-[#0ef79d] via-[#2b027c] to-[#0ef79d] h-1 text-center w-1/4 mx-auto rounded-sm mt-2"></div>
      </h1>

      <div className=" grid sm:grid-cols-1 lg:grid-cols-2 gap-2 mx-auto my-10">
        {projects?.map((project: TProject) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
