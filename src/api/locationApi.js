import { locationApi } from "./axiosInstance";

const TOKEN_IPINFO = import.meta.env.VITE_IPINFO_TOKEN

export const getLocationByIP = async () => {
    try {
        const data = await locationApi.get(`json?token=${TOKEN_IPINFO}`);

        if (!data) {
            throw new Error("No data received");
        }

        const [lat, lon] = data.loc.split(",");

        return {
            city: data.city,
            country: data.country,        // "IN"
            countryCode: data.country,    // same
            lat: Number(lat),
            lon: Number(lon),
        };

    } catch (error) {
        console.error("Location API failed:", error);

        return {
            city: "Delhi",
            country: "India",
            countryCode: "IN",
            lat: 28.61,
            lon: 77.23,
        };
    }
};