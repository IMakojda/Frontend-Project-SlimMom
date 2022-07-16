import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: {
    name: '',
    email: '',
    avatarURL: '',
    height: null,
    age: null,
    currentWeight: null,
    desiredWeight: null,
    bloodType: null,
  },
  token: null,
  isLoggedIn: false,
  isCurrentUserRefresh: false,
  loaderShow:false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {

    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.loaderShow=false
    },
    [authOperations.register.pending](state){state.loaderShow=true;},
    [authOperations.register.rejected](state){
      state.loaderShow=false;
    },

    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.pending](state){state.loaderShow=true;},
    [authOperations.logIn.rejected](state){state.loaderShow=false;},

    [authOperations.logOut.fulfilled](state, action) {},
    [authOperations.logOut.pending](state){state.loaderShow=true;},
    [authOperations.logOut.rejected](state){state.loaderShow=false;},

    // [authOperations.refreshUser.pending](state) {

    // },

    // [authOperations.refreshUser.fulfilled](state, action) {

    // },

    // [authOperations.refreshUser.rejected](state, action) {

    // },
  },
});

export default authSlice.reducer;
