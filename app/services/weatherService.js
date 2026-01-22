// app/services/weatherService.js
export async function fetchForecast(lat, lon) {
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  if (!API_KEY) throw new Error("Weather API key not set");

  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    console.error("Forecast API error:", text);
    throw new Error("Failed to fetch forecast");
  }

  const data = await res.json();

  // we filter 1 forecast per day beacuse openwaethermap gives a forecast for every 3 hours
  //  (0:00, 3:00, 6:00 and so on)
  const daily = data.list.filter(item => item.dt_txt.includes("12:00:00")); //only take it at 12pm each day
  return daily;
}
