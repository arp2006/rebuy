import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
  }, []);
  useEffect(() => {
    const listenStorage = () => setLoggedIn(!!localStorage.getItem("token"));
    window.addEventListener("storage", listenStorage);
    return () => window.removeEventListener("storage", listenStorage);
  }, []);
  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
