import React from "react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "../pages/loginPage/loginPage";
import AdminPage from "../pages/adminPage/adminPage";
import UserOnboardingPage from "../pages/adminPage/adminPanel/userOnboardingPage";
import UserListPage from "../pages/adminPage/adminPanel/userListPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/adminpanel",
    element: <AdminPage />,
  },
  {
    path: "/userunboardingpage",
    element: <UserOnboardingPage />,
  },
  {
    path: "/userlistpage",
    element: <UserListPage />,
  },
];

const router = createBrowserRouter(routes);
function MainRoutes() {
  return <RouterProvider router={router} />;
}

export default MainRoutes;
