import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photos: [],
};

const photosSlice = createSlice({
  name: "photos",
  initialState: initialState,
  reducers: {
    photosSuccess: (state, action) => {
      state.photos = action.payload;
    },
  },
});

export const { photosSuccess } = photosSlice.actions;
export default photosSlice.reducer;
