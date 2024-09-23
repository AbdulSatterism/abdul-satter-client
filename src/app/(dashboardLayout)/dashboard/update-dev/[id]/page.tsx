"use client";

import {
  useSingleDeveloperQuery,
  useUpdateDevMutation,
} from "@/redux/features/developer/DeveloperApi";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

type TParams = {
  params: {
    id: string;
  };
};
const UpdateDeveloper = ({ params }: TParams) => {
  const { data: developerData, isLoading } = useSingleDeveloperQuery(params.id);
  const { register, handleSubmit } = useForm();
  const [updateDev] = useUpdateDevMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("creating....");
    try {
      const projectData = {
        id: params.id,
        updateInfo: {
          ...data,
          course: [data.course],
        },
      };
      const result = await updateDev(projectData).unwrap();
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
      <h1 className="text-2xl text-center ">UpdateDeveloper</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex my-4">
          <div className="form-control w-full ml-4 ">
            <label className="label">
              <span className="label-text font-semibold">Name*</span>
            </label>
            <input
              type="text"
              defaultValue={developerData?.data?.name}
              placeholder="Name"
              {...register("name")}
              className="input input-bordered w-full  "
            />
          </div>
          <div className="form-control w-full ml-4 ">
            <label className="label">
              <span className="label-text font-semibold">Title* </span>
            </label>
            <input
              type="text"
              defaultValue={developerData?.data?.title}
              placeholder="Title"
              {...register("title")}
              className="input input-bordered w-full  "
            />
          </div>
        </div>

        <div className="flex my-4">
          <div className="form-control w-full ml-4 ">
            <label className="label">
              <span className="label-text font-semibold">Resume*</span>
            </label>
            <input
              type="url"
              placeholder="url"
              defaultValue={developerData?.data?.resume}
              {...register("resume")}
              className="input input-bordered w-full  "
            />
          </div>
          <div className="form-control w-full ml-4 ">
            <label className="label">
              <span className="label-text font-semibold">LinkedIn* </span>
            </label>
            <input
              type="url"
              placeholder="url"
              defaultValue={developerData?.data?.linkedin}
              {...register("linkedin")}
              className="input input-bordered w-full  "
            />
          </div>
        </div>

        <div className="flex my-4">
          <div className="form-control w-full ml-4 ">
            <label className="label">
              <span className="label-text font-semibold">Facebook*</span>
            </label>
            <input
              type="url"
              placeholder="url"
              defaultValue={developerData?.data?.facebook}
              {...register("facebook")}
              className="input input-bordered w-full  "
            />
          </div>
          <div className="form-control w-full ml-4 ">
            <label className="label">
              <span className="label-text font-semibold">Github* </span>
            </label>
            <input
              type="url"
              placeholder="url"
              defaultValue={developerData?.data?.github}
              {...register("github")}
              className="input input-bordered w-full  "
            />
          </div>
        </div>

        <div className="flex my-4">
          <div className="form-control w-full ml-4 ">
            <label className="label">
              <span className="label-text font-semibold">Email*</span>
            </label>
            <input
              type="email"
              placeholder="email"
              defaultValue={developerData?.data?.email}
              {...register("email")}
              className="input input-bordered w-full  "
            />
          </div>
          <div className="form-control w-full ml-4 ">
            <label className="label">
              <span className="label-text font-semibold">Courses* </span>
            </label>
            <input
              type="text"
              placeholder="course"
              defaultValue={developerData?.data?.course}
              {...register("course")}
              className="input input-bordered w-full  "
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Summary*</span>
          </label>
          <textarea
            defaultValue={developerData?.data?.summary}
            {...register("summary")}
            className="textarea textarea-bordered w-full"
            placeholder="Project details"
          ></textarea>
        </div>
        <input
          disabled={isLoading}
          className="btn btn-sm mt-4 btn-primary "
          type="submit"
          value="Add Dev"
        />
      </form>
    </div>
  );
};

export default UpdateDeveloper;
