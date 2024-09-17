"use client";
import {
  useDeleteProjectMutation,
  useGetProjectsQuery,
} from "@/redux/features/project/ProjectApi";
import { TProject } from "@/type/project.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "sonner";
import Swal from "sweetalert2";

const ManageProject = () => {
  const { data: projects, isLoading } = useGetProjectsQuery(undefined);
  const [deleteProject] = useDeleteProjectMutation();

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
          const result = await deleteProject(id).unwrap();
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
        Total Projects: {projects?.data?.length}
      </h3>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Project Image</th>
              <th>Project Name</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {projects?.data?.map((project: TProject, i: number) => (
              <tr key={project?._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-20 h-20">
                        <Image
                          src={project?.image}
                          alt=""
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{project?.name}</div>
                </td>
                <td>
                  <Link href={`/dashboard/update-project/${project?._id}`}>
                    <button className="btn bg-green-600 btn-md  text-white">
                      update{" "}
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(project?._id)}
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

export default ManageProject;
