import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCountryInfo } from "../../api/countryApi";

const initialState = {
    data: null,
    loading: false,
    error: null,
};

export const fetchCountryInfo = createAsyncThunk(
    "country/fetchCountryInfo",
    async (code) => {
        const res = await getCountryInfo(code);
        return res;
    }
);

const countrySlice = createSlice({
    name: "country",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchCountryInfo.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchCountryInfo.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchCountryInfo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default countrySlice.reducer;