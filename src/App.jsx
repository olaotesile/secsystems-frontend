import React from "react";
import BankSearch from "./pages/BankSearch";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#161e2b] p-4">
      <div className="w-full max-w-md">
        <h1 className="text-white text-2xl font-bold mb-6 text-center">
          Secsytems Bank Search
        </h1>
        <BankSearch />
      </div>
    </div>
  );
}
