import { countryApi } from "./axiosInstance";

export const getCountryInfo = async (code) => {

    const data = await countryApi.get(`/alpha/${code}`);
    return data[0];

};