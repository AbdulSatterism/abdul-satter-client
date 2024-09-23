"use client";
import { envConfig } from "@/config/envConfig";
import { useCreateDevInfoMutation } from "@/redux/features/developer/DeveloperApi";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const AddDeveloper = () => {
  const { register, handleSubmit } = useForm();

  const [createDev, { isLoading }] = useCreateDevInfoMutation();

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

      const devInfo = {
        ...data,
        image: imgURL,
        course: [data.course],
      };

      const result = await createDev(devInfo).unwrap();
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
      <h1 className="text-2xl text-center ">Add Developer</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex my-4">
          <div className="form-control w-full ml-4 ">
            <label className="label">
              <span className="label-text font-semibold">Name*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: true, maxLength: 120 })}
              className="input input-bordered w-full  "
            />
          </div>
          <div className="form-control w-full ml-4 ">
            <label className="label">
              <span className="label-text font-semibold">Title* </span>
            </label>
            <input
              type="text"
              placeholder="Title"
              {...register("title", { required: true })}
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
              {...register("resume", { required: true })}
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
              {...register("linkedin", { required: true })}
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
              {...register("facebook", { required: true })}
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
              {...register("github", { required: true })}
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
              {...register("email", { required: true })}
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
              {...register("course", { required: true })}
              className="input input-bordered w-full  "
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Summary*</span>
          </label>
          <textarea
            {...register("summary", { required: true })}
            className="textarea textarea-bordered w-full"
            placeholder="Project details"
          ></textarea>
        </div>

        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text"> Image*</span>
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
          value="Add Dev"
        />
      </form>
    </div>
  );
};

export default AddDeveloper;
