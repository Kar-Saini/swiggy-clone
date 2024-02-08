import { createSlice } from "@reduxjs/toolkit";

const swiggyDataSlice = createSlice({
  name: "swiggyData",
  initialState: { cuisineDetails: [], topRestaurants: [] },
  reducers: {
    addCuisineDetails: (state, action) => {
      state.cuisineDetails = action.payload;
    },
    addTopRestaurants: (state, action) => {
      state.topRestaurants = action.payload;
    },
  },
});

export default swiggyDataSlice.reducer;
export const { addCuisineDetails, addTopRestaurants } = swiggyDataSlice.actions;
