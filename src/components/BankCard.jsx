import React from "react";

export default function BankCard({ bank }) {
  return (
    <div className="flex items-center gap-4 p-4 mt-4 bg-[#1f2937] rounded-xl shadow-lg">
      <img src={bank.logo} alt={bank.name} className="w-12 h-12 rounded-full" />
      <div>
        <p className="text-white font-semibold text-lg">{bank.name}</p>
        <p className="text-gray-400 text-sm">Shortcode: {bank.shortcode}</p>
      </div>
    </div>
  );
}
