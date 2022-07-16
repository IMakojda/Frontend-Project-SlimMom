import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { findDate } from "./dairyAction";

import {
fetchProducts,
fetchDairy,
addProduct,
removeProduct
} from "./dairyOperations";

const getSearchProduct = createReducer([], {
  [fetchProducts.fulfilled]: (state, action) => action.payload,

});

const getDairy = createReducer([], {
  [fetchDairy.fulfilled]: (state, action) => action.payload,
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

const dateFind = createReducer("", {
  [findDate ]: (state, action) => action.payload,
});

export default combineReducers({
    daySummary: getDairy,
    productsList: getSearchProduct,
    dateFind,
    error,
});


