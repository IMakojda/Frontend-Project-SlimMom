import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import { useMediaQuery } from 'react-responsive';
import debounce from 'lodash.debounce';
import { toast } from 'react-toastify';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { layoutStyles } from '../../../stlyles/layoutStyles';
import Button from '../../button/Button.styled';
import { ImPlus } from 'react-icons/im';
import { changeToggle } from '../../../redux/dairy/dairyReducer';
import { fetchProducts, addProduct } from '../../../redux/dairy/dairyOperations';
import { getProducts, getDate } from '../../../redux/dairy/dairySelector';
import {FormikWrapperStyles, useStyles} from './ProductForm.styled'

export default function ProductForm(styles) {
  const [value, setValue] = useState('');
  const [productId, setProductId] = useState('');
  const [productWeight, setWeight] = useState('');

  const dispatch = useDispatch();

  const products = useSelector(getProducts); // список найденных продуктов
  const date = useSelector(getDate); // форматированная дата на которую добавляем проукт

  const findProduct = value => {
    dispatch(fetchProducts(value));
  };

  const debouncedFindProduct = debounce(findProduct, 400);

  function onSubmit() {
    if (productId === '') {
      return toast.warning('Виберіть продукт!');
    }
    if (productWeight <= 0) {
      return toast.warning('Вкажіть вагу продукту!');
    }

    if (productId !== '' && productWeight >= 1) {
      dispatch(addProduct({ date, productId, productWeight }));
      toast.success(`З'їдено!`);
      setProductId('');
      setWeight('');
      setValue('');
    }
  }
  
  const isMobile = useMediaQuery({
    query: `(max-width: ${layoutStyles.tablet})`,
  });

  const classes = useStyles();

  return (
    <div className={'wrapper'}>
      <Formik
        initialValues={{ product: '', weight: '' }}
        // onSubmit={(values, actions) => {
        //   setTimeout(() => {
        //     actions.setSubmitting(false);
        //   }, 1000);
        // }}
        // onSubmit={onSubmit}
      >
        <Form className={'ProductForm'}>
          <div className={'ProductName'}>
            <Autocomplete
              disablePortal
              autoSelect
              selectOnFocus
              id="custom-autocomplete"
              options={products}
              value={value}
              noOptionsText={'Такий продукт не знайдено'} // якщо продукту не має в списку можливих значень
              classes={classes}
              onChange={(_, v) => {
                if (v.id) {
                  setProductId(v.id);
                  setValue(v);
                }
              }}
              sx={{
                borderBottom: `1px solid ${layoutStyles.formBorderColor}`,
                width: isMobile ? '280px' : '240px',
              }}
              renderInput={params => (
                <TextField
                  {...params}
                  fullWidth
                  required
                  onChange={e => {
                    if (e.currentTarget.value !== '')
                      debouncedFindProduct(e.currentTarget.value);
                  }}
                  label="Введіть назву продукту"
                />
              )}
            />
          </div>
          <div className={'ProductWeight'}>
            <TextField
              required
              fullWidth
              id="weight"
              type="number"
              onInput={e => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 4);
              }}
              sx={{
                borderBottom: `1px solid ${layoutStyles.formBorderColor}`,
                width: isMobile ? '280px' : '150px',
                paddingRight: '50px',
                margin: isMobile && '0 0 60px 0',
              }}
              onChange={e => {
                if (e.currentTarget.value > 1) {
                  setWeight(e.currentTarget.value);
                }
              }}
              classes={classes}
              label="Вага продукта"
            />
          </div>

          <Button
            margin="0 auto 0"
            type="submit"
            borderRadius={isMobile && '30px'}
            onClick={() => {
              onSubmit();
              if (isMobile && productId !== '' && productWeight >= 1) {
                dispatch(changeToggle(false));
              }
            }}
          >
            {isMobile ? (
              <p className={'BtnName'}>Додати</p>
            ) : (
              <ImPlus
                width="20"
                height="20"
                fill={layoutStyles.mainBackground}
              />
            )}
          </Button>
        </Form>
      </Formik>

      <FormikWrapperStyles styles />
    </div>
  );
}
