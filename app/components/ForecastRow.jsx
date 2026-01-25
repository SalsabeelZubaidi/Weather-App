export default function ForecastRow({ day }) {
  // Format the date to show weekday name
  const dayName = new Date(day.date).toLocaleDateString("en-US", {
    weekday: "long",
  });

  return (
    <tr className="border-t border-[#E5E8EB]">
      {/* Day Name */}
      <td className="p-4">{dayName}</td>

      {/* High / Low */}
      <td className="p-4">
        {Math.round(day.maxTemp)}°C / {Math.round(day.minTemp)}°C
      </td>

      {/* Weather Description */}
      <td className="p-4 capitalize">{day.weather.description}</td>

      {/* Weather Icon */}
      <td className="p-4 hidden sm:table-cell">
        <img
          src={`https://openweathermap.org/img/wn/${day.weather.icon}@2x.png`}
          alt={day.weather.description}
          className="w-10 h-10"
        />
      </td>
    </tr>
  );
}
