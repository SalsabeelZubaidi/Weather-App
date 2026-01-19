export default function ForecastRow() {
    return <tbody>
                <tr className="border-t border-b border-[#E5E8EB]">
                  <td className="p-5 sm:p-7 text-sm sm:text-base">
                    Monday
                  </td>
                  <td className="p-5 sm:p-7 text-sm sm:text-base">
                    78F/ 65F
                  </td>
                  <td className="p-5 sm:p-7 text-sm sm:text-base">
                    Partly Cloudy
                  </td>
                  <td className="p-5 sm:p-7">
                    <img className='w-[35px] sm:w-[40px] h-[35px] sm:h-[40px]' src='/images/sun.png' alt="Weather icon" />
                  </td>
                </tr>
              </tbody>
}