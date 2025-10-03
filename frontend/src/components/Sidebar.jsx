import React from "react";

function Sidebar() {
  return (
    <aside class="w-1/4 pr-8">
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <h3 class="text-lg font-bold text-[#0d171b] mb-4">Filters</h3>
        <div class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-[#0d171b]" for="location">Location</label>
            <select
              class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#3498DB] focus:border-[#3498DB] sm:text-sm rounded-md"
              id="location" name="location">
              <option>New York, NY</option>
              <option>Los Angeles, CA</option>
              <option>London, UK</option>
              <option>Berlin, DE</option>
            </select>
          </div>
          <div>
            <h4 class="text-sm font-medium text-[#0d171b]">Category</h4>
            <div class="mt-2 space-y-2">
              <div class="flex items-center">
                <input
                  class="h-4 w-4 text-[#3498DB] focus:ring-[#3498DB] border-gray-300 rounded"
                  id="electronics" name="category" type="checkbox" />
                <label class="ml-2 text-sm text-[#4c809a]" for="electronics">Electronics</label>
              </div>
              <div class="flex items-center">
                <input
                  class="h-4 w-4 text-[#3498DB] focus:ring-[#3498DB] border-gray-300 rounded"
                  id="fashion" name="category" type="checkbox" />
                <label class="ml-2 text-sm text-[#4c809a]" for="fashion">Fashion</label>
              </div>
              <div class="flex items-center">
                <input
                  class="h-4 w-4 text-[#3498DB] focus:ring-[#3498DB] border-gray-300 rounded"
                  id="home" name="category" type="checkbox" />
                <label class="ml-2 text-sm text-[#4c809a]" for="home">Home &amp; Garden</label>
              </div>
            </div>
          </div>
          <div>
            <h4 class="text-sm font-medium text-[#0d171b]">Price Range</h4>
            <div class="mt-2 flex items-center space-x-2">
              <input
                class="w-full border-gray-300 rounded-md shadow-sm focus:border-[#3498DB] focus:ring-[#3498DB] sm:text-sm"
                placeholder="Min" type="number" />
              <span>-</span>
              <input
                class="w-full border-gray-300 rounded-md shadow-sm focus:border-[#3498DB] focus:ring-[#3498DB] sm:text-sm"
                placeholder="Max" type="number" />
            </div>
          </div>
          <div class="flex space-x-2">
            <button
              class="flex-1 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#3498DB] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
              <span class="truncate">Apply</span>
            </button>
            <button
              class="flex-1 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7eff3] text-[#0d171b] text-sm font-bold leading-normal tracking-[0.015em]">
              <span class="truncate">Clear</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;