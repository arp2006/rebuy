import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";  // adjust path

function Account() {
  const { setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');  // Remove JWT token
    setLoggedIn(false);                // Update login state in context
    navigate('/login');                // Redirect to login page
  };

  return (
    <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-black rounded">
      Logout
    </button>
  );
}

export default Account;
