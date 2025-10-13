import { Navigate, Outlet } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
// import { useAuth } from '../hooks/useAuth';
// import { EnvConfig } from "../config/env.config";

const PublicRoute = () => {
  // console.log('EnvConfig =: ', EnvConfig.isDevelopment)
  // return isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />;
  return (
    <PublicLayout>
      <Outlet />
    </PublicLayout>
  );
};

export default PublicRoute;
