export default function ForecastRow({ day }) {
  const date = new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "long" }); //converts its to JS date object and change the format to show it in days name
  //now date has days value

  return (
    <tr className="border-t border-[#E5E8EB]">
      <td className="p-4">{date}</td>
      <td className="p-4">
        {Math.round(day.main.temp_max)}° / {Math.round(day.main.temp_min)}°
      </td>
      <td className="p-4 capitalize">{day.weather[0].description}</td>
      <td className="p-4 hidden sm:table-cell">
        <img
          src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
          alt="weather icon"
          className="w-10 h-10"
        />
      </td>
    </tr>
  );
}
