import { createSlice } from '@reduxjs/toolkit';
import calcOperation from './calcOperation';

const calcSlice = createSlice({
  name: 'calculator',
  initialState: {
    userData: { dailyRate: '000', notRecFood: [] },
    userInfo: {
      height: null,
      age: null,
      currentWeight: null,
      desiredWeight: null,
      bloodType: '1',
    },
    loaderShow: false,
    // height: '',
    // age: '',
    // currentWeight: '',
    // desiredWeight: '',
    // bloodType: '1',
  },
  extraReducers: {
    [calcOperation.calc.fulfilled](state, action) {
      state.userData = action.payload.usData;
      state.userInfo = action.payload.usInfo;
      state.loaderShow = false;
    },
    [calcOperation.calc.pending](state) {
      state.loaderShow = true;
    },
    [calcOperation.calc.rejected](state) {
      state.loaderShow = false;
    },

    [calcOperation.calcUserUpdate.fulfilled](state, action) {
      state.userData = action.payload;
      state.loaderShow = false;
    },
    [calcOperation.calcUserUpdate.pending](state) {
      state.loaderShow = true;
    },
    [calcOperation.calcUserUpdate.rejected](state) {
      state.loaderShow = false;
    },
  },

  reducers: {
    updateUser: (state, action) => {
      state.userInfo.height = action.payload.height;
      state.userInfo.age = action.payload.age;
      state.userInfo.desiredWeight = action.payload.desiredWeight;
      state.userInfo.bloodType = action.payload.bloodType;
      state.userInfo.currentWeight = action.payload.currentWeight;
    },
  },
});

export default calcSlice.reducer;

export const { updateUser } = calcSlice.actions;
