import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


axios.defaults.baseURL = `${process.env.REACT_APP_BASE_URL}`;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};
const headers = {
  'Content-type': 'application/json',
};
const register = createAsyncThunk(
  '/auth/register',
  async (credential, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credential);
      toast.success('Реєстрація пройшла успішно!', {
        position: toast.POSITION.TOP_CENTER,
      });

      token.set(data.token);
      return data;
    } catch (error) {
      toast.error('Ми не можемо успішно завершити вашу реєстрацію!', {
        position: toast.POSITION.TOP_CENTER,
      });
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
