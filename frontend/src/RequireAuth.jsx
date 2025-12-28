import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function RequireAuth() {
  const { user, loading } = useContext(AuthContext);
  console.log("REQUIRE AUTH:", { user, loading });
  if (loading) {
    console.log("REQUIRE AUTH → redirect");
    return null; // or a spinner
  }

  if (!user) {
    console.log("REQUIRE AUTH → redirect");
    return <Navigate to="/" replace />;
  }

  console.log("REQUIRE AUTH → allow");
  return <Outlet />;
}
