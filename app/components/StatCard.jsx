export default function StatCard(){
    const stats= [
        {
            title: "Humidity",
            value: "60%",
            label: "cloud"

        },
        {
            title: "Wind",
            value: "5mph",
            label: "wind"

        },
        {
            title: "Feels Like",
            value: "72F",
            label: "Thermometer"

        },
        
    ]

    return <div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center px-4">
            { stats.map((stat) =>(
                <div key={stat.title} className="flex flex-col items-start p-6 sm:p-8 lg:p-10 bg-[#26303B] w-full sm:w-[300px] md:w-[400px] lg:w-[455px] min-h-[180px] sm:h-[200px] rounded-2xl gap-4 ">
                    <h4 className="text-xl sm:text-[24px]"> {stat.title} </h4>
                    <h3 className="text-2xl sm:text-[28px] font-bold"> {stat.value} </h3>
                    <h5 className="text-sm sm:text-[16px] text-[#99ABBD]"> {stat.label} </h5>
                </div>
                )
            )}
            </div>
      
}