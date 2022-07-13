import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isCurrentUserRefresh: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {},

    [authOperations.logIn.fulfilled](state, action) {},

    [authOperations.logOut.fulfilled](state, action) {},

    // [authOperations.refreshUser.pending](state) {

    // },

    // [authOperations.refreshUser.fulfilled](state, action) {

    // },

    // [authOperations.refreshUser.rejected](state, action) {

    // },
  },
});

export default authSlice.reducer;
