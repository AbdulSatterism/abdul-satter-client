"use client";
import { useGetDevInfoQuery } from "@/redux/features/developer/DeveloperApi";
import { FaTrashAlt } from "react-icons/fa";

const ManageDeveloper = () => {
  const { data: developer, isLoading } = useGetDevInfoQuery(undefined);

  // const handleToggleRole = async (id: string) => {
  //   const toastId = toast.loading("updating role..");
  //   try {
  //     const result = await updateRole(id).unwrap();
  //     if (result?.success) {
  //       toast.success(result?.message, { id: toastId, duration: 2000 });
  //     }
  //   } catch (err: any) {
  //     toast.error(err?.error || err?.data?.message, {
  //       id: toastId,
  //       duration: 2000,
  //     });
  //   }
  // };

  // const handleDelete = async (id: string) => {
  //   try {
  //     Swal.fire({
  //       title: "Are you sure?",
  //       text: "you want to delete this one",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!",
  //     }).then(async (result) => {
  //       if (result.isConfirmed) {
  //         const result = await deleteUser(id).unwrap();
  //         if (result?.success) {
  //           Swal.fire({
  //             title: "Deleted!",
  //             text: result?.message,
  //             icon: "success",
  //           });
  //         }
  //       }
  //     });
  //   } catch (err: any) {
  //     toast.error(err?.error || err?.data?.message, {
  //       duration: 2000,
  //     });
  //   }
  // };

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
            {developer?.data?.map((dev: any, i: number) => (
              <tr key={dev?._id}>
                <th>{i + 1}</th>
                <td>{dev?.name}</td>
                <td>{dev?.email}</td>
                <td>{dev?.title}</td>

                <td>
                  <button
                    //   onClick={() => handleDelete(dev?._id)}
                    className="btn bg-green-500 btn-md  text-white"
                  >
                    update
                  </button>
                </td>
                <td>
                  <button
                    //   onClick={() => handleDelete(dev?._id)}
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
