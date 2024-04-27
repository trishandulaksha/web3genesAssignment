import React from "react";
import NotFound from "../pages/401/NotFound";
import AdminPage from "../pages/adminPage/adminPage";

export const isNotAdmin = (dbResponse: any) => {
  const {
    token,
    status,
    user: { type },
  } = dbResponse;

  if (!token) {
    return true;
  }
  if (status === type && type === "ADMIN") {
    return true;
  }
};
const UserProtector: React.FC<{ dbResponse: any }> = ({ dbResponse }) => {
  return isNotAdmin(dbResponse) ? <NotFound /> : <AdminPage />;
};

export default UserProtector;
