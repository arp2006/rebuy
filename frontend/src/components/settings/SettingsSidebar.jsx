import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext";

function SettingsSidebar() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const handleLogoutClick = () => {
    const ok = window.confirm("Are you sure you want to log out?");
    ok && logout();
  };

  return (
    <aside className="w-full md:w-64 lg:w-72 flex-shrink-0">
      <div className="bg-white rounded-xl p-4 shadow-sm sticky top-24">
        {/* <div className="flex items-center gap-3 mb-6 p-2">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHxCzY7jswFLPn-qEDdOoBCPWE1M-10JQb4nTyfXPsKun1G3s-VK9yf12iCGuwB2kBR812wNniaLHrVfemmbcnOR3_Cd8LBIzJNPxblRA3brnhqa3oDaAh6cMA1KFYOUuD0-CIR3EsHEbrufxBy3owsAPIqYK93tE0868-JlCMfj4WRX6nD4B0NihJlLUgaCYEk0NH8VaqKY0-jNW2gzYGw2BiWwnZJY3LZULKYRSP6mSONt45C9YX6Vu9EafikdANjDnDYJjPOTY")',
            }}
          />

          <div className="flex flex-col overflow-hidden">
            <h1 className="text-[#0f172a] text-base font-bold leading-normal truncate">
              Alex Johnson
            </h1>
            <p className="text-[#64748b] text-xs font-normal leading-normal truncate">
              Member since 2021
            </p>
          </div>
        </div> */}

        <nav className="flex flex-col gap-1 mb-2.5">
          <button
            type="button"
            onClick={() => navigate("/settings/account")}
            className="flex items-center gap-3 px-3 py-2.5 cursor-pointer rounded-lg text-[#0f172a] hover:bg-gray-100 transition-colors w-full text-left"
          >
            <span className="material-symbols-outlined text-[20px]">person</span>
            <span className="text-sm font-medium">Account Settings</span>
          </button>

          <button
            type="button"
            onClick={() => navigate("/settings/security")}
            className="flex items-center gap-3 px-3 py-2.5 cursor-pointer rounded-lg text-[#0f172a] hover:bg-gray-100 transition-colors w-full text-left"
          >
            <span className="material-symbols-outlined text-[20px]">lock</span>
            <span className="text-sm font-medium">Security</span>
          </button>

          <button
            type="button"
            onClick={() => navigate("/settings/appearance")}
            className="flex items-center gap-3 px-3 py-2.5 cursor-pointer rounded-lg text-[#0f172a] hover:bg-gray-100 transition-colors w-full text-left"
          >
            <span className="material-symbols-outlined text-[20px]">visibility</span>
            <span className="text-sm font-medium">Appearance</span>
          </button>

          <button
            type="button"
            onClick={() => navigate("/settings/support")}
            className="flex items-center gap-3 px-3 py-2.5 cursor-pointer rounded-lg text-[#0f172a] hover:bg-gray-100 transition-colors w-full text-left"
          >
            <span className="material-symbols-outlined text-[20px]">help</span>
            <span className="text-sm font-medium">Support</span>
          </button>
        </nav>


        <div className="border-t border-[#cfdfe7] pt-4">
          {user ?
            <button
              className="flex w-full items-center justify-center gap-2 cursor-pointer rounded-lg h-10 bg-red-500 text-white text-sm font-bold hover:text-white transition-colors"
              onClick={handleLogoutClick}
            >
              <span className="material-symbols-outlined text-[18px]">
                logout
              </span>
              <span>Log Out</span>
            </button>
            :
            <button
              className="flex w-full items-center justify-center gap-2 rounded-lg h-10 bg-[#3498DB] text-white text-sm font-bold hover:bg-[#0a6bab] transition"
              onClick={() => navigate("/login")}
            >
              <span>Login</span>
            </button>
          }
        </div>
      </div>
    </aside>
  );
}
export default SettingsSidebar;