import { createSlice } from "@reduxjs/toolkit";
import authOperations from '../auth/authOperations';

const {register,logIn}=authOperations

export const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    show: true,
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
  },
  extraReducers:{
    [register.pending]:()=>true,
    [register.fulfilled]:()=>false,
    [register.rejected]:()=>false,

    [logIn.pending]:()=>true,
    [logIn.fulfilled]:()=>true,
    [logIn.rejected]:()=>true,
  },
});

export const { showLoader, hideLoader } = loaderSlice.actions;
export const selectorShowLoader=state=>state.loader.show;
export default loaderSlice.reducer;
