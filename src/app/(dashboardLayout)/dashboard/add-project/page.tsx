"use client";

import { envConfig } from "@/config/envConfig";
import { useCreateProjectMutation } from "@/redux/features/project/ProjectApi";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const AddProject = () => {
  const { register, handleSubmit } = useForm();

  const [createProject, { isLoading }] = useCreateProjectMutation();

  const imageHostingURL = `https://api.imgbb.com/1/upload?key=${envConfig.imageToken}`;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("creating....");
    try {
      // Upload image to ImgBB
      const formData = new FormData();
      formData.append("image", data.image[0]);

      const res = await fetch(imageHostingURL, {
        method: "POST",
        body: formData,
      });
      const imgData = await res.json();
      const imgURL = imgData?.data?.display_url;

      const projectData = {
        ...data,
        image: imgURL,
        technologies: [data.technologies],
      };

      const result = await createProject(projectData).unwrap();
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

  return (
    <div className="w-full px-10 my-10 ">
      <h1 className="text-2xl text-center ">Add A new Project</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex my-4">
          <div className="form-control w-full ml-4 ">
            <label className="label">
              <span className="label-text font-semibold">Project Name*</span>
            </label>
            <input
              type="text"
              placeholder="Project Name"
              {...register("name", { required: true, maxLength: 120 })}
              className="input input-bordered w-full  "
            />
          </div>
          <div className="form-control w-full ml-4 ">
            <label className="label">
              <span className="label-text font-semibold">Live site link* </span>
            </label>
            <input
              type="url"
              placeholder="url"
              {...register("liveSite", { required: true })}
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
              placeholder="url"
              {...register("clientSite", { required: true })}
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
              placeholder="url"
              {...register("serverSite", { required: true })}
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
              placeholder="technology"
              {...register("technologies", { required: true })}
              className="input input-bordered w-full  "
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Admin Description*</span>
          </label>
          <textarea
            {...register("adminDescription", { required: true })}
            className="textarea textarea-bordered w-full"
            placeholder="Project details"
          ></textarea>
          <label className="label">
            <span className="label-text">User Description*</span>
          </label>
          <textarea
            {...register("userDescription", { required: true })}
            className="textarea textarea-bordered w-full"
            placeholder="Project details"
          ></textarea>
        </div>

        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text">Project Image*</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full  "
          />
        </div>
        <input
          disabled={isLoading}
          className="btn btn-sm mt-4 btn-primary "
          type="submit"
          value="Add Project"
        />
      </form>
    </div>
  );
};

export default AddProject;
