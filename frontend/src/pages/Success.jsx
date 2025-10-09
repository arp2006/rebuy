import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown > 0) {
      const id = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(id);
    } else {
      navigate("/");
    }
  }, [countdown, navigate]);

  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-slate-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-col items-center mt-10">
              <div className="w-full max-w-md">
                <div className="flex flex-wrap justify-between gap-3 p-4">
                  <p className="text-[#0d171b] text-4xl font-black leading-tight tracking-[-0.033em] w-full text-center">
                    Listing Created Successfully
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 mt-6">
                  <div className="flex justify-center items-center">
                    <span className="material-symbols-outlined text-6xl text-[#13a4ec] mb-4">
                      check_circle
                    </span>
                  </div>
                  <p className="text-[#0d171b] text-lg font-medium text-center">
                    Your sales post is live!
                  </p>
                  <p className="text-[#4c809a] text-base text-center mt-2">
                    Redirecting you to the homepage in <span className="font-bold">{countdown}</span> second{countdown !== 1 ? "s" : ""}...
                  </p>
                </div>
                <div className="mt-10 flex justify-center">
                  <button
                    className="bg-[#13a4ec] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#118ac9] transition-colors"
                    onClick={() => navigate("/")}
                  >
                    Go to Home Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
