import axios from 'axios';
import { toast } from 'react-toastify';
import { toastStyles } from '../../stlyles/toastStyled';

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
    toast.error(
      `Помилка отримання даних на вибрану дату! ${error.message}`,
      toastStyles
    );
    throw error;
  }
};

export const addProductForUser = async newProduct => {
  try {
    const { data } = await axios.post('/calc/user', newProduct);
    toast.success(`З'їдено!`, toastStyles);
    return data;
  } catch (error) {
    toast.error(`Виникла помилка! ${error.message}`, toastStyles);
    throw error;
  }
};

export const deleteProductRequest = async ({ dataFormat, id }) => {
  try {
    const { data } = await axios.delete(`/calc/user/${dataFormat}/${id}`);
    toast.success(`Видалено!`, toastStyles);
    return data;
  } catch (error) {
    toast.error(`Виникла помилка! ${error.message}`, toastStyles);
    throw error;
  }
};
