"use client";
import { useEffect, useState } from "react";
import ForecastRow from "./ForecastRow";
import { getCoordinates } from "../services/geocodingService";
import { fetchForecast } from "../services/weatherService";
import ForecastTableSkeleton from "./ForecastTableSkeleton";

// Helper: normalize 3-hour forecast into daily min/max
function getDailyForecast(forecastData) {
  const dailyMap = {};

  forecastData.forEach((item) => {
    const date = item.dt_txt.split(" ")[0]; // YYYY-MM-DD

    if (!dailyMap[date]) {
      dailyMap[date] = {
        date,
        minTemp: item.main.temp,
        maxTemp: item.main.temp,
        weather: item.weather[0], // pick first 3h slot for simplicity
      };
    } else {
      dailyMap[date].minTemp = Math.min(dailyMap[date].minTemp, item.main.temp);
      dailyMap[date].maxTemp = Math.max(dailyMap[date].maxTemp, item.main.temp);
    }
  });

  // convert object to sorted array
  return Object.keys(dailyMap)
    .sort()
    .map((date) => dailyMap[date]);
}

export default function ForecastTable({ cityName }) {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getData() {
      setLoading(true);
      setError("");

      try {
        // 1️⃣ Get coordinates
        const { lat, lon } = await getCoordinates(cityName);

        // 2️⃣ Fetch 3-hour forecast
        const forecast = await fetchForecast(lat, lon);

        // 3️⃣ Normalize to daily forecast with min/max
        const dailyForecast = getDailyForecast(forecast);

        setForecastData(dailyForecast);
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
