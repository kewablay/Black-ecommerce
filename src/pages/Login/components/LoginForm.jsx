import React, { useRef } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useLoginUser } from "hooks/useAuth";

function LoginForm({ setAdminLogin }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const SignInMutation = useLoginUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    SignInMutation.mutate(userData);

    toast.promise(SignInMutation.mutateAsync(userData), {
      loading: "Logging in...",
      success: "Login successful",
      error: (error) => `Error: ${error.response.data.error}`,
    });
  };

  console.log("signin data: ", SignInMutation.data);

  return (
    <form onSubmit={handleSubmit} className="lg:w-[40%] xl:w-[30%]">
      {/* heading */}
      <h2 className="text-center text-800">Login</h2>

      {/* input group  */}
      <div className="flex flex-col gap-4 mt-5">
        <input
          type="email"
          name="email"
          className="w-full input-style"
          placeholder="Email"
          required
          ref={emailRef}
        />
        <input
          type="password"
          name="password"
          className="w-full input-style"
          placeholder="Password"
          required
          ref={passwordRef}
        />
        <input
          type="submit"
          value="Login"
          className="py-5 rounded-md btn-primary"
          // disabled={isLoading} // Disable the button while the mutation is loading
        />

        <div>
          <p className="text-center text-textGray">
            Create an account to get started{" "}
            <Link to={"/signup"} className="ml-2 text-orange-600 underline">
              Sign up
            </Link>
          </p>
          
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
