import { createSelector } from "@reduxjs/toolkit";

export const getDairy = (state) => state.dairy.products; // перепроверить
const getFilter = (state) => state.dairy.products;

export const getContactsByFilter = createSelector(
  [getDairy, getFilter],
  (products, filter) => {
    return products.filter((products) =>
    products.name.toLowerCase().includes(filter) // products.name сверить с беком
    );
  }
);