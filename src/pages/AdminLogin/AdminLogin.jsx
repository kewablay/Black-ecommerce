import React, { useRef } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useAdminLogin } from "hooks/useAuth";

function AdminLogin() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const AdminSignInMutation = useAdminLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    AdminSignInMutation.mutate(userData);

    toast.promise(AdminSignInMutation.mutateAsync(userData), {
      loading: "Logging in...",
      success: "Login successful",
      error: (error) => `Error: ${error.response.data.error}`,
    });
  };

  // console.log("signin data: ", AdminSignInMutation.data);

  return (
    <div className="w-full h-full  p-5 mt-[20%] md:mt-0 md:flex-center">
      <form onSubmit={handleSubmit} className="lg:w-[40%] xl:w-[30%]">
        {/* heading */}
        <h2 className="text-center text-800">Admin Login</h2>

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
    </div>
  );
}

export default AdminLogin;
