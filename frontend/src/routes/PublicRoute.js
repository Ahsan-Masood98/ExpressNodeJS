import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  return !localStorage.getItem("auth_token") ? (
    children
  ) : (
    <Navigate to="/" replace />
  );
};

export default PublicRoute;
