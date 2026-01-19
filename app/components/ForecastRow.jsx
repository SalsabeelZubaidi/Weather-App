export default function ForecastRow() {
    return <tbody>
                <tr className="border-t border-b border-[#E5E8EB]">
                  <td className="p-3 sm:p-6 text-xs sm:text-base wrap-break-word">
                    Monday
                  </td>
                  <td className="p-3 sm:p-6 text-xs sm:text-base wrap-break-word">
                    78F/ 65F
                  </td>
                  <td className="p-3 sm:p-6 text-xs sm:text-base wrap-break-word">
                    Partly Cloudy
                  </td>
                  <td className="p-3 sm:p-6 hidden sm:table-cell">
                    <img className='w-[35px] sm:w-[40px] h-[35px] sm:h-[40px]' src='/images/sun.png' alt="Weather icon" />
                  </td>
                </tr>
              </tbody>
}