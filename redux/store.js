import { configureStore } from '@reduxjs/toolkit';
import hotelReducer from './slices/hotelSlice'; // Import reducer từ slice

const store = configureStore({
  reducer: {
    hotels: hotelReducer, // Reducer quản lý dữ liệu khách sạn
  },
});

export default store;
