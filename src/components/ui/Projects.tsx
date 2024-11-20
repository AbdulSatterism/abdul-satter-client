import ProjectCard from "./ProjectCard";
import { TProject } from "../../type/project.type";
import { getAllProjects } from "@/services/projects";
import Link from "next/link";

const Projects = async () => {
  const { data: projects } = await getAllProjects();

  return (
    <div className="p-6 bg-[#01051b] text-gray-300">
      <h1 className="mb-10 py-6 text-5xl  text-[#0ef79d] uppercase text-center">
        latest projects
        <div className="bg-gradient-to-r from-[#0ef79d] via-[#2b027c] to-[#0ef79d] h-1 text-center w-1/4 mx-auto rounded-sm mt-2"></div>
      </h1>

      <div className=" grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mx-auto">
        {projects?.slice(0, 4).map((project: TProject) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>

      {projects?.length > 4 && (
        <div className="mt-4 flex justify-center">
          <Link href="/projects">
            <button className="bg-gradient-to-r from-[#0ef79d] via-[#2b027c] to-[#0ef79d]  text-white font-semibold rounded p-[1px] text-center items-center">
              <span className="flex w-40  hover:bg-gradient-to-r from-[#0ef79d]   to-[#2b027c] justify-center font-semibold bg-gray-800 rounded py-3 px-4">
                All Projects
              </span>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Projects;
