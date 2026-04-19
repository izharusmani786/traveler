import { cityApi } from "./axiosInstance";

export const fetchCities = async (query) => {
  try {
    const data = await cityApi.get("/cities", {
      params: {
        namePrefix: query,
        limit: 5,
        sort: "-population",
      },
    });

    return data.data || [];
  } catch {
    return [];
  }
};