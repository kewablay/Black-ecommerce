import React from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <form action="#" className="lg:w-[40%] ">
      {/* heading */}
      <h2 className="text-center text-800">Login</h2>

      {/* input group  */}
      <div className="flex flex-col gap-4 mt-5">
        <input
          type="email"
          name="email"
          className="w-full input-style"
          placeholder="Email"
        />
        <input
          type="password"
          name="passowrd"
          className="w-full input-style"
          placeholder="Password"
        />
        <input
          type="submit"
          value="Login"
          className="py-5 rounded-md btn-primary"
        />
        <p className="text-center text-textGray">
          Create an account to get started{" "}
          <Link to={"/signup"} className="ml-2 text-orange-600 underline">
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
