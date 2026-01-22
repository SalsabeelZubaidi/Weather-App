// app/services/geocodingService.js
export async function getCoordinates(city) {
  const url = `https://nominatim.openstreetmap.org/search?q=${city}&format=json`;

  const res = await fetch(url, {
    headers: { "User-Agent": "WeatherApp/1.0" },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch coordinates");
  }

  const data = await res.json();

  if (!data.length) {
    throw new Error("City not found");
  }
  
  console.log("DATA", data)
  return {
    lat: data[0].lat,
    lon: data[0].lon,
    display_name: data[2].display_name, //i chose [2] because its the only one that has the value of city and country only
  };
}
