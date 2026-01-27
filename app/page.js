"use client";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import StatCard from "./components/StatCard";
import ForecastTable from "./components/ForecastTable";
import UnitToggle from "./components/UnitToggle"
import "react-loading-skeleton/dist/skeleton.css";


export default function Home() {
  const [selectedCity, setSelectedCity] = useState(""); 
  const [checked, setChecked] = useState(false);
  const [isCelsius, setIsCelsius] = useState(true);
  

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <>
      {/* Header */}
      <div className="pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
        <div className="mx-auto max-w-9xl w-full flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-row gap-3 sm:gap-4 items-center">
            <img
              src="/images/logo.png"
              alt="Weather App"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
            <h1 className="font-bold text-lg sm:text-xl md:text-2xl leading-tight">Weather App</h1>
          </div>
          
          <div className="flex items-center">
            <UnitToggle isCelsius={isCelsius} setIsCelsius={setIsCelsius} />
            <img
              src="/images/thermo.png"
              className="w-5 h-5 sm:w-6 sm:h-6 sm:ml-2"
            />
          </div>
        </div>
      </div>

      <hr className="opacity-50 w-full" />

      {/* Body */}
      <div className="pt-6 sm:pt-8 lg:pt-10 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20 flex flex-col gap-4 sm:gap-6 mx-auto max-w-6xl w-full">
        <SearchBar onCitySelect={setSelectedCity} />
        <StatCard cityName={selectedCity} isCelsius={isCelsius} />
        <ForecastTable cityName={selectedCity} isCelsius={isCelsius}/>
      </div>

      {/* Footer */}
      <footer className="py-8 sm:py-10 lg:py-12 px-4 flex justify-center text-sm sm:text-base lg:text-lg text-[#99ABBD] text-center">
        © 2026 Weather App. All rights reserved.
      </footer>
    </>
  );
}
