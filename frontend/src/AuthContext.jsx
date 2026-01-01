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



  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setLoggedIn(true);
  //     const storedUserId = localStorage.getItem("userId");
  //     setUserId(storedUserId);
  //   } 
  //   else {
  //     setLoggedIn(false);
  //     setUserId(null);
  //   }
  // }, []);
  // useEffect(() => {
  //   const listenStorage = () => {
  //     const token = localStorage.getItem("token");
  //     setLoggedIn(!!token);
  //     if (token) {
  //       const storedUserId = localStorage.getItem("userId");
  //       setUserId(storedUserId);
  //     }
  //     else {
  //       setUserId(null);
  //     }
  //   };
  //   window.addEventListener("storage", listenStorage);
  //   return () => window.removeEventListener("storage", listenStorage);
  // }, []);




// import React, { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
  
//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     setLoggedIn(false);
//     setLoading(false);
//   }
  
//   useEffect(() => {
//   const token = localStorage.getItem("token");
//   // console.log("BOOTSTRAP TOKEN:", token);

//   if (!token){
//     setLoading(false);
//     return;
//   }

//   fetch("http://localhost:3000/api/me", {
//     headers: { Authorization: `Bearer ${token}` }
//   })
//     .then(res => {
//       // console.log("ME RESPONSE STATUS:", res.status);
//       return res.ok ? res.json() : null;
//     })
//     .then(data => {
//       // console.log("ME RESPONSE DATA:", data);

//       if (!data || !data.id) {
//         // console.log("❌ BOOTSTRAP FAIL → LOGOUT");
//         localStorage.removeItem("token");
//         setUser(null);
//         setLoggedIn(false);
//         setLoading(false);
//         return;
//       }

//       // console.log("✅ BOOTSTRAP SUCCESS");
//       setUser(data);
//       setLoggedIn(true);
//       setLoading(false);
//     })
//     .catch(err => {
//       // console.log("ME FETCH ERROR:", err);
//       logout();
//     });
//   }, []);


//   return (
//     <AuthContext.Provider value={{ loggedIn, setLoggedIn, user, setUser, logout, loading}}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// import React, { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext(null);

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     setLoading(false);
//   };

//   useEffect(() => {
//   const token = localStorage.getItem("token");
//   console.log("AUTH BOOTSTRAP: token =", token);

//   if (!token) {
//     console.log("AUTH BOOTSTRAP: no token");
//     setLoading(false);
//     return;
//   }

//   fetch("http://localhost:3000/api/me", {
//     headers: { Authorization: `Bearer ${token}` }
//   })
//     .then(res => {
//       console.log("AUTH BOOTSTRAP: /api/me status =", res.status);
//       return res.json();
//     })
//     .then(data => {
//       console.log("AUTH BOOTSTRAP: /api/me data =", data);

//       if (!data?.user) {
//         console.log("AUTH BOOTSTRAP: no user → logout");
//         logout();
//         return;
//       }

//       console.log("AUTH BOOTSTRAP: setting user");
//       setUser(data.user);
//       setLoading(false);
//     })
//     .catch(err => {
//       console.log("AUTH BOOTSTRAP: fetch error", err);
//       logout();
//     });
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, setUser, loading, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }