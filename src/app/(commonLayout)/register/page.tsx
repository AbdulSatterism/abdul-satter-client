"use client";

import { useRegisterMutation } from "@/redux/features/auth/authApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm, FieldValues } from "react-hook-form";
import { toast } from "sonner";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [Register, { isLoading }] = useRegisterMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const registerInfo = {
      ...data,
      role: "user",
    };

    try {
      const result = await Register(registerInfo).unwrap();
      console.log(result);
      toast.success(result?.message, { duration: 2000 });
      if (result?.success) {
        router.push("/login");
      }
    } catch (err: any) {
      toast.error(err?.error || err?.data?.message, {
        duration: 2000,
      });
    }
  };

  return (
    <div className="min-h-screen hero bg-[#01051b]">
      <div className="flex-col hero-content md:flex-row-reverse">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              {...register("email", { required: true })}
            />
          </div>

          <div className="">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="password"
              className="input input-bordered"
            />
          </div>

          <div className="mt-6 ">
            <input
              disabled={isLoading}
              className="w-full btn btn-primary"
              type="submit"
              value="Signup"
            />
          </div>

          <p className="mx-auto text-center">
            <small>
              Have an account?{" "}
              <Link href="/login" className="text-gray-500">
                Please Login
              </Link>{" "}
            </small>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
