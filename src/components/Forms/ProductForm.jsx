import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import { useMediaQuery } from 'react-responsive';
import debounce from 'lodash.debounce';
import { toast } from 'react-toastify';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { createGlobalStyle } from 'styled-components';
import { layoutStyles } from '../../stlyles/layoutStyles';
import Button from '../button/Button.styled';
import { ImPlus } from 'react-icons/im';
import { changeToggle } from '../../redux/dairy/dairyReducer';
import { fetchProducts, addProduct } from '../../redux/dairy/dairyOperations';
import { getProducts, getDate } from '../../redux/dairy/dairySelector';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiInputLabel-root': {
      color: layoutStyles.placeholderColor,
      fontFamily: layoutStyles.verdana,
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: 1.22,
      letterSpacing: '0.04em',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
      textAlign: 'end',
      padding: 0,
      fontFamily: layoutStyles.verdana,
      fontWeight: 700,
      fontSize: '13px',
      lineHeight: 1.22,
      letterSpacing: '0.04em',
    },
    '& .MuiOutlinedInput-input': {
      textAlign: 'right',
      fontFamily: layoutStyles.verdana,
      fontWeight: 700,
      fontSize: '13px',
      lineHeight: 1.22,
      letterSpacing: '0.04em',
      paddingRight: '2px',
      paddingLeft: '2px',
    },
  },
  inputRoot: {
    '& .MuiAutocomplete-input': {
      fontFamily: layoutStyles.verdana,
      fontWeight: 700,
      fontSize: '14px',
    },
    '& .MuiAutocomplete-endAdornment': {
      display: 'none',
    },
    '@media screen and (max-width: 768px': {
      minWidth: '280px',
    },
  },
}));

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

    if (productId !== '' && productWeight >= 1 ) {
      dispatch(addProduct({ date, productId, productWeight }));
      toast.success(`З'їдено!`);
      setProductId('');
      setWeight('');
      setValue('');
    }
  }

  const FormikWrapperStyles = createGlobalStyle`
  .wrapper{
    position: absolute;
    top: 0;
    ${styles};
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
  margin-bottom: 20px;
}
.BtnName{
  width: 176px;
  color: ${layoutStyles.mainBackground}
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
  margin-bottom: 0  ;
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
              id="product"
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
                minWidth: '240px',
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
              // step="1"
              // min='1'
              sx={{
                borderBottom: `1px solid ${layoutStyles.formBorderColor}`,
                minWidth: '110px',
                paddingRight: '50px',
                margin: '0 32px 60px 0',
                }}
              onChange={e => {
                if (e.currentTarget.value>1)
                {setWeight(e.currentTarget.value);}
              }}
              classes={classes}
              label="Вага продукта"
            />
          </div>

          <Button
            margin="0 auto 0"
            type="submit"
            borderRadius={
            isMobile &&
              '30px'}
            onClick={() => {
              onSubmit();
              if (
                isMobile &&
                productId !== '' && productWeight >= 1 ) {
                dispatch(changeToggle(false));
              }
            }}
          >
            {
              isMobile ?
              ( <p className={'BtnName'}
              >Додати</p>
            ) :
              (
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

