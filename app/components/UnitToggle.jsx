export default function UnitToggle({ isCelsius, setIsCelsius }) {
  return (
    <div className="bg-gray-500/70 rounded-2xl px-3 sm:px-4 py-1 flex items-center gap-3 sm:gap-4 mr-2 sm:mr-3 border border-gray-500/70 text-sm sm:text-base">
      <button
        onClick={() => setIsCelsius(true)}
        className={`cursor-pointer ${
          isCelsius ? "font-bold text-sm lg:text-xl  text-amber-100" : "opacity-30"
        }`}
      >
        °C
      </button>

      <button
        onClick={() => setIsCelsius(false)}
        className={`cursor-pointer ${
          !isCelsius ? "font-bold text-sm lg:text-xl  text-amber-100" : "opacity-30"
        }`}
      >
        °F
      </button>
    </div>
  );
}
