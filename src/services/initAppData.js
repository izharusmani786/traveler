import { fetchLocation } from "../features/location/locationSlice";
import { fetchWeather } from "../features/weather/weatherSlice";
import { fetchCountryInfo } from "../features/country/countrySlice";
import { fetchAttractions } from "../features/attractions/attractionsSlice";

export const initAppData = async (dispatch) => {
    try {
        // 1. Fetch location via thunk
        const locationResult = await dispatch(fetchLocation()).unwrap();

        // 2. Extract values from result
        const { lat, lon, countryCode } = locationResult;

        // 3. Fire dependent thunks
        dispatch(fetchWeather({ lat, lon }));

        dispatch(fetchCountryInfo(countryCode));

        dispatch(fetchAttractions({ lat, lon }));

    } catch (err) {
        console.log("Fallback to default city", err);
    }
};