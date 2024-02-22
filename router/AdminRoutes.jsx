import { Navigate, Outlet, useLocation } from "react-router-dom";

const AdminRoutes = () => {
  const location = useLocation();
  const token = localStorage.getItem("ADMIN_TOKEN");
  // console.log("token from private route:", token);

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default AdminRoutes;
