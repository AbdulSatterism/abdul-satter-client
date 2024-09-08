import { TProject } from "@/type/project.type";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: TProject }) => {
  const {
    name,
    image,
    userDescription,
    adminDescription,
    clientSite,
    serverSite,
    liveSite,
    technologies,
  } = project;
  return (
    <div className="hero-content flex-col lg:flex-row-reverse">
      <Image
        src={image}
        className=" rounded-lg shadow-2xl object-cover"
        width={500}
        height={500}
        alt=""
      />
      <div>
        <h1 className="text-5xl font-bold">{name}</h1>
        <div className="justify-center items-center ">
          <p className="py-6">
            <span className="font-bold text-lg text-blue-600">
              user guide :
            </span>
            {userDescription}
          </p>
          <p className="py-6">
            {" "}
            <span className="font-bold text-lg text-blue-600">
              admin guide :
            </span>
            {adminDescription}
          </p>
        </div>

        <div className="my-2">
          <span className="font-bold text-lg text-blue-600">Technology :</span>
          {technologies.map((tech: string, i: number) => (
            <span
              key={i}
              className="items-center ml-2 font-semibold font-serif"
            >
              {tech} |
            </span>
          ))}
        </div>

        <div className="text-end font-bold text-blue-600">
          <Link className=" mx-2 " href={clientSite} target="_black">
            client site
          </Link>
          <Link className=" mx-2 " href={serverSite} target="_black">
            server site
          </Link>
          <Link className=" mx-2 " href={liveSite} target="_black">
            Live site
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
