import React, { useContext } from "react";
import { Navigate } from "../../node_modules/react-router-dom/index";
import { Store } from "../Store";

export default function AdminRoute({ children }) {
  const { state } = useContext(Store);
  const { userInfo } = state;
  return userInfo && userInfo.isAdmin ? children : <Navigate to="/signin" />;
}
