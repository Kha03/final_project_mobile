import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHotelsByLocation = createAsyncThunk(
  "hotels/fetchByLocation",
  async (location) => {
    const response = await axios.get(
      `https://6739cbeaa3a36b5a62ef989e.mockapi.io/hotels?location=${location}`
    );
    return response.data;
  }
);

const hotelSlice = createSlice({
  name: "hotels",
  initialState: {
    hotels: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotelsByLocation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHotelsByLocation.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.hotels = action.payload;
      })
      .addCase(fetchHotelsByLocation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default hotelSlice.reducer;
