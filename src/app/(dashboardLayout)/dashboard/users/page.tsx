"use client";

import {
  useAllUsersQuery,
  useDeleteUserMutation,
  useUpdateUserRoleMutation,
} from "@/redux/features/auth/authApi";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import { toast } from "sonner";
import Swal from "sweetalert2";

const Users = () => {
  const { data: users, isLoading } = useAllUsersQuery(undefined);
  const [deleteUser] = useDeleteUserMutation();
  const [updateRole] = useUpdateUserRoleMutation();

  const handleToggleRole = async (id: string) => {
    const toastId = toast.loading("updating role..");
    try {
      const result = await updateRole(id).unwrap();
      if (result?.success) {
        toast.success(result?.message, { id: toastId, duration: 2000 });
      }
    } catch (err: any) {
      toast.error(err?.error || err?.data?.message, {
        id: toastId,
        duration: 2000,
      });
    }
  };

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
          const result = await deleteUser(id).unwrap();
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
      <h3 className="text-3xl font-semibold my-4">
        Total Users: {users?.data?.length}
      </h3>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.data?.map((user: any, i: number) => (
              <tr key={user?._id}>
                <th>{i + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
                <td>
                  <button
                    onClick={() => handleToggleRole(user?._id)}
                    className="btn  btn-sm btn-primary text-white"
                  >
                    <FaUserShield></FaUserShield>{" "}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user?._id)}
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

export default Users;
