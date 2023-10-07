import React, { useState } from "react";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [query, setQuery] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${query}`);
  };

  return (
    <div className="Navbar w-screen h-[4rem] flex items-center justify-between absolute z-20">
      <div className="mx-[1rem] pl-[2rem]">
        <img src={logo} alt="logo" className="w-[10rem]" />
      </div>
      <form className="w-[20rem]" onSubmit={handleSubmit}>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-white sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <input
            type=""
            id="default-search"
            className="block w-full p-2 pr-[2rem] pl-[1rem] text-md font-semibold text-white border border-[#db0000] rounded-full bg-transparent dark:border-[#db0000] dark:placeholder-gray-500 dark:text-white"
            placeholder="Search your film..."
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none ">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
        </div>
      </form>
      <div className="pr-[2rem]">
        <button className="border border-[#db0000]  text-[#db0000] font-semibold rounded-full p-[0.3rem] w-[6rem]">Login</button>
        <button className="border border-[#db0000]  text-white bg-[#db0000] font-semibold rounded-full p-[0.3rem] mr-[1rem] ml-[0.5rem] w-[6rem]">Register</button>
      </div>
    </div>
  );
};
