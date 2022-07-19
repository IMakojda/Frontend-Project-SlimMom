import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = `https://agile-cove-20040.herokuapp.com/api`;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const headers = {
  'Content-Type': 'multipart/form-data',
};
const register = createAsyncThunk(
  '/auth/register',
  async (credential, thunkAPI) => {
    try {
      // console.log(credential);
      const { data } = await axios.post('/users/signup', credential);
      // console.log(data);
      token.set(data.token);
      return data;
    } catch (error) {
      // console.log(error);
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
    await axios.get('/users/logout');
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue();
  }
});

const updateAvatar = createAsyncThunk(
  '/auth/update',
  async (credential, thunkAPI) => {
    try {
      const { data } = await axios.patch('/users/avatars', credential, {
        headers: headers,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const refreshUser = createAsyncThunk('auth/current', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistToken = state.auth.token;
  if (persistToken === null) {
    return thunkAPI.rejectWithValue();
  }
  token.set(persistToken);
  try {
    const { data } = await axios.get('/users/current');
    // console.log(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const authOperations = {
  register,
  logIn,
  logOut,
  updateAvatar,
  refreshUser,
};

export default authOperations;
