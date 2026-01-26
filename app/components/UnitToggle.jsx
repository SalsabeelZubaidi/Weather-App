export default function UnitToggle({ isCelsius, setIsCelsius }) {
  return (
    <div className="bg-gray-500 rounded-2xl px-5 py-1 flex gap-5 mr-5 border-3 border-gray-500 text-lg">
      <button
        onClick={() => setIsCelsius(true)}
        className={`cursor-pointer ${
          isCelsius ? "font-bold text-2xl text-yellow-300" : "opacity-20"
        }`}
      >
        °C
      </button>

      <button
        onClick={() => setIsCelsius(false)}
        className={`cursor-pointer ${
          !isCelsius ? "font-bold text-2xl text-yellow-300" : "opacity-20"
        }`}
      >
        °F
      </button>
    </div>
  );
}
