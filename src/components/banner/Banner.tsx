/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import Link from "next/link";
import { TDeveloper } from "@/type/developer.type";

interface IParams {
  devInfo: TDeveloper[];
}

const Banner = ({ devInfo }: IParams) => {
  return (
    <div className="bg-[#01051b] p-6 min-h-screen overflow-hidden">
      {devInfo?.slice(0, 1).map((info: TDeveloper) => (
        <div
          key={info?._id}
          className="flex flex-col p-12 md:p-16 md:flex-row items-center justify-between mx-auto"
        >
          {/* Left Side: Developer Info */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#0ef79d] via-[#2b027c] to-[#0ef79d] inline-block text-transparent bg-clip-text mb-4">
              {info?.name}
            </h1>

            <h2 className="text-3xl text-gray-300 font-light mb-6">
              {info?.title}
            </h2>
            <p className="text-xl text-gray-400 mb-6 justify-center">
              {info?.summary}
            </p>
            <Link href={info?.resume} target="_blank">
              <button className="bg-gradient-to-r from-[#0ef79d] via-[#2b027c] to-[#0ef79d]  text-white font-semibold rounded p-[1px] text-center items-center">
                <span className="flex w-40  hover:bg-gradient-to-r from-[#0ef79d]   to-[#2b027c] justify-center font-semibold bg-gray-800 rounded py-3 px-4">
                  See Resume
                </span>
              </button>
            </Link>
          </div>

          {/* Right Side: Developer Image and Skill Circle */}
          <div className="bg-gradient-to-r from-[#0ef79d] via-[#2b027c] to-[#0ef79d] rounded-full  p-1">
            <Image
              src={info?.image}
              alt="Profile Image"
              className="w-52 h-52  bg-[#01051b] md:w-64 md:h-64 rounded-full object-cover  shadow-lg"
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
