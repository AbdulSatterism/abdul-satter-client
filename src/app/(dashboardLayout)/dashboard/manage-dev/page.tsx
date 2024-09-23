"use client";
import {
  useDeleteDevMutation,
  useGetDevInfoQuery,
} from "@/redux/features/developer/DeveloperApi";
import { TDeveloper } from "@/type/developer.type";
import Link from "next/link";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "sonner";
import Swal from "sweetalert2";

const ManageDeveloper = () => {
  const { data: developer, isLoading } = useGetDevInfoQuery(undefined);
  const [deleteDev] = useDeleteDevMutation();

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
          const result = await deleteDev(id).unwrap();
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
    return <div>loading.....</div>;
  }

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {developer?.data?.map((dev: TDeveloper, i: number) => (
              <tr key={dev?._id}>
                <th>{i + 1}</th>
                <td>{dev?.name}</td>
                <td>{dev?.email}</td>
                <td>{dev?.title}</td>

                <td>
                  <Link href={`/dashboard/update-dev/${dev?._id}`}>
                    <button className="btn bg-green-600 btn-md  text-white">
                      update
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(dev?._id)}
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

export default ManageDeveloper;
