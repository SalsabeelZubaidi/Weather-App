export default function ForecastRow({ day }) {
  // Format the date to show weekday name
  const dayName = new Date(day.date).toLocaleDateString("en-US", {
    weekday: "long",
  });

  return (
    <tr className="border-t border-[#E5E8EB]">
      <td className="p-4">{dayName}</td>
      <td className="p-4">
        {Math.ceil(day.maxTemp)}°C / {Math.floor(day.minTemp)}°C
      </td>

      <td className="p-4 capitalize">{day.weather.description}</td>

      <td className="p-4 hidden sm:table-cell">
        <img
          src={day.weather.icon} 
          alt={day.weather.description}
          className="w-10 h-10"
        />
      </td>
    </tr>
  );
}
