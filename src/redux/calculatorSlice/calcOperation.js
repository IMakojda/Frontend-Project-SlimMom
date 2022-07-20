import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = `${process.env.REACT_APP_BASE_URL}`;

const calc = createAsyncThunk('/calc', async (credential, thunkAPI) => {
  try {
    const { data } = await axios.post('/calc', credential);
    return {usData: data,usInfo:credential };
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const calcUserUpdate = createAsyncThunk(
  '/calc/user',
  async (credential, thunkAPI) => {
    try {
      const { data } = await axios.put('/calc/user', credential);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const calcOperation = {
  calc,
  calcUserUpdate,
};
export default calcOperation;
