import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import { useMediaQuery } from 'react-responsive';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import moment from 'moment';
import { createGlobalStyle } from 'styled-components';
import { layoutStyles } from '../../stlyles/layoutStyles';
import Button from '../button/Button.styled';
import { ImPlus } from 'react-icons/im';

import { fetchProducts, addProduct } from '../../redux/dairy/dairyOperations';
import { getProducts, getDate } from '../../redux/dairy/dairySelector';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiInputLabel-outlined': {
      color: layoutStyles.placeholderColor,
      fontFamily: layoutStyles.verdana,
      fontWeight: 700,
      fontSize: '14px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
      textAlign: 'end',
      padding: 0,
    },
  },
  inputRoot: {
    '& .MuiAutocomplete-endAdornment': {
      display: 'none',
    },
    '@media screen and (max-width: 768px': {
      minWidth: '280px',
    },
  },
}));

export default function ProductForm(styles) {
  const [productId, setProductId] = useState('');
  const [productWeight, setWeight] = useState('');

  const dispatch = useDispatch();

  // const getDairy = (date) => {
  //   dispatch(fetchDairy(date));
  // };

  const products = useSelector(getProducts); // список найденных продуктов
  const date = useSelector(getDate);        // форматированная дата на которую добавляем проукт

  const findProduct = name => {
    dispatch(fetchProducts(name));
  };

  function onSubmit() {

    dispatch(addProduct({ date, productId, productWeight }));
    setProductId('');
    setWeight('');
    // getDairy(date)
  };
 

  const FormikWrapperStyles = createGlobalStyle`
  .wrapper{
    position: absolute;
    top: 0;
    ${styles};
    /* top: -170%; */

  }
   .ProductForm {
    padding-top: 80px;
    background-color: white;
  display: block;
  margin: 0px;
  outline: none;
  width: 100%;
  height: 100vh;
}
.ProductWeight {
  margin-right: 87px;
}
.ProductName {
  margin-right: 32px;
}
  @media screen and (min-width: ${layoutStyles.tablet}) {
    .wrapper{
    position: relative;
    display: block;
  }
 .ProductForm {
  display: flex;
  margin: 0px;
  outline: none;
  width: 240px;
  height: 100%;
}
.ProductWeight {
  margin-right: 87px;
}
.ProductName {
  margin-right: 32px;
}
  }
@media screen and (min-width: ${layoutStyles.deskTop}) {
  .ProductName {
    margin-right: 48px;
  }
  .ProductWeight {
    margin-right: 60px;
  }
}

`;
  const isMobile = useMediaQuery({
    query: `(max-width: ${layoutStyles.tablet})`,
  });

  const classes = useStyles();

  return (
    <div className={'wrapper'}>
      <Formik
        initialValues={{ product: '', weight: '' }}
        //   onSubmit={(values, actions) => {
        //     setTimeout(() => {
        //       alert(JSON.stringify(values, null, 2));
        //       actions.setSubmitting(false);
        //     }, 1000);
        //   }}

        // onSubmit={onSubmit}
      >
        <Form className={'ProductForm'}>
          <div className={'ProductName'}>
            <Autocomplete
              disablePortal
              autoSelect
              selectOnFocus
              id="product"
              options={products}
              noOptionsText={'Такий продукт не знайдено'} // якщо продукту не має в списку можливих значень
              classes={classes}
              onChange={(_, v) => {setProductId(v.id)}}
              sx={{
                borderBottom: `1px solid ${layoutStyles.formBorderColor}`,
                minWidth: '240px',
              }}
              renderInput={params => (
                <TextField
                  fullWidth
                  required
                  onChange={e => findProduct(e.currentTarget.value)}
                  {...params}
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
              step="1"
              sx={{
                borderBottom: `1px solid ${layoutStyles.formBorderColor}`,
                minWidth: '140px',
                margin: '0 32px 60px 0',
                // textAlign: "right", // не работает
              }}
              onChange={e => {setWeight(e.currentTarget.value)}}
              classes={classes}
              label="Вага продукта"
            />
          </div>
          <Button
            margin="0 auto 0"
            type='submit'
            onClick={() => {
              onSubmit();
            }}
            >
            {isMobile ? (
              <p weight="176px">Додати</p>
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

      <FormikWrapperStyles />
    </div>
  );
}
