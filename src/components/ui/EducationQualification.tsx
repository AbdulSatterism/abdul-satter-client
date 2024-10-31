"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";

type TEducation = {
  degree: string;
  institution: string;
  startYear: string;
  endYear: string;
  isLast: any;
};

const TimelineItem = ({
  degree,
  institution,
  startYear,
  endYear,
  isLast,
}: TEducation) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 w-full max-w-2xl mx-auto"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-[#2b027c] rounded-lg flex items-center justify-center">
            <FaGraduationCap className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="flex-grow space-y-3">
          {/* Degree - Most prominent */}
          <h2 className="text-2xl font-bold  text-white">{degree}</h2>

          {/* Institution - Secondary emphasis */}
          <div className="text-lg text-gray-300">{institution}</div>

          {/* Years - Tertiary emphasis */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="px-3 py-1 bg-gray-700 rounded-full">
              {startYear}
            </span>
            <span className="text-gray-600">→</span>
            <span className="px-3 py-1 bg-gray-700 rounded-full">
              {endYear}
            </span>
          </div>
        </div>
      </div>

      {/* Connector Line - Don't show for last item */}
      {!isLast && (
        <div className="absolute -bottom-12 left-[2.5rem] w-[2px] h-12">
          <div className="h-full w-full bg-gradient-to-b from-[#0ef79d] to-transparent opacity-50" />
        </div>
      )}
    </motion.div>
  );
};

const EducationQualification = () => {
  const missions = [
    {
      degree: "SSC",
      institution: "Nekbakto High School, Nilphamary",
      startYear: "2012",
      endYear: "2017",
    },
    {
      degree: "Diploma In Computer Science and Engineering",
      institution: "Aptouch Polytechnic Institute, Dinajpur",
      startYear: "2017",
      endYear: "2021",
    },
    {
      degree: "BSc In Computer Science and Engineering",
      institution: "Manarat International University, Ashuliya, Dhaka",
      startYear: "2022",
      endYear: "2026",
    },
  ];

  return (
    <div className="container min-h-screen bg-[#01051b] p-10 mx-auto">
      <motion.div
        className="max-w-4xl mx-auto space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 py-6 text-5xl  text-[#0ef79d] uppercase text-center"
          >
            Educational Journey
            <div className="bg-gradient-to-r from-[#0ef79d] via-[#2b027c] to-[#0ef79d] h-1 text-center w-1/4 mx-auto rounded-sm mt-2"></div>
          </motion.h1>
        </div>

        <div className="space-y-12">
          {missions.map((mission, index) => (
            <TimelineItem
              key={index}
              {...mission}
              isLast={index === missions.length - 1}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default EducationQualification;
