"use client";
import JsonData from '../JsonFiles/weatherTest.json'

export default function StatCard({cityData}){
    const Json= JsonData;
    const stats= [
        {
            title: "Humidity",
            value: cityData.humidityValue,
            label: "cloud"
        },
        {
            title: "Wind",
            value: cityData.windValue,
            label: "wind"
        },
        {
            title: "Feels Like",
            value: cityData.feelsValue,
            label: "Thermometer"
        },
        
    ]

    return <>
        <div className="flex justify-center pt-12 sm:pt-16 lg:pt-24 px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-center">
                {cityData.city}, {cityData.country}
            </h1>
        </div>
            {/* forecast summary */}
        <div className="flex flex-col sm:flex-row justify-center items-center px-4 pb-8 sm:pb-12 gap-4 sm:gap-10">
            <img src={cityData.icon} className="w-12 h-12 sm:w-auto sm:h-auto"/>
            <span className="text-lg sm:text-xl md:text-[24px] text-center"> {cityData.weatherSummary } {cityData.weatherSummarydegree} <span>°F</span> </span>
        </div>

        {/* stats cards */}
        <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-7 justify-center">
            { stats.map((stat) =>(
                <div key={stat.title} className="flex flex-col items-start p-4 sm:p-6 lg:p-8 bg-[#26303B] w-full lg:max-w-[455px] min-h-[170px] sm:min-h-[190px] rounded-2xl gap-3 sm:gap-4">
                    <h4 className="text-lg sm:text-[22px]"> {stat.title} </h4>
                    <h3 className="text-2xl sm:text-[28px] font-bold leading-tight"> {stat.value} </h3>
                    <h5 className="text-sm sm:text-[16px] text-[#99ABBD]"> {stat.label} </h5>
                </div>
                )
            )}
            </div>
            </>
}