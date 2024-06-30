import { getCookie, removeCookie } from "../hooks";
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoutes = () => {
  const access_token = getCookie("auth_token");
  
  if (!access_token) {
    removeCookie("auth_token");
    console.log("unsetting cookie...");
    return <Navigate to="/auth" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;