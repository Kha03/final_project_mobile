import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  destination: '',
  checkinDate: '',
  nights: 1,
  rooms: 1,
  adults: 1,
  children: 0,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateSearch } = searchSlice.actions;
export default searchSlice.reducer;
