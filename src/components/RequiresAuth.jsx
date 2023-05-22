import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function RequiresAuth({ children }) {
  let location = useLocation();
  const { token } = useContext(AuthContext);
  return token ? (
    children
  ) : (
    <Navigate to="/signin" state={{ from: location }} />
  );
}

export default RequiresAuth;
