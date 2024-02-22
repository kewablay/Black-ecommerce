import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { signInAdmin } from "services/auth.services";
import toast from "react-hot-toast";

function AdminLogin({ setAdminLogin }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const AdminSignInMutation = useMutation(signInAdmin, {
    onSuccess: () => {
      navigate("/admin/manage-products"); // Redirect to homepage
    },
  });

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

  console.log("signin data: ", AdminSignInMutation.data);

  return (
    <form onSubmit={handleSubmit} className="lg:w-[40%] ">
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
          <p className="text-center text-textGray">
            Login as an
            <button
              onClick={() => setAdminLogin(false)}
              className="ml-2 text-orange-600 underline"
            >
              User
            </button>
          </p>
        </div>
      </div>
    </form>
  );
}

export default AdminLogin;
