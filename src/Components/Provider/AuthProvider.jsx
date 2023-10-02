import { createContext } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const authInfo = { name: "nodi sagor khal bill" };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};

/****
 The rules of crate context api
 1.crate context and export it
 2.set the provider with value
 3.use the authprovider components as children and use it in the middle of the provider
 4.
****/
