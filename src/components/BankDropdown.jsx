import React from "react";

export default function BankDropdown({ results, onSelect, query, loading }) {
  if (!query) return null;

  return (
    <div className="absolute z-10 mt-2 w-full bg-[#1f2937] rounded-xl shadow-lg max-h-60 overflow-y-auto">
      {loading ? (
        <div className="p-3 text-gray-400 text-center">Searching...</div>
      ) : results.length === 0 ? (
        <div className="p-3 text-gray-400 text-center">Bank not found</div>
      ) : (
        results.map((bank) => (
          <div
            key={bank.shortcode}
            className="flex items-center gap-3 p-3 cursor-pointer hover:bg-[#2d3748]"
            onClick={() => onSelect(bank)}
          >
            <img
              src={bank.logo}
              alt={bank.name}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-white font-medium">{bank.name}</p>
              <p className="text-gray-400 text-sm">{bank.shortcode}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
