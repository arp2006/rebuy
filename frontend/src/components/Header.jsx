import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7eff3] px-10 py-3 bg-white">
      <div className="cursor-pointer flex items-center gap-4 text-[#0d171b]" onClick={() => navigate("/")}>
        <div className="size-4">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
              fill="#3498DB"
            ></path>
          </svg>
        </div>
        <h2 className="text-[#0d171b] text-lg font-bold leading-tight tracking-[-0.015em]">ReDeal</h2>
      </div>
      <div className="flex flex-1 items-center justify-center px-8">
        <label className="flex flex-col min-w-40 h-10 w-full max-w-[480px]">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div className="text-[#4c809a] flex border border-[#cfdfe7] bg-slate-50 items-center justify-center pl-3 rounded-l-lg border-r-0">
              <span className="material-symbols-outlined text-base">search</span>
            </div>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d171b] focus:outline-0 focus:ring-0 border border-[#cfdfe7] bg-slate-50 focus:border-[#cfdfe7] h-full placeholder:text-[#4c809a] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal"
              placeholder="Search for items, brands, or categories..."
              value=""
            />
            <div className="flex items-center justify-center rounded-r-lg border-l-0 border border-[#cfdfe7] bg-slate-50 pr-1">
              <button className="flex min-w-[70px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-8 px-3 bg-[#3498DB] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Search</span>
              </button>
            </div>
          </div>
        </label>
      </div>
      <div className="flex items-center gap-4">
        <a className="text-[#0d171b] text-sm font-medium leading-normal" href="/create">
          Sell an Item
        </a>
        <a className="text-[#0d171b] text-sm font-medium leading-normal" href="#">
          My Account
        </a>
        <div className="flex gap-2">
          <button 
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#3498DB] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]" 
            onClick={() => navigate("/login")} 
          >
            <span className="truncate">Login</span>
          </button>
          <button 
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7eff3] text-[#0d171b] text-sm font-bold leading-normal tracking-[0.015em]"
            onClick={() => navigate("/register")} 
          >
            <span className="truncate">Register</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
