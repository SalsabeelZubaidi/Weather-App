"use client";
import { useEffect, useState } from "react";
import ForecastRow from "./ForecastRow";
import ForecastTableSkeleton from "./ForecastTableSkeleton";
import { fetchWeather } from "../services/weatherService";
import Lottie  from "lottie-react";
import notFoundAnim from '../../public/lottieAnimation/data.json'


export default function ForecastTable({ cityName, isCelsius }) {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
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
  if (error) return <div className="relative w-full h-[450px] overflow-hiddenn">
    {/* <Lottie
      animationData={notFoundAnim}
      loop
      autoplay
      className="absolute w-full h-full opacity-70"
    /> */}
    <h2 className="text-center font-bold text-2xl text-amber-100">Please Try Again</h2>
  </div>

  if (!cityName) return (
    <div>
    </div>
  );
// No data returned for a valid city
  if (forecastData.length === 0) return (
    <p className="mt-8 text-center">No forecast data available.</p>
  );
 
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-bold mt-10 mb-4 text-[30px]">5-Day Forecast</h3>
      <table className="w-full table-fixed rounded-xl overflow-hidden">
        <thead className="bg-[#1C2129]">
          <tr>
            <td className="p-4">Day</td>
            <td className="p-4">High / Low</td>
            <td className="p-4">Condition</td>
            <td className="p-4 hidden sm:table-cell"> </td>
          </tr>
        </thead>
        <tbody>
          {forecastData.map((day, i) => (
            <ForecastRow key={i} day={day} isCelsius={isCelsius}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}
