"use client";

import { envConfig } from "@/config/envConfig";
import { useCreateSkillMutation } from "@/redux/features/skill/SkillApi";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const AddSkill = () => {
  const { register, handleSubmit } = useForm();
  const [createSkill] = useCreateSkillMutation();

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
   
      const skillInfo = {
        ...data,
        image: imgURL,
      };

      const result = await createSkill(skillInfo).unwrap();
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
