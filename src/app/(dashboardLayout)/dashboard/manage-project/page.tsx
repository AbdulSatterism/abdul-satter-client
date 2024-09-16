import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const projects = [
  {
    _id: 1,
    name: "Bike Ride",
    image: "https://i.ibb.co.com/Km0bsZF/bike-Rider.png",
  },
];

const ManageProject = () => {
  return (
    <div className="w-full">
      <h3 className="text-3xl font-semibold my-4">
        Total Projects: {projects?.length}
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
            {projects.map((project, i) => (
              <tr key={project._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-20 h-20">
                        <Image
                          src={project.image}
                          alt=""
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{project.name}</div>
                </td>
                <td>
                  {/* {`/admin/update/${project?._id}`} */}
                  <Link href="#">
                    <button className="btn btn-primary btn-sm  text-white">
                      update{" "}
                    </button>
                  </Link>
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

export default ManageProject;
