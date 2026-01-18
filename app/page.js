import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div className="px-40 py-12">
      {/* main container */}
      <div className="mx-auto w-[888px] flex flex-col gap-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <img src="/images/weatherAppLogo.png" alt="Waether App"/>

          <div className="flex items-center">
            <h4 className="font-bold mr-5 text-[18px]">°C</h4>
            <img
              src="/images/thermo.png"
              className="mr-5 w-[25px] h-[25px]"
            />
          </div>
        </div>

        <hr className="opacity-50" />

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
        <div className="flex justify-center pt-24 pr-16 pb-12 pl-16">
          <h1 className="text-xl font-bold text-[32px] ">
          Amman, Jordan
        </h1>
        </div>
        {/* forecast summary */}
        <div className="flex justify-center pr-16 pb-12 pl-16 items-center gap-10">
          <img src='/images/sun.png'/>
          <span className="text-[24px]"> Mostly clear with a high of 75F</span>
        </div>
        

      </div>
    </div>
  );
}
