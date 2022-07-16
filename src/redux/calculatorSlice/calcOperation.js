import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = `https://agile-cove-20040.herokuapp.com/api`;

const calc = createAsyncThunk(
  '/calc',
  async (credential, thunkAPI) => {
    try {
      const { data } = await axios.post('/calc', credential);

      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const calcOperation={
  calc
}
export default calcOperation;

