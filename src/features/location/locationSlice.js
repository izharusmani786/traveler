import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLocationByIP } from "../../api/locationApi";

const initialState = {
    city: null,
    country: null,
    countryCode: null,
    lat: null,
    lon: null,
    loading: false,
    error: null,
};

export const fetchLocation = createAsyncThunk(
    "location/fetchLocation",
    async () => {
        const data = await getLocationByIP();
        return data;
    }
);

const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        clearLocation: (state) => {
            state.city = null;
            state.country = null;
            state.countryCode = null;
            state.lat = null;
            state.lon = null;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchLocation.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchLocation.fulfilled, (state, action) => {
            state.loading = false;
            state.city = action.payload.city;
            state.country = action.payload.country;
            state.countryCode = action.payload.countryCode;
            state.lat = action.payload.lat;
            state.lon = action.payload.lon;
        })
        .addCase(fetchLocation.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export const { clearLocation } = locationSlice.actions;

export default locationSlice.reducer;