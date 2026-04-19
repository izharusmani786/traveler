import { fsqApi } from "./axiosInstance";

export const getAttractions = async (lat, lng) => {
    return await fsqApi.get("/places/search", {
      params: {
        ll: `${lat},${lng}`,
        limit: 6,
        sort: "DISTANCE",
      },
    });
};