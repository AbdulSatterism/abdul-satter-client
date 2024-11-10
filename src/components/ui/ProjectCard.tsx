import { TProject } from "@/type/project.type";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: TProject }) => {
  const { image, _id } = project;
  return (
    <div className="bg-gradient-to-r from-[#0ef79d] via-[#2b027c] to-[#0ef79d] image___warp w-11/12 h-[350px]  gradient-border  relative game__box p-[2px] rounded-xl ">
      <Image
        className="w-[100%] h-[100%]  object-cover  overflow-x-hidden relative rounded-xl "
        src={image}
        alt="image"
        height={100}
        width={100}
      />

      <Link href={`/${_id}`}>
        <button className="text-white font-semibold rounded p-[1px] text-center items-center  top-0 right-0 bottom-0 left-0 m-auto  video__btn">
          <span className="flex w-40  hover:bg-gradient-to-r from-[#0ef79d]   to-[#2b027c] justify-center font-semibold bg-gray-800 rounded py-3 px-4">
            Details
          </span>
        </button>
      </Link>
    </div>
  );
};

export default ProjectCard;
