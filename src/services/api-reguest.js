import axios from "axios";

axios.defaults.baseURL = "https://agile-cove-20040.herokuapp.com/api";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  // unset(token) {
  //   axios.defaults.headers.common.Authorization = "";
  // },
};

export const searchProduct = async ( search) => {
  // token.set(tokenUser); 
  try {
    const result = await axios.get(`/products?product=${search}`); // # Authorization: "Bearer {{token}}"
    return result;
  } catch (error) {
    throw error;
  }
}
export const getDairy = async (date) => {
  // token.set(tokenUser); 
  try {
    const { result } = await axios.get("/calc/user", date); // # Authorization: "Bearer {{token}}"
                                                      // RequestBody (example):
                                                      // { 
                                                      // "date":"2022.07.13Z"
                                                      // }
  return result;
  } catch (error) {
    throw error;
  }
}
export const addProductForUser = async (newProduct) => {
  // token.set(tokenUser); 
  try {
    const { result } = await axios.post("/calc/user", newProduct);  // # Authorization: "Bearer {{token}}"
                                                                  // RequestBody (example):
                                                                  // {
                                                                  // "date":"2022.07.13Z",
                                                                  // "productId":"5d51694802b2373622ff555c",
                                                                  // "productWeight":100
                                                                  // }
  return result;
 
  } catch (error) {
    throw error;
  }
}

export const deleteProductRequest = async (deleteProduct) => {
  // token.set(tokenUser);
  try {
    await axios.delete('/calc/user', deleteProduct);  // # Authorization: "Bearer {{token}}"
                                                      // RequestBody (example):
                                                      // { 
                                                      // "date":"2022.07.13Z",
                                                      // "productId":"5d51694802b2373622ff555c"
                                                      // }
    return deleteProduct;       // изменить на сообщение
  } catch (error) {
    throw error;
  }
}

export const getCurrentUser = async (tokenUser) => {
    token.set(tokenUser);
    try {
      const { result } = await axios.get("/users/current"); // # Authorization: "Bearer {{token}}"
      return result;
    } catch (error) {
      throw error;
    }
  };