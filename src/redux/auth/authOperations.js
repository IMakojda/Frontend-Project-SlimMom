import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = `https://agile-cove-20040.herokuapp.com/`;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};
const register = createAsyncThunk(
  '/auth/register',
  async (credential, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credential);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const logIn = createAsyncThunk('/auth/login', async (credential, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credential);
    token.set(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const logOut = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue();
  }
});

// const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
//   const state = thunkAPI.getState();
//   const persistToken = state.auth.token;
//
//   if (persistToken === null) { return thunkAPI.rejectWithValue() }
//   token.set(persistToken);
//   try {
//     const { data } = await axios.get('users/current');
//     return data
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error)
//   }
//
// })

const authOperations = {
  register,
  logIn,
  logOut,
  // refreshUser,
};

export default authOperations;
