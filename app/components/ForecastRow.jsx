export default function ForecastRow({ rowData }) {
  const days = rowData;

  return (
    <tbody>
      {Object.values(days.forecast).map((day, index) => (
        <tr key={index} className="border-t border-b border-[#E5E8EB]">
          <td className="p-3 sm:p-6 text-xs sm:text-base break-words">
            {day?.dayName}
          </td>
          <td className="p-3 sm:p-6 text-xs sm:text-base break-words">
            {day.tempHigh}F, {day.tempLow}F
          </td>
          <td className="p-3 sm:p-6 text-xs sm:text-base break-words">
            {day.condition}
          </td>
          <td className="p-3 sm:p-6 hidden sm:table-cell">
            <img
              src={day.tableIcon}
              className="w-[35px] sm:w-[40px] h-[35px] sm:h-[40px]"
              alt="Weather icon"
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
