import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  searchProduct,
    getDairy,
    addProductForUser,
    deleteProductRequest,
} from "../../services/api-reguest";


const fetchDairy= createAsyncThunk(
  "product/fetchProducts",
  async function (_, { rejectWithValue }) {
    try {
      const contacts = await getDairy();
      return contacts;
    } catch (error) {
      console.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const fetchProducts= createAsyncThunk(
  "product/fetchProducts",
  async function (_, { rejectWithValue }) {
    try {
      const contacts = await searchProduct();
      return contacts;
    } catch (error) {
      console.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const addProduct = createAsyncThunk(
  "product/add",
  async function (newObject, { rejectWithValue }) {
    try {
      const products = await addProductForUser(newObject);
      return products;
    } catch (error) {
      console.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const removeProduct = createAsyncThunk(
  "product/delete",
  async function (id, { rejectWithValue }) {
    try {
      return await deleteProductRequest(id);
    } catch (error) {
      console.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);


export {
    fetchProducts,
    fetchDairy,
    addProduct,
    removeProduct };
