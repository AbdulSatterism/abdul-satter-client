import { TProject } from "@/type/project.type";
import Image from "next/image";
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";

const ProjectCard = ({ project }: { project: TProject }) => {
  const { image, _id, name } = project;
  return (
    <>
      <Link href={`/${_id}`}>
        <div className="relative h-56 p-6 overflow-hidden group cursor-pointer transition-all duration-500 ease-in-out bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg hover:bg-gradient-to-tl hover:from-[#0ef79d] hover:to-transparent ">
          {/* Text Content */}
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <h3 className={`text-4xl font-bold mb-2 `}>{name}</h3>
            </div>
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-64 h-52 rounded-xl overflow-hidden transition-transform duration-500  group-hover:scale-75 group-hover:translate-x-6 group-hover:skew-x-6 hover:origin-right hover:rotate-45 hover:shadow-xl shadow-white">
            <Image
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              width={100}
              height={100}
            />
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
