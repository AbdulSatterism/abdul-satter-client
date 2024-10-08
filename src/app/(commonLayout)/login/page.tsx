"use client";

import { useLoginMutation } from "@/redux/features/auth/authApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const Login = () => {
  const [Login, { isLoading }] = useLoginMutation();
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const loginInfo = {
      ...data,
    };

    try {
      const result = await Login(loginInfo).unwrap();

      document.cookie = `accessToken=${result?.data}`;
      toast.success(result?.message, { duration: 2000 });
      if (result?.success) {
        router.push("/dashboard");
      }
    } catch (err: any) {
      toast.error(err?.error || err?.data?.message, {
        duration: 2000,
      });
    }
  };

  return (
    <div className="hero min-h-screen bg-[#01051b]">
      <div className="hero-content flex-col md:flex-row-reverse">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="email"
              className="input input-bordered"
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
            <label className="label">
              <a href="/" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          <div className=" mt-6">
            <input
              disabled={isLoading}
              className="btn btn-primary w-full"
              type="submit"
              value="Login"
            />
          </div>

          <p className="text-center mx-auto">
            <small>
              New here?{" "}
              <Link href="/register" className="text-gray-500">
                create an account
              </Link>{" "}
            </small>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
