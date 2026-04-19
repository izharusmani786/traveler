import { configureStore } from "@reduxjs/toolkit";
import tripsReducer from "../features/trips/tripsSlice";
import locationReducer from "../features/location/locationSlice";
import weatherReducer from "../features/weather/weatherSlice";
import countryReducer from "../features/country/countrySlice";
import attractionsReducer from "../features/attractions/attractionsSlice";

const loadState = () => {
    try{
        const serializedState = localStorage.getItem('tripsState')
        if(!serializedState) return;

        return JSON.parse(serializedState);
    } catch (error) {
        console.error(error)
        return undefined
    }
}

const saveState = (state) => {
    try{
        const serializedState = JSON.stringify(state)
        localStorage.setItem('tripsState', serializedState)
    } catch (error) {
        console.error(error)
    }
}

export const store = configureStore({
    reducer: {
        trips: tripsReducer,
        location: locationReducer,
        weather: weatherReducer,
        country: countryReducer,
        attractions: attractionsReducer,
    },
    preloadedState: loadState()
});

store.subscribe(() => {
    saveState({
        trips: store.getState().trips
    })
})