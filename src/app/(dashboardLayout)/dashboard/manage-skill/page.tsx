"use client";

import { useGetSkillQuery } from "@/redux/features/skill/SkillApi";
import { TSkill } from "@/type/skill.type";
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";

const ManageSkill = () => {
  const { data: skills } = useGetSkillQuery(undefined);

  return (
    <div className="w-full">
      <h3 className="text-3xl font-semibold my-4">
        Total skills: {skills?.data?.length}
      </h3>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>skill Image</th>
              <th>skill Name</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {skills?.data?.map((skill: TSkill, i: number) => (
              <tr key={skill._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-20 h-20">
                        <Image
                          src={skill?.image}
                          alt=""
                          height={100}
                          width={100}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{skill.name}</div>
                </td>
                <td>
                  <button className="btn btn-primary btn-sm  text-white">
                    update{" "}
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger btn-sm  text-white">
                    <FaTrashAlt></FaTrashAlt>{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageSkill;
