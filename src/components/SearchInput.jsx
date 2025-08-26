import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchInput({ value, onChange, onSearch }) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type bank name or shortcode..."
        className="w-full px-4 py-3 rounded-xl bg-[#1f2937] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={onSearch}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
      >
        <FaSearch />
      </button>
    </div>
  );
}
