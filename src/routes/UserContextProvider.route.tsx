import React from "react";
import UserProvider from "../contexts/userAuthContex";
import { Outlet } from "react-router-dom";

const UserContextProvider = () => {
  return (
    <div>
      <UserProvider>
        <Outlet />
      </UserProvider>
    </div>
  );
};

export default UserContextProvider;
