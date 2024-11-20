import ProjectCard from "@/components/ui/ProjectCard";
import { getAllProjects } from "@/services/projects";
import { TProject } from "@/type/project.type";

const AllProject = async () => {
  const { data: projects } = await getAllProjects();

  return (
    <div className="p-6 min-h-screen bg-[#01051b] text-gray-300">
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mx-auto  my-10">
        {projects?.map((project: TProject) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default AllProject;
