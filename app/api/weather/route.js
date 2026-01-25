import { NextResponse } from "next/server";

const API_KEY = process.env.WEATHER_API_KEY; // store your key in .env.local
// console.log('API Key available:', API_KEY ? 'YES' : 'NO');

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get("city");
    const days = searchParams.get("days") || 7;

    // console.log('API route called with city:', city, 'days:', days);

    if (!city) {
      return NextResponse.json({ error: "City is required" }, { status: 400 });
    }

    const weatherUrl = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&days=${days}&q=${city}`;
    // console.log('Calling WeatherAPI:', weatherUrl.replace(API_KEY, 'HIDDEN_KEY'));

    const res = await fetch(weatherUrl);
    console.log('WeatherAPI response status:', res.status);

    if (!res.ok) {
      const errorText = await res.text();
      console.error('WeatherAPI error response:', errorText);
      throw new Error(`WeatherAPI error: ${res.status} - ${errorText}`);
    }

    const data = await res.json();
    console.log('WeatherAPI data received successfully');
    return NextResponse.json(data);
  } catch (err) {
    console.error('API route error:', err);
    return NextResponse.json({ error: err.message || "Server error" }, { status: 500 });
  }
}
