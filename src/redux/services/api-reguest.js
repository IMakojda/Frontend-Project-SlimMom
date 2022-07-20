import axios from 'axios';

axios.defaults.baseURL = `${process.env.REACT_APP_BASE_URL}`;

export const searchProduct = async search => {
  try {
    const { data } = await axios.get(`/products?product=${search}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getDairy = async date => {
  try {
    const { data } = await axios.get(`/calc/user/${date}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const addProductForUser = async newProduct => {
  try {
    const { data } = await axios.post('/calc/user', newProduct);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteProductRequest = async ({ dataFormat, id }) => {
  try {
    const { data } = await axios.delete(`/calc/user/${dataFormat}/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
