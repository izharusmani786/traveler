import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getWeather } from "../../api/weatherApi"; // ✅ alias

const initialState = {
    data: null,
    loading: false,
    error: null,
};

export const fetchWeather = createAsyncThunk(
    "weather/fetchWeather",
    async ({ lat, lon }) => {
        const res = await getWeather(lat, lon);

        return {
            city: res.name,
            temp: res.main.temp,
            condition: res.weather[0].main,
            icon: res.weather[0].icon,
        };
    }
);

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchWeather.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchWeather.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchWeather.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default weatherSlice.reducer;