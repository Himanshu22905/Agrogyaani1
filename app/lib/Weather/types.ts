export interface WeatherResponse {
  latitude: number;
  longitude: number;
  timezone: string;

  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    rain: number;
    weather_code: number;
    wind_speed_10m: number;
  };

  daily: {
    time: string[];

    weather_code: number[];

    temperature_2m_max: number[];

    temperature_2m_min: number[];

    sunrise: string[];

    sunset: string[];

    uv_index_max: number[];

    precipitation_probability_max: number[];
  };
}