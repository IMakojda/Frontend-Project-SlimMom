import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { filterProduct } from "./productsAction";

import {
fetchProducts, 
addProduct, 
removeProduct 
} from "./productsOperations";



const getProducts = createReducer([], {
  [fetchProducts.fulfilled]: (state, action) => action.payload,
  [addProduct.fulfilled]: (state, action) => [...state, action.payload],
  [removeProduct.fulfilled]: (state, action) =>
    state.filter((el) => el.id !== action.payload),
});

const error = createReducer(null, {
  [fetchProducts.rejected]: (_, action) => action.payload,
  [fetchProducts.pending]: () => null,
  [addProduct.rejected]: (_, action) => action.payload,
  [addProduct.pending]: () => null,
  [removeProduct.rejected]: (_, action) => action.payload,
  [removeProduct.pending]: () => null,
});

const filter = createReducer("", {
  [filterProduct]: (state, action) => action.payload,
});

export default combineReducers({
    products: getProducts,
  filter,
  error,
});