import { createSlice } from '@reduxjs/toolkit';
import calcOperation from './calcOperation';

const calcSlice=createSlice({
  name:'calculator',
  initialState: { userData:null },
  extraReducers:{
    [calcOperation.calc.fulfilled](state, action) {
      state.userData=action.payload;
    }
  }
})

export default calcSlice.reducer;
