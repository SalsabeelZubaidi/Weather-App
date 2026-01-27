export default function UnitToggle({ isCelsius, setIsCelsius }) {
  return (
    <div className="bg-gray-500 rounded-2xl px-3 sm:px-4 md:px-5 py-1 flex gap-3 sm:gap-4 md:gap-5 mr-2 sm:mr-3 md:mr-5 border-3 border-gray-500 text-sm sm:text-base md:text-lg">
      <button
        onClick={() => setIsCelsius(true)}
        className={`cursor-pointer ${
          isCelsius ? "font-bold text-xl sm:text-2xl text-yellow-300" : "opacity-20"
        }`}
      >
        °C
      </button>

      <button
        onClick={() => setIsCelsius(false)}
        className={`cursor-pointer ${
          !isCelsius ? "font-bold text-xl sm:text-2xl text-yellow-300" : "opacity-20"
        }`}
      >
        °F
      </button>
    </div>
  );
}
