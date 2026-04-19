import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAttractions } from "../../api/attractionsApi";

const initialState = {
    data: [],
    loading: false,
    error: null,
};

export const fetchAttractions = createAsyncThunk(
    "attractions/fetchAttractions",
    async ({ lat, lon }) => {
        const res = await getAttractions(lat, lon);
        return res.results;
    }
);

const attractionsSlice = createSlice({
    name: "attractions",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchAttractions.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchAttractions.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchAttractions.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default attractionsSlice.reducer;