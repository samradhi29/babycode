import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/authcontext"; // Import the context

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  // If there's no user, redirect to the login page
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // If the user is logged in, render the protected component
  return children;
};

export default ProtectedRoute;
