import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { filterProduct } from "./dairyAction";

import {
fetchProducts, 
fetchDairy,
addProduct, 
removeProduct 
} from "./dairyOperations";



const getDairy = createReducer([], {
  [fetchProducts.fulfilled]: (state, action) => action.payload,
  [addProduct.fulfilled]: (state, action) => [...state, action.payload],
  [fetchDairy.fulfilled]: (state, action) => action.payload,
  [removeProduct.fulfilled]: (state, action) =>
    state.filter((el) => el.id !== action.payload),
});

const error = createReducer(null, {
  [fetchProducts.rejected]: (_, action) => action.payload,
  [fetchProducts.pending]: () => null,
  [addProduct.rejected]: (_, action) => action.payload,
  [addProduct.pending]: () => null,
  [fetchDairy.rejected]: (_, action) => action.payload,
  [fetchDairy.pending]: () => null,
  [removeProduct.rejected]: (_, action) => action.payload,
  [removeProduct.pending]: () => null,
});

const filter = createReducer("", {
  [filterProduct]: (state, action) => action.payload,
});

export default combineReducers({
    daySummary: getDairy,
  filter,
  error,
});