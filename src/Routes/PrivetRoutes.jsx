import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../Components/Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivetRoutes;
PrivetRoutes.propTypes = {
  children: PropTypes.node,
};
