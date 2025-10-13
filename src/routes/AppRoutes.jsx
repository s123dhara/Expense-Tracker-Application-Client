import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./PublicRoutes.jsx";
import PrivateRoute from "./PrivateRoutes";
import { publicRoutes, privateRoutes } from "./Routes.config.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicRoute />}>
          {publicRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>

        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          {privateRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
