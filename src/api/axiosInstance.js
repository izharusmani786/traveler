import { createApiClient } from "./apiClient";

// Weather
export const weatherApi = createApiClient(
  "https://api.openweathermap.org/data/2.5"
);

// Country
export const countryApi = createApiClient(
  "https://restcountries.com/v3.1"
);

// City
export const cityApi = createApiClient(
  import.meta.env.VITE_CITY_API_BASE_URL,
  {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_X_RAPIDAPI_HOST,
    },
  }
);

// Foursquare
export const fsqApi = createApiClient("/api/fsq", {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_FSQ_API_KEY}`,
    Accept: "application/json",
    "X-Places-Api-Version": "2025-06-17",
  },
});

export const locationApi = createApiClient(
  "/ipapi"
);