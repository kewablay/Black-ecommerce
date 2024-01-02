import React from "react";
import { Link } from "react-router-dom";

function SignUpForm() {
  return (
    <form action="#" className="lg:w-[40%] ">
      {/* heading */}
      <h2 className="text-center text-800">Sign Up</h2>

      {/* input group  */}
      <div className="flex flex-col gap-4 mt-5">
        <input
          type="text"
          name="username"
          className="w-full input-style"
          placeholder="User name"
        />
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
          type="password"
          name="passowrd"
          className="w-full input-style"
          placeholder="Confirm Password"
        />

        <input
          type="submit"
          value="Login"
          className="py-5 rounded-md btn-primary "
        />

        <p className="text-center text-textGray">
          Have an account already?
          <Link to={"/login"} className="ml-2 text-orange-600 underline">
            Login
          </Link>
        </p>
      </div>
    </form>
  );
}

export default SignUpForm;
