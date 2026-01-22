export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');

  if (!city) {
    return new Response(JSON.stringify({ error: 'City is required' }), { status: 400 });
  }

  try {
    // First get coordinates for the city
    const geoRes = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${city}&format=json`,
      { headers: { 'User-Agent': 'WeatherApp/1.0' } }
    );
    
    if (!geoRes.ok) {
      return new Response(JSON.stringify({ error: 'Failed to get coordinates' }), { status: geoRes.status });
    }
    
    const geoData = await geoRes.json();
    
    if (!geoData.length) {
      return new Response(JSON.stringify({ error: 'City not found' }), { status: 404 });
    }
    
    const { lat, lon } = {
      lat: geoData[0].lat,
      lon: geoData[0].lon
    };

    // Then get weather data
    const weatherRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
    );

    if (!weatherRes.ok) {
      return new Response(JSON.stringify({ error: 'Weather API error' }), { status: weatherRes.status });
    }

    const weatherData = await weatherRes.json();
    return new Response(JSON.stringify(weatherData), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Server error: ' + err.message }), { status: 500 });
  }
}
