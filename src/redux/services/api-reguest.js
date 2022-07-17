import axios from "axios";

axios.defaults.baseURL = "https://agile-cove-20040.herokuapp.com/api";

//для тестирования
let tokens="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDEyYTUyZDMzNDQ4Mjg2MTM2NzBmZSIsImlhdCI6MTY1ODA1MDk5MX0.nn0y0UlLN5eWtYVBR7AwCviUB7OBsUgb3HpBPUN1cws"
axios.defaults.headers.common.Authorization = `Bearer ${tokens}`;

export const searchProduct = async (search) => {
  try {
    const {data} = await axios.get(`/products?product=${search}`); // # Authorization: "Bearer {{token}}"
    return data;
  } catch (error) {
    throw error;
  }
}

export const getDairy = async (date) => {
  try {
    const {data}  = await axios.get(`/calc/user/${date}` ); // # Authorization: "Bearer {{token}}"
                                                      // Request (example):
                                                      // "/user/2022.07.13Z"
  return data;
  } catch (error) {
    throw error;
  }
}

export const addProductForUser = async (newProduct) => {
  try {
    const  {data}  = await axios.post("/calc/user", newProduct);  // # Authorization: "Bearer {{token}}"
                                                                  // RequestBody (example):
                                                                  // {
                                                                  // "date":"2022.07.13Z",
                                                                  // "productId":"5d51694802b2373622ff555c",
                                                                  // "productWeight":100
                                                                  // }
  return data;
 
  } catch (error) {
    throw error;
  }
}

export const deleteProductRequest = async (data, id) => {
  try {
    await axios.delete(`/calc/user/${data}/${id}`);  // # Authorization: "Bearer {{token}}"
                                                      // RequestBody (example):
                                                      // { 
                                                      // "date":"2022.07.13Z",
                                                      // "productId":"5d51694802b2373622ff555c"
                                                      // }
    return id;       // изменить на сообщение
  } catch (error) {
    throw error;
  }
}