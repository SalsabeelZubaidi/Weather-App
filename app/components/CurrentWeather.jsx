export default function CurrentWeather() {
    return <>
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
     </>    
}