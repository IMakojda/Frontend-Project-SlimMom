import { createSlice } from '@reduxjs/toolkit';
// import { combineReducers } from "redux";
// import { findDate } from "./dairyAction";

import {
  fetchProducts,
  fetchDairy,
  addProduct,
  removeProduct,
} from './dairyOperations';

const initialState = {
  // user: null,
  date: '',
  // test: {},
  products: [],
  summary: {
    dailyRate: null,
    consumed: null,
    left: null,
    nOfNorm: null,
  },
  notRecFood: [],
  dateFind: '',
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
  },
  extraReducers: {
    [fetchDairy.fulfilled]: (state, { payload }) => {
      state.products = payload.result.products;
      state.date = payload.result.date;
      state.summary.dailyRate = payload.dailyRate;
      state.summary.consumed = payload.consumed;
      state.summary.left = payload.left;
      state.summary.nOfNorm = payload.nOfNorm;
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.productList = payload;
    },

    [addProduct.fulfilled]: (state, { payload }) => {
      state.products = payload.result.products;
      state.summary.dailyRate = payload.result.dailyRate;
      state.summary.consumed = payload.result.consumed;
      state.summary.left = payload.result.left;
      state.summary.nOfNorm = payload.result.nOfNorm;
    },

    [fetchProducts.rejected]: ({ error }, { payload }) => {
      error = payload;
    },

    // [fetchProducts.pending]: () => null,
    [addProduct.rejected]: ({ error }, { payload }) => {
      error = payload;
    },
    // [addProduct.pending]: () => null,
    [fetchDairy.rejected]: ({ error }, { payload }) => {
      error = payload;
    },
    // [fetchDairy.pending]: () => null,
    [removeProduct.rejected]: ({ error }, { payload }) => {
      error = payload;
    },
    // [removeProduct.pending]: () => null,
  },
});

export const { addDate } = summaryForDaySlice.actions;
export default summaryForDaySlice.reducer;

// const getSearchProduct = createReducer([], {
//   [fetchProducts.fulfilled]: (state, action) => action.payload,

// });

// const getDairy = createReducer([], {
//   [fetchDairy.fulfilled]: (state, action) => action.payload,
// });

// const error = createReducer(null, {
//   [fetchProducts.rejected]: (_, action) => action.payload,
//   [fetchProducts.pending]: () => null,
//   [addProduct.rejected]: (_, action) => action.payload,
//   [addProduct.pending]: () => null,
//   [fetchDairy.rejected]: (_, action) => action.payload,
//   [fetchDairy.pending]: () => null,
//   [removeProduct.rejected]: (_, action) => action.payload,
//   [removeProduct.pending]: () => null,
// });

// const dateFind = createReducer("", {
//   [findDate ]: (state, action) => action.payload,
// });

// export default combineReducers({

//     daySummary: getDairy,
//     productsList: getSearchProduct,
//     dateFind,
//     error,
// });
