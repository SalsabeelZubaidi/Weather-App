"use client";
import { useEffect, useState } from "react";
import ForecastRow from "./ForecastRow";
import ForecastTableSkeleton from "./ForecastTableSkeleton";
import { fetchWeather } from "../services/weatherService";

export default function ForecastTable({ cityName }) {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getData() {
      setLoading(true);
      setError("");

      try {
        const { forecast } = await fetchWeather(cityName, 5); 
        setForecastData(forecast);
      } catch (err) {
        console.error(err);
        setError(err.message || "Unable to fetch forecast");
      } finally {
        setLoading(false);
      }
    }

    if (cityName) getData();
  }, [cityName]);

  if (loading) return <ForecastTableSkeleton />;
  if (error) return <p className="mt-8 text-center text-red-500">{error}</p>;
  if (forecastData.length === 0)
    return <p className="mt-8 text-center">No forecast data available.</p>;

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-bold mt-10 mb-4 text-[30px]">5-Day Forecast</h3>
      <table className="w-full table-fixed rounded-xl overflow-hidden">
        <thead className="bg-[#1C2129]">
          <tr>
            <td className="p-4">Day</td>
            <td className="p-4">High / Low</td>
            <td className="p-4">Condition</td>
            <td className="p-4 hidden sm:table-cell">Icon</td>
          </tr>
        </thead>
        <tbody>
          {forecastData.map((day, i) => (
            <ForecastRow key={i} day={day} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
