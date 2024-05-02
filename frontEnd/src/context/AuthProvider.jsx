import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: null,
    userID: null,
    role: null,
  });

  const setAuthData = (userData) => {
    setAuth((prevAuth) => ({
      ...prevAuth,
      ...userData,
    }));
  };
  return (
    <AuthContext.Provider value={{ auth, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};
