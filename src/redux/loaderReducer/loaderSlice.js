import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    show: true
  },
  reducers: {
    showLoader: (state) => {
      state.show = true;
    },
    hideLoader: (state) => {
      state.show = false;
    },
    toggleLoader: (state) => {
      state.show = !state.show;
    }
  }
});

export const { showLoader, hideLoader } = loaderSlice.actions;
export const selectorShowLoader=state=>state.loader.show;
export default loaderSlice.reducer;
