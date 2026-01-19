import ForecastRow from "./ForecastRow"

export default function ForecastTable() {
    
return <>
    <div className="flex flex-col">
        <h3 className="mt-8 sm:mt-12 lg:mt-15 mb-4 sm:mb-6 text-2xl sm:text-3xl font-bold">5-Day Foreacst</h3>
    
        <div className="px-0 sm:px-2">
            <div className="w-full">
                <table className="sm:mt-8 w-full table-fixed rounded-xl overflow-hidden">          
                    <thead className="border border-gray-700 bg-[#1C2129]">
                        <tr>
                            <td className="p-3 sm:p-4 text-xs sm:text-base wrap-break-word">
                                Day
                            </td>
                            <td className="p-3 sm:p-4 text-xs sm:text-base wrap-break-word">
                                High/Low
                            </td>
                            <td className="p-3 sm:p-4 text-xs sm:text-base wrap-break-word">
                                Condition
                            </td>
                            <td className="p-3 sm:p-4 hidden sm:table-cell">
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