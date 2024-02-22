import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import AdminLogin from "./components/AdminLogin";

function Login() {
  const [adminLogin, setAdminLogin] = useState(false);
  return (
    <div className="w-full h-full  p-5 mt-[20%] md:mt-0 md:flex-center">
      {adminLogin ? (
        <AdminLogin setAdminLogin={setAdminLogin} />
      ) : (
        <LoginForm setAdminLogin={setAdminLogin} />
      )}
    </div>
  );
}

export default Login;
