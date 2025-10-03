import React from "react";
function Register() {
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
                    Create an Account
                  </p>
                </div>
                <div className="pb-3 flex justify-center">
                  <p className="text-[#0d171b] text-sm font-bold leading-normal tracking-[0.015em]">Register</p>
                </div>
                <div className="p-4 space-y-6">
                  <div className="flex flex-col gap-4">
                    <label className="flex flex-col min-w-40 flex-1">
                      <p className="text-[#0d171b] text-base font-medium leading-normal pb-2">
                        Name
                      </p>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d171b] focus:outline-0 focus:ring-0 border border-[#cfdfe7] bg-slate-50 focus:border-[#cfdfe7] h-14 placeholder:text-[#4c809a] p-[15px] text-base font-normal leading-normal"
                        placeholder="Full Name"
                        type="text"
                        value=""
                      />
                    </label>
                    <label className="flex flex-col min-w-40 flex-1">
                      <p className="text-[#0d171b] text-base font-medium leading-normal pb-2">
                        Email
                      </p>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d171b] focus:outline-0 focus:ring-0 border border-[#cfdfe7] bg-slate-50 focus:border-[#cfdfe7] h-14 placeholder:text-[#4c809a] p-[15px] text-base font-normal leading-normal"
                        placeholder="Email Address"
                        type="email"
                        value=""
                      />
                    </label>
                    <label className="flex flex-col min-w-40 flex-1">
                      <p className="text-[#0d171b] text-base font-medium leading-normal pb-2">
                        Password
                      </p>
                      <div className="flex w-full flex-1 items-stretch rounded-lg">
                        <input
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d171b] focus:outline-0 focus:ring-0 border border-[#cfdfe7] bg-slate-50 focus:border-[#cfdfe7] h-14 placeholder:text-[#4c809a] p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                          placeholder="Password"
                          type="password"
                          value=""
                        />
                        <div
                          className="text-[#4c809a] flex border border-[#cfdfe7] bg-slate-50 items-center justify-center pr-[15px] rounded-r-lg border-l-0"
                          data-icon="Eye"
                          data-size="24px"
                          data-weight="regular"
                        >
                          <span className="material-symbols-outlined">visibility</span>
                        </div>
                      </div>
                    </label>
                    <label className="flex flex-col min-w-40 flex-1">
                      <p className="text-[#0d171b] text-base font-medium leading-normal pb-2">
                        Repeat Password
                      </p>
                      <div className="flex w-full flex-1 items-stretch rounded-lg">
                        <input
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d171b] focus:outline-0 focus:ring-0 border border-[#cfdfe7] bg-slate-50 focus:border-[#cfdfe7] h-14 placeholder:text-[#4c809a] p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                          placeholder="Repeat Password"
                          type="password"
                          value=""
                        />
                        <div
                          className="text-[#4c809a] flex border border-[#cfdfe7] bg-slate-50 items-center justify-center pr-[15px] rounded-r-lg border-l-0"
                          data-icon="Eye"
                          data-size="24px"
                          data-weight="regular"
                        >
                          <span className="material-symbols-outlined">visibility</span>
                        </div>
                      </div>
                    </label>
                    <label className="flex flex-col min-w-40 flex-1">
                      <div className="flex justify-between items-center pb-2">
                        <p className="text-[#0d171b] text-base font-medium leading-normal">
                          Region
                        </p>
                        <span className="text-sm text-gray-500">Optional</span>
                      </div>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d171b] focus:outline-0 focus:ring-0 border border-[#cfdfe7] bg-slate-50 focus:border-[#cfdfe7] h-14 placeholder:text-[#4c809a] p-[15px] text-base font-normal leading-normal"
                        placeholder="Your Region"
                        type="text"
                        value=""
                      />
                    </label>
                  </div>
                  <button className="w-full bg-[#13a4ec] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#118ac9] transition-colors">
                    Create Account
                  </button>
                  <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="flex-shrink mx-4 text-gray-500 text-sm">
                      Or continue with
                    </span>
                    <div className="flex-grow border-t border-gray-300"></div>
                  </div>
                  <div className="flex gap-4 justify-center">
                    <button className="flex items-center justify-center w-12 h-12 border border-[#cfdfe7] rounded-full hover:bg-gray-100">
                      <img
                        className="w-6 h-6"
                        alt="Google logo"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRTcwR0GIJ07oFQhpDPTfJK1vo49KzhdOr2C57AK23xoeEyqazZzyyUEe2RfyE3vmKJ9rQPwCNMnk7JGHuAooV_N02xg8EEyWvZ1OdYfOT_RU5alsasiMmhnixpzy-THCzYIIVbdM7aJlH8w4w2Ml-rIXS43xxQtYTcv1-ZzuUc_UpGOj5ySjkcl_lVQUbM9btEt5TihSC4SiMlLpk8ZB9GGOs6stOV4VKMRgW11XHewXUXZJdFtrGaQVkq6P4Rb3IUIB3tPXHIBc"
                      />
                    </button>
                    <button className="flex items-center justify-center w-12 h-12 border border-[#cfdfe7] rounded-full hover:bg-gray-100">
                      <img
                        className="w-6 h-6"
                        alt="Facebook logo"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfFNQm4FRpzhvqegmBNo4hJ6MxaZWoYPQyD62PpjYcEGms6g8wOhSobDIQL8b3P_aYShsT0mUJ1QoSxVVdoIUc-skshcb1-CoHLoyP6DpmMfX8Ro3Khkg4_ybzBvhRAVb344Mf75YYU3Z0lLUxCbBWaCW_XtYMG51ea766yxl4Sds1Yj8SMfKTJj9YdDM1_5zx486yPqxezbELTrvHnLlL55wDAvLJ-NdyVW-oxonOvoocP8C6Wl_rylX0N-O9oWaURTDLlczyIRg"
                      />
                    </button>
                  </div>
                  <p className="text-center text-sm text-[#4c809a]">
                    Already have an account?{" "}
                    <a
                      className="text-[#13a4ec] font-bold hover:underline"
                      href="/login"
                    >
                      Sign In
                    </a>
                  </p>
                  <p className="text-xs text-center text-gray-500 px-4">
                    By continuing, you agree to our{" "}
                    <a className="underline" href="#">
                      Terms of Service
                    </a>{" "}
                    &amp;{" "}
                    <a className="underline" href="#">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
