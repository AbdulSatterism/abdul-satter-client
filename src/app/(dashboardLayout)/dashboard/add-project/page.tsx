"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const AddProject = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const projectData = {
      ...data,
      technologies: [data.technologies],
    };
    console.log(projectData);
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
          className="btn btn-sm mt-4 btn-primary "
          type="submit"
          value="Add Project"
        />
      </form>
    </div>
  );
};

export default AddProject;
