"use client";

import LoadingProject from "@/components/Loading/LoadingProject";
import { useSingleProjectQuery } from "@/redux/features/project/ProjectApi";
import Image from "next/image";
import Link from "next/link";

type TParams = {
  params: {
    projectId: string;
  };
};
const ProjectDetails = ({ params }: TParams) => {
  const { data: project, isLoading } = useSingleProjectQuery(params.projectId);

  if (isLoading) {
    return <LoadingProject />;
  }

  const {
    image,
    name,
    userDescription,
    adminDescription,
    technologies,
    clientSite,
    serverSite,
    liveSite,
  } = project?.data;

  return (
    <div className="max-w-screen-2xl  p-6 bg-[#01051b] text-gray-300">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src={image}
          className=" rounded-lg h-[500px] w-full object-center shadow-2xl object-cover"
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
            <span className="font-bold text-lg text-blue-600">
              Technology :
            </span>
            {technologies?.map((tech: string, i: number) => (
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
    </div>
  );
};

export default ProjectDetails;
