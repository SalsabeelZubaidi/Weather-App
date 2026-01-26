export default function ForecastRow({ day, isCelsius}) {
  // Format the date to show weekday name
  const dayName = new Date(day.date).toLocaleDateString("en-US", {
    weekday: "long",
  });

const unit = isCelsius ? "°C" : "°F";

  return (
    <tr className="border-t border-[#E5E8EB]">
      <td className="p-4">{dayName}</td>
      <td className="p-4">
        {isCelsius? Math.ceil(day.maxTempC) : Math.ceil(day.maxTempF)}{unit} / 
        {isCelsius? Math.floor(day.minTempC) : Math.floor(day.minTempF)}{unit}
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
