import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  const location = useLocation();
  const token = localStorage.getItem("TOKEN");
  // console.log("token from private route:", token);

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;
