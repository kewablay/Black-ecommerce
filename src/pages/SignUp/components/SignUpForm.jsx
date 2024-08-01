import React, { useRef } from "react";
import { useSignUpUser } from "hooks/useAuth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function SignUpForm() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const phoneRef = useRef();

  // sign up user
  const SignUpMutation = useSignUpUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      phone: phoneRef.current.state.value, // Get the phone number value
    };

    SignUpMutation.mutate(userData);

    toast.promise(SignUpMutation.mutateAsync(userData), {
      loading: "Signing up...",
      success: "SignUp successful",
      error: (error) => `Error: ${error.response.data.error}`,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="lg:w-[40%] xl:w-[30%] ">
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
          name="password"
          className="w-full input-style"
          placeholder="Password"
          ref={passwordRef}
        />
        <PhoneInput
          country={"us"}
          placeholder="Phone Number"
          inputProps={{
            name: "phone",
            required: true,
            ref: phoneRef,
          }}
          containerClass="w-full"
          inputClass="input-style w-full"
          
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
