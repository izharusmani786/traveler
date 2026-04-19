import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trips: []
};

const tripsSlice = createSlice({
    name: "trips",
    initialState,
    reducers: {
        addTrip: (state, action) => {
            state.trips.push(action.payload);
        },
        removeTrip: (state, action) => {
            state.trips = state.trips.filter(
                trip => trip.id !== action.payload
            );
        },
        toggleTrip: (state, action) => {
            const trip = state.trips.find(t => t.id === action.payload);
            if (!trip) return;
            if (trip) {
                trip.isFavorite = !trip.isFavorite;
            }
        }
    }
});

export const { addTrip, removeTrip, toggleTrip } = tripsSlice.actions;
export default tripsSlice.reducer;