"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  useUpdateProjectMutation,
  useSingleProjectQuery,
} from "@/redux/features/project/ProjectApi";

type TParams = {
  params: {
    projectId: string;
  };
};
const UpdateProject = ({ params }: TParams) => {
  const { data: project, isLoading } = useSingleProjectQuery(params.projectId);
  const { register, handleSubmit } = useForm();
  const [updateProject] = useUpdateProjectMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("creating....");
    try {
      const projectData = {
        id: params.projectId,
        updateInfo: {
          ...data,
          technologies: [data.technologies],
        },
      };
      const result = await updateProject(projectData).unwrap();
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

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className="w-full px-10 my-10 ">
      <h1 className="text-2xl text-center ">update project</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex my-4">
          <div className="form-control w-full ml-4 ">
            <label className="label">
              <span className="label-text font-semibold">Project Name*</span>
            </label>
            <input
              type="text"
              defaultValue={project?.data?.name}
              {...register("name")}
              className="input input-bordered w-full  "
            />
          </div>
          <div className="form-control w-full ml-4 ">
            <label className="label">
              <span className="label-text font-semibold">Live site link* </span>
            </label>
            <input
              type="url"
              defaultValue={project?.data?.liveSite}
              {...register("liveSite")}
              className="input input-bordered w-full  "
            />
          </div>
        </div>

        <div className="flex my-4">
          <div className="form-control w-full ml-4 ">
            <label className="label">
              <span className="label-text font-semibold">
                client site link*{" "}
              </span>
            </label>
            <input
              type="url"
              defaultValue={project?.data?.clientSite}
              {...register("clientSite")}
              className="input input-bordered w-full  "
            />
          </div>
          <div className="form-control w-full ml-4 ">
            <label className="label">
              <span className="label-text font-semibold">
                Server site link*{" "}
              </span>
            </label>
            <input
              type="url"
              defaultValue={project?.data?.serverSite}
              {...register("serverSite")}
              className="input input-bordered w-full  "
            />
          </div>
        </div>

        <div className="flex my-4">
          <div className="form-control w-full ml-4 ">
            <label className="label">
              <span className="label-text font-semibold">Technologies*</span>
            </label>
            <input
              type="text"
              defaultValue={project?.data?.technologies}
              {...register("technologies")}
              className="input input-bordered w-full  "
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Admin Description*</span>
          </label>
          <textarea
            {...register("adminDescription")}
            className="textarea textarea-bordered w-full"
            defaultValue={project?.data?.adminDescription}
          ></textarea>
          <label className="label">
            <span className="label-text">User Description*</span>
          </label>
          <textarea
            {...register("userDescription")}
            className="textarea textarea-bordered w-full"
            defaultValue={project?.data?.userDescription}
          ></textarea>
        </div>
        <input
          className="btn btn-sm mt-4 btn-primary "
          type="submit"
          value="update Project"
        />
      </form>
    </div>
  );
};

export default UpdateProject;
