export async function fetchService(url) {
  const headers = { "User-Agent": "WeatherApp/1.0" }; // needed for Nominatim

  const res = await fetch(url, { headers });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error);
  }

  return res.json();
}
