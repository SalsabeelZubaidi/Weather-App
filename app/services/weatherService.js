export async function fetchWeather(city, days = 5) {
  try {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const url = `${origin}/api/weather?city=${city}&days=${days}`;
    console.log('Fetching weather from:', url);
    
    const res = await fetch(url);
    console.log('Response status:', res.status);
    console.log('Response ok:', res.ok);

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      console.error('Error response:', errorData);
      throw new Error(`Failed to fetch weather data: ${res.status} - ${errorData.error || 'Unknown error'}`);
    }

    const data = await res.json();
    console.log('Weather data received:', data);

    const forecast = data.forecast.forecastday.map(day => ({
      date: day.date,
      minTemp: day.day.mintemp_c,
      maxTemp: day.day.maxtemp_c,
      weather: {
        description: day.day.condition.text,
        icon: day.day.condition.icon,
      },
    }));

    const current = {
      temp: data.current.temp_c,
      humidity: data.current.humidity,
      wind: data.current.wind_kph,
      feels_like: data.current.feelslike_c,
      weather: {
        description: data.current.condition.text,
        icon: data.current.condition.icon,
      },
      location: {
        name: data.location.name,
        region: data.location.region,
        country: data.location.country,
      }
    };

    return { forecast, current };
  } catch (err) {
    console.error('Weather service error:', err);
    throw err;
  }
}
