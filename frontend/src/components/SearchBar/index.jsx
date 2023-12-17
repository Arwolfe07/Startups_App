import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [searchName, setSearchName] = useState("");
  const dispatch = useDispatch();

  const searchHandler = () => {
    //dispatching the action creator with the payload of the input field value.
    dispatch({ type: "SET_SEARCH", value: searchName });
  };

  const changeHandler = (e) => {
    dispatch({ type: "SET_FILTER", value: e.target.value });
  };

  return (
    <form className="flex flex-col md:flex-row gap-3 sm:w-1/2 mx-auto">
      <div className="flex">
        <input
          onChange={(e) => setSearchName(e.target.value)}
          type="text"
          placeholder="Search for a Startup..."
          className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-red-500 focus:outline-none focus:border-red-500"
        />
        <button
          onClick={searchHandler}
          type="button"
          className="bg-red-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1 hover:bg-red-700"
        >
          Search
        </button>
      </div>
      <select
        id="pricingType"
        name="pricingType"
        className="cursor-pointer w-fit h-10 border-2 border-red-500 focus:outline-none focus:border-red-500 text-red-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
        onChange={changeHandler}
      >
        <option value="All" defaultValue>
          All
        </option>
        <option value="Consumer Internet">Consumer Internet</option>
        <option value="Technology">Technology</option>
        <option value="eCommerce">eCommerce</option>
      </select>
      
    </form>
  );
};

export default SearchBar;
