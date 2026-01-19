"use client";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import StatCard from "./components/StatCard";
import ForecastTable from "./components/ForecastTable";

export default function Home() {
  const [selectedCity, setSelectedCity] = useState(null);
  return (<>
      {/* Header */}
      <div className="pt-6 sm:pt-8 lg:pt-10 px-2 sm:px-5 pb-4 sm:pb-5">
        <div className="mx-auto max-w-6xl w-full flex flex-wrap justify-between items-center gap-3">
          <img src="/images/weatherAppLogo.png" alt="Weather App" className="w-[120px] sm:w-[144px] h-auto"/>
          <div className="flex items-center">
            <h4 className="font-bold mr-3 sm:mr-5 text-[16px] sm:text-[18px]">°C</h4>
            <img
              src="/images/thermo.png"
              className="mr-0 sm:mr-5 w-[20px] sm:w-[25px] h-[20px] sm:h-[25px]"
            />
          </div>
        </div>
      </div>  
        <hr className="opacity-50 w-full" />

      {/* body container */}  
      <div className="pt-6 sm:pt-8 lg:pt-10 px-2 sm:px-6 md:px-8 lg:px-2 pb-12 sm:pb-16 lg:pb-20 flex flex-col gap-4 sm:gap-6 mx-auto max-w-6xl w-full">

        {/* Search bar */}
        <SearchBar onCitySelect={setSelectedCity}/>

        {/* weather location summary  */}
        <CurrentWeather />

        {/* forecast statistics - statcards */}
        {selectedCity&& 
          <StatCard cityData={selectedCity}/>
        }

        {/*  forecast Days table */}
        {selectedCity&&
          <ForecastTable cityData={selectedCity} />
        }

       </div>

      {/* footer */}
      <footer className="p-6 sm:p-8 lg:p-10 flex justify-center text-[16px] sm:text-lg lg:text-[20px] text-[#99ABBD] px-4">
        © 2026 Weather App. All rights reserved.
      </footer>
      </>
  );
}
