import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    location: 'Mumbai',
    categories: [],
    priceL: '',
    priceU: ''
  });

  const handleLocationChange = (e) => {
    setFilters({ ...filters, location: e.target.value });
  };

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = (e) => {
    const { id, checked } = e.target;
    setFilters((prev) => {
      if(checked){
        return {...prev, categories: [...prev.categories, id ]}
      }
      else{
        return {...prev, categories: prev.categories.filter((cat) => cat !== id)};
      }
    });
  };

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
            >
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
                <input id="electronics" name="category" type="checkbox" className="h-4 w-4 text-[#3498DB] focus:ring-[#3498DB] border-gray-300 rounded" onChange={handleCategoryChange}/>
                <label htmlFor="electronics" className="ml-2 text-sm text-[#4c809a]">Electronics</label>
              </div>
              <div className="flex items-center">
                <input id="books" name="category" type="checkbox" className="h-4 w-4 text-[#3498DB] focus:ring-[#3498DB] border-gray-300 rounded" onChange={handleCategoryChange}/>
                <label htmlFor="books" className="ml-2 text-sm text-[#4c809a]">Books</label>
              </div>
              <div className="flex items-center">
                <input id="games" name="category" type="checkbox" className="h-4 w-4 text-[#3498DB] focus:ring-[#3498DB] border-gray-300 rounded" onChange={handleCategoryChange}/>
                <label htmlFor="games" className="ml-2 text-sm text-[#4c809a]">Games</label>
              </div>
              <div className="flex items-center">
                <input id="furniture" name="category" type="checkbox" className="h-4 w-4 text-[#3498DB] focus:ring-[#3498DB] border-gray-300 rounded" onChange={handleCategoryChange}/>
                <label htmlFor="furniture" className="ml-2 text-sm text-[#4c809a]">Furniture</label>
              </div>
              <div className="flex items-center">
                <input id="toys" name="category" type="checkbox" className="h-4 w-4 text-[#3498DB] focus:ring-[#3498DB] border-gray-300 rounded" onChange={handleCategoryChange}/>
                <label htmlFor="toys" className="ml-2 text-sm text-[#4c809a]">Toys</label>
              </div>
              <div className="flex items-center">
                <input id="apparel" name="category" type="checkbox" className="h-4 w-4 text-[#3498DB] focus:ring-[#3498DB] border-gray-300 rounded" onChange={handleCategoryChange}/>
                <label htmlFor="apparel" className="ml-2 text-sm text-[#4c809a]">Apparel</label>
              </div>
              <div className="flex items-center">
                <input id="musical_instruments" name="category" type="checkbox" className="h-4 w-4 text-[#3498DB] focus:ring-[#3498DB] border-gray-300 rounded" onChange={handleCategoryChange}/>
                <label htmlFor="musical_instruments" className="ml-2 text-sm text-[#4c809a]">Musical Instruments</label>
              </div>
              <div className="flex items-center">
                <input id="shoes" name="category" type="checkbox" className="h-4 w-4 text-[#3498DB] focus:ring-[#3498DB] border-gray-300 rounded" onChange={handleCategoryChange}/>
                <label htmlFor="shoes" className="ml-2 text-sm text-[#4c809a]">Shoes</label>
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
              />
              <span>-</span>
              <input
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#3498DB] focus:ring-[#3498DB] sm:text-sm"
                placeholder="Max"
                type="number"
                onChange={handleChange}
                name="priceU"
              />
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              className="flex-1 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#3498DB] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Apply</span>
            </button>
            <button
              className="flex-1 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7eff3] text-[#0d171b] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Clear</span>
            </button>
          </div>
        </div>
      </div>
      
    </aside>
  );
}

export default Sidebar;