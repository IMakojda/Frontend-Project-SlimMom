import { createSlice } from '@reduxjs/toolkit';

import {
  fetchProducts,
  fetchDairy,
  addProduct,
  removeProduct,
} from './dairyOperations';

const initialState = {
  date: '',
  products: [],
  summary: {
    dailyRate: null,
    consumed: null,
    left: null,
    nOfNorm: null,
  },
  notRecFood: [],
  dateFind: '',
  toggle: false,
  error: null,
  productList: [],
};

const summaryForDaySlice = createSlice({
  name: 'daySummary',
  initialState,
  reducers: {
    addDate(state, action) {
      state.dateFind = action.payload;
    },
    changeToggle(state, action) {
      state.toggle = action.payload;
    },
  },
  extraReducers: {
    [fetchDairy.fulfilled]: (state, { payload }) => {
      state.products = payload.result.products;
      state.date = payload.result.date;
      state.summary.dailyRate = payload.result.summary.dailyRate;
      state.summary.consumed = payload.result.summary.consumed;
      state.summary.left = payload.result.summary.left;
      state.summary.nOfNorm = payload.result.summary.nOfNorm;
      state.notRecFood = payload.notRecFood;
      state.error = null
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.productList = payload;
      state.error = null
    },

    [addProduct.fulfilled]: (state, { payload }) => {
      state.products = payload.result.products;
      state.summary.dailyRate = payload.result.summary.dailyRate;
      state.summary.consumed = payload.result.summary.consumed;
      state.summary.left = payload.result.summary.left;
      state.summary.nOfNorm = payload.result.summary.nOfNorm;
      state.error = null
    },
    [removeProduct.fulfilled]: (state, { payload }) => {
      state.products = payload.result.products;
      state.summary.dailyRate = payload.result.summary.dailyRate;
      state.summary.consumed = payload.result.summary.consumed;
      state.summary.left = payload.result.summary.left;
      state.summary.nOfNorm = payload.result.summary.nOfNorm;
      state.error = null
    },
    [fetchProducts.rejected]: (state, { payload }) => {
      state.error = payload;
    },

    [fetchProducts.pending]: (state, _) => {
      state.error = null;
    },
    [addProduct.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [addProduct.pending]: (state, _) => {
      state.error = null;
    },
    [fetchDairy.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [fetchDairy.pending]: (state, _) => {
      state.error = null;
    },
    [removeProduct.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [removeProduct.pending]: (state, _) => {
      state.error = null;
    },
  },
});


export const { addDate, changeToggle } = summaryForDaySlice.actions;
export default summaryForDaySlice.reducer;


