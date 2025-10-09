import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
      const storedUserId = localStorage.getItem("userId");
      setUserId(storedUserId);
    } 
    else {
      setLoggedIn(false);
      setUserId(null);
    }
  }, []);
  useEffect(() => {
    const listenStorage = () => {
      const token = localStorage.getItem("token");
      setLoggedIn(!!token);
      if (token) {
        const storedUserId = localStorage.getItem("userId");
        setUserId(storedUserId);
      }
      else {
        setUserId(null);
      }
    };
    window.addEventListener("storage", listenStorage);
    return () => window.removeEventListener("storage", listenStorage);
  }, []);
  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, userId, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
}
