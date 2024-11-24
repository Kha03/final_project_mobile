import { configureStore } from '@reduxjs/toolkit';
import hotelReducer from './slices/hotelSlice'; // Import reducer từ slice
import searchReducer from './slices/searchSlice';

const store = configureStore({
  reducer: {
    hotels: hotelReducer, // Reducer quản lý dữ liệu khách sạn
    search: searchReducer,

  },
});

export default store;
