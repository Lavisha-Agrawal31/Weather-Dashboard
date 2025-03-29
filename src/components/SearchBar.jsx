import React from "react";
import { FaSearch, FaSyncAlt, FaSun, FaMoon } from "react-icons/fa";

const SearchBar = ({ city, setCity, fetchWeather, theme, setTheme }) => {
  return (
    <div className="flex w-full max-w-md gap-2 mb-6">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && fetchWeather(city)}
        className={`flex-grow p-3 border rounded-lg transition-all duration-300 
          ${theme === "dark" ? "bg-gray-800 text-white border-gray-600 placeholder-gray-400" : "bg-white text-black border-gray-300 placeholder-gray-500"}`}
      />
      <button
        onClick={() => fetchWeather(city)}
        className="p-3 rounded-lg transition-all duration-300 bg-blue-500 text-white hover:bg-blue-600"
      >
        <FaSearch />
      </button>
      <button
        onClick={() => fetchWeather(city)}
        className="p-3 rounded-lg transition-all duration-300 bg-green-500 text-white hover:bg-green-600"
      >
        <FaSyncAlt />
      </button>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="p-3 rounded-lg transition-all duration-300 bg-gray-500 text-white hover:bg-gray-600"
      >
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
};

export default SearchBar;
