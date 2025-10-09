import React from "react";
import Item from "../components/Item";


function Home() {
  return (
    <div className="w-3/4">

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 p-4">
        <>
          <Item
            imgLink="https://lh3.googleusercontent.com/aida-public/AB6AXuBtInCrUYgPvbhCgTSDfNQSXxM8QQRlcg1s--bLVlc_rv3NfH3HVeEp39y_fnjBzW5es2i_hzIEYwZmEtk--1M10tnJfHU7fn_W36IUHPzRq1Qed_dLUxed-HjDL-AjLczhw6S06JXx1VntqoyvEITtNN1-iULm7LuSiy4UbVf9kSZHaMaoLpwjtqh0wsQnYMO7aSUPMSV7o_9uc8zDdDuwvvVO-LN9hvnDiDWPz8ruac4wqdw8rTO2c9fsZmuFdPfGMIMwF0jpx3c"
            product="Vintage Leather Jacket"
            price="$50"
            location="New York, NY"
          />
        </>
      </div>

      <div className="flex items-center justify-center p-4">
        <a className="flex size-10 items-center justify-center" href="#">
          <span className="material-symbols-outlined text-[#0d171b]">
            chevron_left
          </span>
        </a>

        <a
          className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-white rounded-full bg-[#3498DB]"
          href="#"
        >
          1
        </a>
        <a
          className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0d171b] rounded-full"
          href="#"
        >
          2
        </a>
        <a
          className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0d171b] rounded-full"
          href="#"
        >
          3
        </a>
        <a
          className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0d171b] rounded-full"
          href="#"
        >
          4
        </a>
        <a
          className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0d171b] rounded-full"
          href="#"
        >
          5
        </a>

        <a className="flex size-10 items-center justify-center" href="#">
          <span className="material-symbols-outlined text-[#0d171b]">
            chevron_right
          </span>
        </a>
      </div>
    </div>
  );
}

export default Home;


{/* <div className="flex px-4 py-3">
        <div className="flex h-10 flex-1 items-center justify-center rounded-lg bg-[#e7eff3] p-1">
          <label
            className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-slate-50 has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#0d171b] text-[#4c809a] text-sm font-medium leading-normal"
          >
            <span className="truncate">Newest First</span>
            <input
              checked={true}
              className="invisible w-0"
              name="sort-order"
              type="radio"
              value="Newest First"
            />
          </label>
          <label
            className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-slate-50 has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#0d171b] text-[#4c809a] text-sm font-medium leading-normal"
          >
            <span className="truncate">Price: Low to High</span>
            <input
              className="invisible w-0"
              name="sort-order"
              type="radio"
              value="Price: Low to High"
            />
          </label>
          <label
            className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-slate-50 has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#0d171b] text-[#4c809a] text-sm font-medium leading-normal"
          >
            <span className="truncate">Price: High to Low</span>
            <input
              className="invisible w-0"
              name="sort-order"
              type="radio"
              value="Price: High to Low"
            />
          </label>
        </div>
      </div> */}