import { Navigate, Outlet } from "react-router-dom";
import PrivateLayout from "../layouts/PrivateLayout";
// import { useAuth } from '../hooks/useAuth';
// import { EnvConfig } from "../config/env.config";

const PrivateRoute = () => {
  // console.log('EnvConfig =: ', EnvConfig.isDevelopment)
  // return isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />;
  return (
    <PrivateLayout>
      <Outlet />
    </PrivateLayout>
  );
};

export default PrivateRoute;
