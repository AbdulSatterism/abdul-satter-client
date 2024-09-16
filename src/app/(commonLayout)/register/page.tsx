import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content md:flex-row-reverse">
        <form className="card-body">
          <div className="">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              required
              name="name"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              required
              name="email"
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
              required
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
          </div>

          <div className="mt-6 ">
            <input
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
