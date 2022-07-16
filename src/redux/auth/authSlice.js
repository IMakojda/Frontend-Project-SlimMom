import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: { name: null, email: null, avatarUrl: '' },
  token: null,
  isLoggedIn: false,
  isCurrentUserRefresh: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [authOperations.logOut.fulfilled](state, action) {},

    [authOperations.updateAvatar.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    // [authOperations.refreshUser.pending](state) {

    // },

    // [authOperations.refreshUser.fulfilled](state, action) {

    // },

    // [authOperations.refreshUser.rejected](state, action) {

    // },
  },
});

export default authSlice.reducer;
