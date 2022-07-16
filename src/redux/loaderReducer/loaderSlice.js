import { createSlice } from "@reduxjs/toolkit";
import authOperations from '../auth/authOperations';
import calcOperation from '../calculatorSlice/calcOperation';

const {register,logIn}=authOperations;
const {calc}=calcOperation;

export const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    show: false,
  },
  // reducers: {
  //   showLoader: (state) => {
  //     state.show = true;
  //   },
  //   hideLoader: (state) => {
  //     state.show = false;
  //   },
  //   // toggleLoader: (state) => {
  //   //   state.show = !state.show;
  //   // }
  // },
  extraReducers:{
    [register.pending]:()=>true,
    [register.fulfilled]:()=>false,
    [register.rejected]:()=>false,

    [logIn.pending]:()=>true,
    [logIn.fulfilled]:()=>false,
    [logIn.rejected]:()=>false,

    [calc.pending]:()=>true,
    [calc.fulfilled]:()=>false,
    [calc.rejected]:()=>false,
  },
});

export const { showLoader, hideLoader } = loaderSlice.actions;
export const selectorShowLoader=state=>state.loader.show;
export default loaderSlice.reducer;
