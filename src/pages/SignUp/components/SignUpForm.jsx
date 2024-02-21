import React, { useRef } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { signUpUser } from "services/auth.services";

function SignUpForm() {
  const navigate = useNavigate();

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  // sign up user
  const SignUpMutation = useMutation(signUpUser, {
    onSuccess: () => {
      navigate("/login");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    SignUpMutation.mutate(userData);

    toast.promise(SignUpMutation.mutateAsync(userData), {
      loading: "Signing up...",
      success: "SignUp successful",
      error: (error) => `Error: ${error.response.data.error}`,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="lg:w-[40%] ">
      {/* heading */}
      <h2 className="text-center text-800">Sign Up</h2>

      {/* input group  */}
      <div className="flex flex-col gap-4 mt-5">
        <input
          type="text"
          name="username"
          className="w-full input-style"
          placeholder="User name"
          ref={usernameRef}
        />
        <input
          type="email"
          name="email"
          className="w-full input-style"
          placeholder="Email"
          ref={emailRef}
        />
        <input
          type="password"
          name="passowrd"
          className="w-full input-style"
          placeholder="Password"
          ref={passwordRef}
        />

        <input
          type="submit"
          value="Sign Up"
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
