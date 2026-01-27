"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({ onCitySelect }) {
  const [query, setQuery] = useState(""); //user input from search bar

  // Amman is diapleyed by default
  // useEffect(() => {
  //   onCitySelect("Amman");
  // }, []);

  const handleSearch = () => {
    if (!query.trim()) return;
    onCitySelect(query.trim());
    setQuery("");
  };
  
  return (
    <div className="flex items-center bg-[#26303B] rounded-2xl h-12 sm:h-16 px-3 sm:px-6 w-full">
      <button className="cursor-pointer" onClick={handleSearch}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="mr-3 sm:mr-4 text-[#99ABBD] text-lg sm:text-xl"
        />
      </button>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        className="text-base sm:text-lg text-[#99ABBD] w-full py-2 px-2 rounded-2xl bg-transparent outline-none placeholder:text-[#99ABBD]/70"
        placeholder="Search for a city"
      />
    </div>
  );
}
