"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const AddSkill = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full px-10 my-10 ">
      <h1 className="text-2xl text-center ">Add A new skill</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-4 ">
          <label className="label">
            <span className="label-text font-semibold">Skill Name* </span>
          </label>
          <input
            type="text"
            placeholder="Skill Name"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full  "
          />
        </div>

        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text">Skill Image*</span>
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
          value="Add skill"
        />
      </form>
    </div>
  );
};

export default AddSkill;
