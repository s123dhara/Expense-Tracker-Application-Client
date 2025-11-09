import DashboardPage from "../pages/Dashboard/DashboardPage";
import HomePage from "../pages/HomePage/Home";

import Dashboard from '../components/Dashboard'
import CategoryPage from "../pages/CategoryPage/CategoryPage";

export const publicRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
//   {
//     path: "/auth",
//     element: <AuthPage />,
//   },
  // {
  //   path: "/login",
  //   element: <LoginPage />,
  // },
];

export const privateRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/category",
    element: <CategoryPage />,
  },
];
