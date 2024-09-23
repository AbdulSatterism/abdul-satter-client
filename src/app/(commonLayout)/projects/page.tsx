import ProjectCard from "@/components/ui/ProjectCard";
import { getAllProjects } from "@/services/projects";
import { TProject } from "@/type/project.type";

const AllProject = async () => {
  const { data: projects } = await getAllProjects();

  return (
    <div className="p-6 min-h-screen bg-[#01051b]">
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

export default AllProject;
