"use client";
import { useEffect, useState } from "react";
import { fetchWeather } from "../services/weatherService";
import StatCardSkeleton from "./StatCardSkeleton";

export default function StatCard({ cityName }) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getWeather() {
      setLoading(true);
      setError("");

      try {
        const { current } = await fetchWeather(cityName, 1);
        setWeatherData(current);
      } catch (err) {
        console.error(err);
        setError("Unable to fetch weather");
      } finally {
        setLoading(false);
      }
    }

    if (cityName) getWeather();
  }, [cityName]);

  if (loading) return <StatCardSkeleton />;
  if (error) return <p className="text-center mt-8 text-red-500">{error}</p>;
  if (!weatherData) return <p>No data for this city</p>;

  const stats = [
    { 
      title: "Humidity", 
      value: `${Math.round(weatherData.humidity)}%`, 
      label: "cloud" 
    },
    { 
      title: "Wind", 
      value: `${Math.round(weatherData.wind)} mph`, 
      label: "wind" 
    },
    { 
      title: "Feels Like", 
      value: `${Math.round(weatherData.feels_like)}°C`, 
      label: "Thermometer" 
    }
  ];

  return (
    <>
      <div className="flex justify-center pt-5 sm:pt-16 lg:pt-10 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-center">
          {weatherData.location.name}, {weatherData.location.country}
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center px-4 pb-8 sm:pb-12 gap-4 sm:gap-10">
        <img
          src={weatherData.weather.icon}
          className="w-12 h-12 sm:w-auto sm:h-auto"
          alt="weather icon"
        />
        <span className="text-lg sm:text-xl md:text-[24px] text-center">
          {weatherData.weather.description} with a temperature of {Math.round(weatherData.temp)}°C
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-7 justify-center">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="flex flex-col items-start p-4 sm:p-6 lg:p-8 bg-[#26303B] w-full lg:max-w-[455px] min-h-[170px] sm:min-h-[190px] rounded-2xl gap-3 sm:gap-4"
          >
            <h4 className="text-lg sm:text-[22px]">{stat.title}</h4>
            <h3 className="text-2xl sm:text-[28px] font-bold leading-tight">{stat.value}</h3>
            <h5 className="text-sm sm:text-[16px] text-[#99ABBD]">{stat.label}</h5>
          </div>
        ))}
      </div>
    </>
  );
}
