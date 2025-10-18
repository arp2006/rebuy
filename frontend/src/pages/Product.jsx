import React from "react";

function Product(props) {
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        <a className="text-[#4c809a] text-sm font-medium leading-normal" href="#">
          Home
        </a>
        <span className="text-[#4c809a] text-sm font-medium leading-normal">/</span>
        <a className="text-[#4c809a] text-sm font-medium leading-normal" href="#">
          Electronics
        </a>
        <span className="text-[#4c809a] text-sm font-medium leading-normal">/</span>
        <span className="text-[#0d171b] text-sm font-medium leading-normal">
          iPhone 12 Pro Max
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="w-full gap-2 overflow-hidden rounded-lg grid grid-cols-[2fr_1fr] grid-rows-2">
            <div
              className="w-full bg-center bg-no-repeat bg-cover aspect-square rounded-l-lg row-span-2"
              data-alt="Front view of the iPhone 12 Pro Max in Pacific Blue."
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7H4y68pKpwpGG38N7RjcKOu90irkWGGma7WbMcvKbFYqNW_hBfzXTRjxc_asiFfgb8keVM3zog3PVJ5Cy_fuJIZXlp3CWAO3Tb9fAriYprIAYr6CKN2L7TtHVoKOW2RqVIwaw1qSJCcrbe0ptdIuHp27ffiI-ccNJ4ecL1lGmyBl8oP3vuegwZYGJpdIsApeYmE3NPz8nJX0QgSQLDo6yd0LRBFUusOG5ks9XrpyTQU320hB9DdGZmHyckv1Bm6eNP7xS9yTNF0A")',
              }}
            ></div>
            <div
              className="w-full bg-center bg-no-repeat bg-cover aspect-square rounded-tr-lg"
              data-alt="Angled side view of the iPhone 12 Pro Max showing the camera bump."
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBhDiLYgKY_a-sHRUHy9FS1BHRaQsfPJU16fwTG746c3vgNpNxV68ICNlPsu6YmjMfZohxDf7tjd19F3ExyKg5BoPOKGF5iHpv9yrLQgoVDzVRLGSEr_Bxx_B1OCQwb14eoRrEH57jLC9xzII9pDqq78mjwTm3qVjWkGZWMs2IqMfDaCN1EAp-GDVzhza8tVfz1d65whNOqR4Z0xvlXQpDLeXn-r3KtZsOsXX81FKDniWwkMgwOJuUAsMkO4eXZYO51NpJrsbJAhI4")',
              }}
            ></div>
            <div
              className="w-full bg-center bg-no-repeat bg-cover aspect-square rounded-br-lg"
              data-alt="Close-up of the iPhone 12 Pro Max screen showing the display quality."
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-RT0UfNvxOjQ68iKNm9xTHCegwr3lS5ja3xRgIix_7O8nc_CBcnibrwutNu6Kua7B-Zoa2ttuCTNetce_yfGUsdpy_oPDUJ19Km8xXNTZTzWSLJhsj0L8RiKuTl9n7iWtciFy2Doc9io7YJUvDzO5pwBVcKzmAQe0FXc-z9Xft748nl6hsW19tgeDNOO2Me6TSGSMqCNDG8xEhEzlrpmrHgNM61R6cmsMsD2AXopRExq3BNeWNH7kRN7QFcHGWlARn3PpgcOXgjA")',
              }}
            ></div>
          </div>
          <div className="mt-2 flex justify-center gap-2">
            <button className="p-2 rounded-full bg-slate-200 text-slate-600 hover:bg-slate-300">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button className="p-2 rounded-full bg-slate-200 text-slate-600 hover:bg-slate-300">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="mt-8">
            <h1 className="text-[#0d171b] tracking-light text-[32px] font-bold leading-tight">
              iPhone 12 Pro Max 256GB - Pacific Blue
            </h1>
            <div className="mt-2 flex items-center gap-4">
              <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                Used - Good Condition
              </span>
              <div className="flex items-center gap-2 text-slate-500">
                <span className="material-symbols-outlined text-base">location_on</span>
                <span className="text-sm font-medium">
                  Pickup in San Francisco, or Shipping Available
                </span>
              </div>
            </div>
            <div className="mt-6 prose prose-slate max-w-none text-[#374151]">
              <p>
                Selling my beloved iPhone 12 Pro Max. It's been kept in a case with a
                screen protector since day one, so it's in fantastic condition with
                only minor signs of use. The Pacific Blue color is stunning.
              </p>
              <p>Key features:</p>
              <ul>
                <li>256GB storage capacity</li>
                <li>Unlocked for any carrier</li>
                <li>Battery health is at 91%</li>
                <li>Comes with the original box and a charging cable.</li>
              </ul>
              <p>
                No major scratches or dents. The screen is flawless. It works
                perfectly, I'm just upgrading to a newer model. Happy to answer any
                questions!
              </p>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <button className="flex items-center gap-2 text-slate-600 hover:text-[#0d171b] text-sm font-medium">
                <span className="material-symbols-outlined text-lg">flag</span> Report Item
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar or related content on right */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h2 className="text-[#0d171b] tracking-light text-[36px] font-bold leading-tight"> ₹750</h2>
            <div className="mt-4 flex flex-col gap-3">
              <button className="w-full flex items-center justify-center gap-2 min-w-[84px] max-w-[480px] cursor-pointer rounded-lg h-12 px-4 bg-[#13a4ec] text-slate-50 text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#0b8acb] transition-colors">
                <span className="material-symbols-outlined">chat_bubble</span>
                <span className="truncate">Chat with Seller</span>
              </button>
              {/* <button className="w-full flex items-center justify-center gap-2 min-w-[84px] max-w-[480px] cursor-pointer rounded-lg h-12 px-4 bg-slate-200 text-slate-900 text-base font-bold leading-normal tracking-[0.015em] hover:bg-slate-300 transition-colors">
                <span className="material-symbols-outlined">favorite_border</span>
                <span className="truncate">Add to Favorites</span>
              </button> */}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h3 className="text-[#0d171b] text-lg font-bold">Seller Information</h3>
            <div className="mt-4 flex items-center gap-4">
              
              <div>
                <p className="font-bold text-[#0d171b]">John D.</p>
              </div>
            </div>
            <a className="mt-4 inline-block text-[#13a4ec] hover:underline text-sm font-medium" href="#">
              View Seller's Other Items
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
