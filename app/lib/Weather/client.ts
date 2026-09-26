import { OPEN_METEO } from "./constants";
import { WeatherResponse } from "./types";

export async function getWeather(
  latitude: number,
  longitude: number
): Promise<WeatherResponse> {
  const url =
    `${OPEN_METEO.FORECAST_URL}` +
    `?latitude=${latitude}` +
    `&longitude=${longitude}` +
    `&current=temperature_2m,relative_humidity_2m,apparent_temperature,rain,weather_code,wind_speed_10m` +
    `&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max` +
    `&forecast_days=7` +
    `&timezone=auto`;

  const response = await fetch(url, {
    next: {
      revalidate: 900,
    },
  });

  if (!response.ok) {
    throw new Error("Weather API failed");
  }

  return response.json();
}