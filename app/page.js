import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (<>

      {/* Header */}
      <div className="pt-6 sm:pt-8 lg:pt-10 px-4 sm:px-5 pb-4 sm:pb-5">
        <div className="flex justify-between items-center">
          <img src="/images/weatherAppLogo.png" alt="Waether App" className="w-[120px] sm:w-[144px] h-auto"/>
          <div className="flex items-center">
            <h4 className="font-bold mr-3 sm:mr-5 text-[16px] sm:text-[18px]">°C</h4>
            <img
              src="/images/thermo.png"
              className="mr-0 sm:mr-5 w-[20px] sm:w-[25px] h-[20px] sm:h-[25px]"
            />
          </div>
        </div>
      </div>  
        <hr className="opacity-50 w-full" />

      {/* body container */}  
      <div className="pt-6 sm:pt-8 lg:pt-10 px-4 sm:px-6 md:px-8 lg:px-30 pb-12 sm:pb-16 lg:pb-20 flex flex-col gap-4 sm:gap-6">
        {/* Search bar */}
        <div className="flex items-center bg-[#26303B] rounded-2xl h-[60px] sm:h-[72px] px-4 sm:px-8">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="mr-3 sm:mr-5 text-[#99ABBD] text-lg sm:text-xl"
          />
          <span className="text-[16px] sm:text-[19px] text-[#99ABBD]">
            Search for a city
          </span>
        </div>

        {/* Location title  */}
        <div className="flex justify-center pt-12 sm:pt-16 lg:pt-24 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-center">
          Amman, Jordan
        </h1>
        </div>
        {/* forecast summary */}
        <div className="flex flex-col sm:flex-row justify-center items-center px-4 pb-8 sm:pb-12 gap-4 sm:gap-10">
          <img src='/images/sun.png' className="w-12 h-12 sm:w-auto sm:h-auto"/>
          <span className="text-lg sm:text-xl md:text-[24px] text-center"> Mostly clear with a high of 75F</span>
        </div>
        {/* foreacst statictics */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center px-4">
          <div className="flex flex-col items-start p-6 sm:p-8 lg:p-10 bg-[#26303B] w-full sm:w-[300px] md:w-[400px] lg:w-[455px] min-h-[180px] sm:h-[200px] rounded-2xl gap-4">
            <h4 className="text-xl sm:text-[24px]">Humidity</h4>
            <h3 className="text-2xl sm:text-[28px] font-bold">60%</h3>
            <h5 className="text-sm sm:text-[16px] text-[#99ABBD]">Cloud</h5>
          </div>
          <div className="flex flex-col items-start p-6 sm:p-8 lg:p-10 bg-[#26303B] w-full sm:w-[300px] md:w-[400px] lg:w-[455px] min-h-[180px] sm:h-[200px] rounded-2xl gap-4">
            <h4 className="text-xl sm:text-[24px]">Wind</h4>
            <h3 className="text-2xl sm:text-[28px] font-bold">5 mph</h3>
            <h5 className="text-sm sm:text-[16px] text-[#99ABBD]">Wind</h5>
          </div>
          <div className="flex flex-col items-start bg-[#26303B] p-6 sm:p-8 lg:p-10 w-full sm:w-[300px] md:w-[400px] lg:w-[455px] min-h-[180px] sm:h-[200px] rounded-2xl gap-4">
            <h4 className="text-xl sm:text-[24px]">Feels Like</h4>
            <h3 className="text-2xl sm:text-[28px] font-bold">72F</h3>
            <h5 className="text-sm sm:text-[16px] text-[#99ABBD]">Thermometer</h5>
          </div>
        </div>
        {/*  forecats Days table */}
        <div className="px-4">
          <h3 className="mt-8 sm:mt-12 lg:mt-15 mb-4 sm:mb-6 text-2xl sm:text-3xl font-bold">5-Day Foreacst</h3>
        </div>
        {/* Desktop Table View */}
        <div className="hidden md:block px-4 overflow-x-auto">
          <div className="min-w-full">
            <table className="mt-4 sm:mt-8 lg:mt-15 w-full rounded-xl overflow-hidden">          
              <thead className="border border-gray-700 bg-[#1C2129]">
                <tr>
                  <td className="p-4 text-sm sm:text-base">
                    Day
                  </td>
                  <td className="p-4 text-sm sm:text-base">
                    High/Low
                  </td>
                  <td className="p-4 text-sm sm:text-base">
                    Condition
                  </td>
                  <td className="p-4">
                  </td>
                </tr>
              </thead>
              <tbody className="border border-[#E5E8EB]/10">
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
              <tbody>
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
            </table>
          </div>
        </div>
        {/* Mobile Card View */}
        <div className="md:hidden px-4 space-y-3">
          <div className="bg-[#26303B] rounded-xl p-5 border border-[#E5E8EB]/10">
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold text-base">Monday</span>
              <img className='w-[35px] h-[35px]' src='/images/sun.png' alt="Weather icon" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-[#99ABBD]">High/Low</span>
              <span className="text-base">78F/ 65F</span>
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <span className="text-sm text-[#99ABBD]">Condition</span>
              <span className="text-base">Partly Cloudy</span>
            </div>
          </div>
          <div className="bg-[#26303B] rounded-xl p-5 border border-[#E5E8EB]/10">
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold text-base">Monday</span>
              <img className='w-[35px] h-[35px]' src='/images/sun.png' alt="Weather icon" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-[#99ABBD]">High/Low</span>
              <span className="text-base">78F/ 65F</span>
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <span className="text-sm text-[#99ABBD]">Condition</span>
              <span className="text-base">Partly Cloudy</span>
            </div>
          </div>
        </div>
        </div>    

      {/* footer */}
      <footer className="p-6 sm:p-8 lg:p-10 flex justify-center text-[16px] sm:text-lg lg:text-[20px] text-[#99ABBD] px-4">
        © 2026 Weather App. All rights reserved.
      </footer>
      </>
  );
}
