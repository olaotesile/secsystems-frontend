import React, { useState, useEffect } from "react";
import SearchInput from "../components/SearchInput";
import BankDropdown from "../components/BankDropdown";
import BankCard from "../components/BankCard";
import { getBanks } from "../services/api";

export default function BankSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedBank, setSelectedBank] = useState(null);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const timeout = setTimeout(() => {
      fetchBanks(query);
    }, 300); 

    return () => clearTimeout(timeout);
  }, [query]);

  const fetchBanks = async (text) => {
    setLoading(true);
    try {
      const data = await getBanks(text); 
      setResults(data);
    } catch (err) {
      console.error("Error fetching banks:", err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto mt-8">
      <SearchInput
        value={query}
        onChange={setQuery}
        onSearch={() => fetchBanks(query)} 
      />
      {query && (
        <BankDropdown
          results={results}
          onSelect={setSelectedBank}
          query={query}
          loading={loading}
        />
      )}
      {selectedBank && <BankCard bank={selectedBank} />}
    </div>
  );
}
