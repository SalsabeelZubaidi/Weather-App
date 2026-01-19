import jsonData from '../JsonFiles/weatherTest.json'
export default function ForecastRow({rowData}) {
    return <tbody>
                <tr className="border-t border-b border-[#E5E8EB]">
                  <td className="p-3 sm:p-6 text-xs sm:text-base wrap-break-word">
                    {rowData.day}
                  </td>
                  <td className="p-3 sm:p-6 text-xs sm:text-base wrap-break-word">
                    {rowData.tempHigh}F, {rowData.tempLow}F
                  </td>
                  <td className="p-3 sm:p-6 text-xs sm:text-base wrap-break-word">
                    {rowData.condition}
                  </td>
                  <td className="p-3 sm:p-6 hidden sm:table-cell">
                    <img className='w-[35px] sm:w-[40px] h-[35px] sm:h-[40px]' src={rowData.tableIcon} alt="Weather icon" />
                  </td>
                </tr>
              </tbody>
}