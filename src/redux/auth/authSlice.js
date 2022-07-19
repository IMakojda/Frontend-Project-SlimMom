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
    createdAt: '',
  },
  token: null,
  isLoggedIn: false,
  isCurrentUserRefresh: false,
  loaderShow: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.loaderShow = false;
    },
    [authOperations.register.pending](state) {
      state.loaderShow = true;
    },
    [authOperations.register.rejected](state) {
      state.loaderShow = false;
    },

    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.loaderShow = false;
    },
    [authOperations.logIn.pending](state) {
      state.loaderShow = true;
    },
    [authOperations.logIn.rejected](state) {
      state.loaderShow = false;
    },

    [authOperations.logOut.fulfilled](state) {
      state.user = {
        name: '',
        email: '',
        avatarURL: '',
        height: null,
        age: null,
        currentWeight: null,
        desiredWeight: null,
        bloodType: null,
      };
      state.token = null;
      state.isLoggedIn = false;
      state.loaderShow = false;
      state.isCurrentUserRefresh = false;
    },

    [authOperations.logOut.pending](state) {
      state.loaderShow = true;
    },
    [authOperations.logOut.rejected](state) {
      state.loaderShow = false;
    },

    [authOperations.updateAvatar.fulfilled](state, action) {
      state.user = action.payload;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [authOperations.refreshUser.pending](state) {
      state.isCurrentUserRefresh = true;
      state.loaderShow = true;
    },

    [authOperations.refreshUser.fulfilled](state, action) {
      state.isCurrentUserRefresh = false;
      state.user = action.payload;
      state.isLoggedIn = true;
      state.loaderShow = false;
    },

    [authOperations.refreshUser.rejected](state, action) {
      state.isCurrentUserRefresh = false;
      state.loaderShow = false;
    },
  },
});

export default authSlice.reducer;
