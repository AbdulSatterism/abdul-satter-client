import ProjectCard from "./ProjectCard";
import { TProject } from "../../type/project.type";
import { getAllProjects } from "@/services/projects";

const Projects = async () => {
  const { data: projects } = await getAllProjects();

  return (
    <div className="p-6 ">
      <h1 className=" mt-5 text-3xl font-bold  text-blue-600 uppercase text-end">
        projects
      </h1>

      <div className="container mx-auto my-10">
        {projects?.map((project: TProject) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
