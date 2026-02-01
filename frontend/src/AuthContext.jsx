import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setLoading(false);
  };

  useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    setLoading(false);
    return;
  }

  fetch("http://localhost:3000/api/me", {
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(res => {
      return res.json();
    })
    .then(data => {

      if (!data?.user) {
        logout();
        return;
      }

      setUser(data.user);
      setLoading(false);
    })
    .catch(err => {
      logout();
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}