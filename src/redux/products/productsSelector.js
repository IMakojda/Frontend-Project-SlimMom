import { createSelector } from "@reduxjs/toolkit";

export const getProducts = (state) => state.products.products;
const getFilter = (state) => state.products.filter;

export const getContactsByFilter = createSelector(
  [getProducts, getFilter],
  (products, filter) => {
    return products.filter((products) =>
    products.name.toLowerCase().includes(filter) // products.name сверить с беком
    );
  }
);