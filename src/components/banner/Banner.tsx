"use client";

import { useGetDevInfoQuery } from "@/redux/features/developer/DeveloperApi";
import Image from "next/image";
import Link from "next/link";
import { TDeveloper } from "@/type/developer.type";

const Banner = () => {
  const { data: devInfo, isLoading } = useGetDevInfoQuery(undefined);

  return (
    <div className="bg-[#01051b] py-10  min-h-screen">
      {devInfo?.data?.slice(0, 1).map((info: TDeveloper) => (
        <div
          key={info?._id}
          className="flex flex-col p-8 md:p-16  md:flex-row items-center justify-between mx-auto"
        >
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-5xl font-bold text-orange-500 mb-4">
              {info?.name}
            </h1>
            <h2 className="text-3xl  text-gray-300 font-light mb-6">
              {info?.title}
            </h2>
            <p className="text-xl text-gray-400 mb-6 justify-center">
              {info?.summary}
            </p>
            <Link href={info?.resume} target="_blank">
              <button className="btn px-4 bg-gradient-to-r from-orange-500 to-blue-950 hover:bg-slate-100 text-white">
                See Resume
              </button>
            </Link>
          </div>

          <div className="md:w-1/3 flex items-center justify-center ">
            <Image
              src={info?.image}
              alt="Profile Image"
              className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover border-2 border-white shadow-lg transition duration-500 transform group-hover:scale-105"
              width={208}
              height={208}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
