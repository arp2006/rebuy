import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Sidebar() {
  // const navigate = useNavigate();
  const [filters, setFilters] = useState({
    location: '',
    categories: [],
    priceL: '',
    priceU: ''
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const handleLocationChange = (e) => {
    setFilters({ ...filters, location: e.target.value });
  };

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = (e) => {
    const { id, checked } = e.target;
    setFilters((prev) => {
      if (checked) {
        return { ...prev, categories: [...prev.categories, id] }
      }
      else {
        return { ...prev, categories: prev.categories.filter((cat) => cat !== id) };
      }
    });
  };

  const loag = () => {
    console.log(filters);
  }

  const clearFilters = () => {
    setFilters({
      location: '',
      categories: [],
      priceL: '',
      priceU: '',
    });
  };

  const applyFilters = () => {
    const params = {};
    if (filters.location) params.location = filters.location;
    if (filters.categories.length > 0) params.categories = filters.categories.join(',');
    if (filters.priceL) params.priceL = filters.priceL;
    if (filters.priceU) params.priceU = filters.priceU;
    if (query) params.query = query;
    setSearchParams(params);
  }

  return (
    <aside className="w-1/4 pr-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-bold text-[#0d171b] mb-4">Filters</h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#0d171b]" htmlFor="location">
              Location
            </label>
            <select
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#3498DB] focus:border-[#3498DB] sm:text-sm rounded-md"
              id="location"
              name="location"
              onChange={handleLocationChange}
              value={filters.location}
            >
              <option disabled value="">Select Location</option>
              <option>Mumbai</option>
              <option>Bengaluru</option>
              <option>Hyderabad</option>
              <option>Chapra</option>
            </select>
          </div>
          <div>
            <h4 className="text-sm font-medium text-[#0d171b]">Category</h4>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input id="1" name="category" type="checkbox" className="h-4 w-4 text-[#3498DB] focus:ring-[#3498DB] border-gray-300 rounded" checked={filters.categories.includes('1')} onChange={handleCategoryChange} />
                <label htmlFor="1" className="ml-2 text-sm text-[#4c809a]">Electronics</label>
              </div>
              <div className="flex items-center">
                <input id="2" name="category" type="checkbox" className="h-4 w-4 text-[#3498DB] focus:ring-[#3498DB] border-gray-300 rounded" checked={filters.categories.includes('2')} onChange={handleCategoryChange} />
                <label htmlFor="2" className="ml-2 text-sm text-[#4c809a]">Books</label>
              </div>
              <div className="flex items-center">
                <input id="3" name="category" type="checkbox" className="h-4 w-4 text-[#3498DB] focus:ring-[#3498DB] border-gray-300 rounded" checked={filters.categories.includes('3')} onChange={handleCategoryChange} />
                <label htmlFor="3" className="ml-2 text-sm text-[#4c809a]">Games</label>
              </div>
              <div className="flex items-center">
                <input id="4" name="category" type="checkbox" className="h-4 w-4 text-[#3498DB] focus:ring-[#3498DB] border-gray-300 rounded" checked={filters.categories.includes('4')} onChange={handleCategoryChange} />
                <label htmlFor="4" className="ml-2 text-sm text-[#4c809a]">Furniture</label>
              </div>
              <div className="flex items-center">
                <input id="5" name="category" type="checkbox" className="h-4 w-4 text-[#3498DB] focus:ring-[#3498DB] border-gray-300 rounded" checked={filters.categories.includes('5')} onChange={handleCategoryChange} />
                <label htmlFor="5" className="ml-2 text-sm text-[#4c809a]">Toys</label>
              </div>
              <div className="flex items-center">
                <input id="6" name="category" type="checkbox" className="h-4 w-4 text-[#3498DB] focus:ring-[#3498DB] border-gray-300 rounded" checked={filters.categories.includes('6')} onChange={handleCategoryChange} />
                <label htmlFor="6" className="ml-2 text-sm text-[#4c809a]">Apparel</label>
              </div>
              <div className="flex items-center">
                <input id="7" name="category" type="checkbox" className="h-4 w-4 text-[#3498DB] focus:ring-[#3498DB] border-gray-300 rounded" checked={filters.categories.includes('7')} onChange={handleCategoryChange} />
                <label htmlFor="7" className="ml-2 text-sm text-[#4c809a]">Musical Instruments</label>
              </div>
              <div className="flex items-center">
                <input id="8" name="category" type="checkbox" className="h-4 w-4 text-[#3498DB] focus:ring-[#3498DB] border-gray-300 rounded" checked={filters.categories.includes('8')} onChange={handleCategoryChange} />
                <label htmlFor="8" className="ml-2 text-sm text-[#4c809a]">Shoes</label>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-[#0d171b]">Price Range</h4>
            <div className="mt-2 flex items-center space-x-2">
              <input
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#3498DB] focus:ring-[#3498DB] sm:text-sm"
                placeholder="Min"
                type="number"
                onChange={handleChange}
                name="priceL"
                value={filters.priceL}
              />
              <span>-</span>
              <input
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#3498DB] focus:ring-[#3498DB] sm:text-sm"
                placeholder="Max"
                type="number"
                onChange={handleChange}
                name="priceU"
                value={filters.priceU}
              />
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              className="flex-1 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#3498DB] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
              onClick={applyFilters}
            >
              <span className="truncate">Apply</span>
            </button>
            <button
              className="flex-1 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7eff3] text-[#0d171b] text-sm font-bold leading-normal tracking-[0.015em]"
              onClick={clearFilters}
            >
              <span className="truncate">Clear</span>
            </button>
          </div>
        </div>
      </div>
      {/* <button
        className="flex-1 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7eff3] text-[#0d171b] text-sm font-bold leading-normal tracking-[0.015em]"
        onClick={loag}
      >
        <span className="truncate">test</span>
      </button> */}
    </aside>
  );
}

export default Sidebar;