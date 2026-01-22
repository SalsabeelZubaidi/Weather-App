"use client";
import { useEffect, useState } from "react";
import ForecastRow from "./ForecastRow";
import { getCoordinates } from "../services/geocodingService";
import { fetchForecast } from "../services/weatherService";

export default function ForecastTable({ cityName }) {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getData() {
      setLoading(true);
      setError("");

      try {
        const { lat, lon} = await getCoordinates(cityName);

        const forecast = await fetchForecast(lat, lon);
        setForecastData(forecast);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (cityName) getData();
  }, [cityName]);

  if (loading) return <p className="mt-8 text-center">Loading forecast...</p>;
  if (error) return <p className="mt-8 text-center text-red-500">{error}</p>;

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-bold">5-Day Forecast</h3>
      <table className="w-full table-fixed rounded-xl overflow-hidden">
        <thead className="bg-[#1C2129]">
          <tr>
            <td className="p-4">Day</td>
            <td className="p-4">High / Low</td>
            <td className="p-4">Condition</td>
            <td className="p-4 hidden sm:table-cell"></td>
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
