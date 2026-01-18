import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (<>

      {/* Header */}
      <div className="pt-10 pr-5 pl-5 pb-5">
        <div className="flex justify-between items-center">
          <img src="/images/weatherAppLogo.png" alt="Waether App" className="w-[144px] h-[24px]"/>
          <div className="flex items-center">
            <h4 className="font-bold mr-5 text-[18px]">°C</h4>
            <img
              src="/images/thermo.png"
              className="mr-5 w-[25px] h-[25px]"
            />
          </div>
        </div>
      </div>  
        <hr className="opacity-50 w-full" />

      {/* body container */}  
      <div className="pt-10 pr-30 pb-20 pl-30 flex flex-col gap-6">
        {/* Search bar */}
        <div className="flex items-center bg-[#26303B] rounded-2xl h-[72px] px-8">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="mr-5 text-[#99ABBD] text-xl"
          />
          <span className="text-[19px] text-[#99ABBD]">
            Search for a city
          </span>
        </div>

        {/* Location title  */}
        <div className="flex justify-center pt-24 pr-16  pl-16">
          <h1 className="text-xl font-bold text-[40px] ">
          Amman, Jordan
        </h1>
        </div>
        {/* forecast summary */}
        <div className="flex justify-center pr-16 pb-12 pl-16 items-center gap-10">
          <img src='/images/sun.png'/>
          <span className="text-[24px]"> Mostly clear with a high of 75F</span>
        </div>
        {/* foreacst statictics */}
        <div className="flex flex-row gap-8 justify-center">
          <div className="flex flex-col items-start p-10 bg-[#26303B]  w-[455px] h-[200px] rounded-2xl gap-4">
            <h4 className="text-[24px]">Humidity</h4>
            <h3 className="text-[28px] font-bold">60%</h3>
            <h5 className="text-[16px] text-[#99ABBD]">Cloud</h5>
          </div>
          <div className="flex flex-col items-start p-10 bg-[#26303B]  w-[455px] h-[200px] rounded-2xl gap-4">
            <h4 className="text-[24px]">Wind</h4>
            <h3 className="text-[28px] font-bold">5 mph</h3>
            <h5 className="text-[16px] text-[#99ABBD]">Wind</h5>
          </div>
          <div className="flex flex-col items start bg-[#26303B] p-10 w-[455px] h-[200px] rounded-2xl gap-4">
            <h4 className="text-[24px]">Feels Like</h4>
            <h3 className="text-[28px] font-bold">72F</h3>
            <h5 className="text-[16px] text-[#99ABBD]">Thermometer</h5>
          </div>
        </div>
        {/*  forecats Days table */}
        <div className="inline">
          <h3 className="mt-15 mb-[-50px] text-3xl font-bold">5-Day Foreacst</h3>
        </div>
          <table className="mt-15 rounded-xl overflow-hidden">          
          <thead className="border border-gray-700 bg-[#1C2129]">
            <tr>
                <td className="p-4">
                  Day
                </td>
                <td>
                  High/Low
                </td>
                <td>
                  Condition
                </td>
                <td>
                </td>
              </tr>
            </thead>
            <tbody className="border border-[#E5E8EB]/10 border-opa">
              <tr className="border-t border-b border-[#E5E8EB]">
                <td className="p-7">
                  Monday
                </td>
                <td>
                  78F/ 65F
                </td>
                <td>
                  Partly Cloudy
                </td>
                <td>
                  <img className='w-[40px] h-[40px]' src='/images/sun.png' />
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr className="border-t border-b border-[#E5E8EB]">
                <td className="p-7">
                  Monday
                </td>
                <td>
                  78F/ 65F
                </td>
                <td>
                  Partly Cloudy
                </td>
                <td>
                  <img className='w-[40px] h-[40px]' src='/images/sun.png' />
                </td>
              </tr>
            </tbody>  
          </table>
        </div>    

      {/* footer */}
      <footer className="p-10 flex justify-center text-[20px] text-[#99ABBD]">
        © 2026 Weather App. All rights reserved.
      </footer>
      </>
  );
}
