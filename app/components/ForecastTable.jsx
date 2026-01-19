import ForecastRow from "./ForecastRow"

export default function ForecastTable() {
    
return <>
    <div className="flex flex-col">
        <h3 className="mt-8 sm:mt-12 lg:mt-15 mb-4 sm:mb-6 text-2xl sm:text-3xl font-bold">5-Day Foreacst</h3>
    
        <div className="hidden md:block px-4 overflow-x-auto">
            <div className="min-w-full">
                <table className="sm:mt-8  w-full rounded-xl overflow-hidden">          
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
                    <ForecastRow />  
                </table>
            </div>
        </div>
    </div>
    </>
    }