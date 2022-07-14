import axios from "axios";

axios.defaults.baseURL = "https://agile-cove-20040.herokuapp.com/api";

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset(token) {
//     axios.defaults.headers.common.Authorization = "";
//   },
// };

export async function getAllProducts() {
  try {
    const { data } = await axios.get("/contacts"); // прописать раут
    return data;
  } catch (error) {
    throw error;
  }
}
// export async function getDairy() {
//   try {
//     const { data } = await axios.get("/contacts"); // прописать раут
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }
export async function addProductForUser(newProduct) {
  try {
    const { data } = await axios.post("/contacts", newProduct); // прописать раут
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteProductRequest(id) {
  try {
    await axios.delete(`/contacts/${id}`); // прописать раут
    return id;
  } catch (error) {
    throw error;
  }
}

export const getCurrentUser = async (token) => {
    token.set(token);
    try {
      const { data } = await axios.get("/users/current"); // прописать раут
      return data;
    } catch (error) {
      throw error;
    }
  };