import React, { useContext } from "react";
import { Navigate } from "../../node_modules/react-router-dom/index";
import { Store } from "../Store";

export default function ProtectedRoutes({ children }) {
  const { state } = useContext(Store);
  const { userInfo } = state;
  return userInfo ? children : <Navigate to="/signin" />;
}
