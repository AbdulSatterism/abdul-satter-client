"use client";

import {
  useDeleteSkillMutation,
  useGetSkillQuery,
} from "@/redux/features/skill/SkillApi";
import { TSkill } from "@/type/skill.type";
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "sonner";
import Swal from "sweetalert2";

const ManageSkill = () => {
  const { data: skills, isLoading } = useGetSkillQuery(undefined);
  const [deleteSkill] = useDeleteSkillMutation();

  const handleDelete = async (id: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "you want to delete this one",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const result = await deleteSkill(id).unwrap();
          if (result?.success) {
            Swal.fire({
              title: "Deleted!",
              text: result?.message,
              icon: "success",
            });
          }
        }
      });
    } catch (err: any) {
      toast.error(err?.error || err?.data?.message, {
        duration: 2000,
      });
    }
  };

  if (isLoading) {
    return <div>loading...</div>;
  }

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
                  <button
                    onClick={() => handleDelete(skill?._id)}
                    className="btn bg-red-500 btn-md  text-white"
                  >
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
