import React, { useState } from "react";
import SearchInput from "../components/SearchInput";
import BankDropdown from "../components/BankDropdown";
import BankCard from "../components/BankCard";
import { getBanks } from "../services/api";

export default function BankSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedBank, setSelectedBank] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const fetchBanks = async (text) => {
    if (!text) {
      setResults([]);
      setHasSearched(false);
      return;
    }

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

  const handleSearchClick = () => {
    setHasSearched(true); 
    setSelectedBank(null); 
    fetchBanks(query); 
  };

  const handleChange = (text) => {
    setQuery(text);
    setHasSearched(false); 
  };

  return (
    <div className="relative w-full max-w-md mx-auto mt-8">
      <SearchInput
        value={query}
        onChange={handleChange}
        onSearch={handleSearchClick}
      />
      {hasSearched && (
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
