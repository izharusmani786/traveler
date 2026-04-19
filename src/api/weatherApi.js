import { weatherApi } from "./axiosInstance";

export const getWeather = async (lat, lon) => {
    return await weatherApi.get("/weather", {
      params: {
        lat,
        lon,
        appid: import.meta.env.VITE_WEATHER_API_KEY,
        units: "metric",
      },
    });
};