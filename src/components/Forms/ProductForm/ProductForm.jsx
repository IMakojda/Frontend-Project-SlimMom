import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import { useMediaQuery } from 'react-responsive';
import debounce from 'lodash.debounce';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import LinearProgress from '@mui/material/LinearProgress';
import { ImPlus } from 'react-icons/im';
import { changeToggle } from '../../../redux/dairy/dairyReducer';
import {
  fetchProducts,
  addProduct,
} from '../../../redux/dairy/dairyOperations';
import { layoutStyles } from '../../../stlyles/layoutStyles';
import { toast } from 'react-toastify';
import { toastStyles } from '../../../stlyles/toastStyled';
import Button from '../../button/Button.styled';
import {
  getProducts,
  getDate,
  getToggle,
  getError,
} from '../../../redux/dairy/dairySelector';
import {
  FormikWrapperStyles,
  useStyles,
  DivWrapper,
} from './ProductForm.styled';

export default function ProductForm() {
  const [value, setValue] = useState(null);
  const [productId, setProductId] = useState('');
  const [productWeight, setWeight] = useState('');

  const weight = Math.floor(productWeight)
  const dispatch = useDispatch();

  const products = useSelector(getProducts);
  const date = useSelector(getDate);
  const toggle = useSelector(getToggle);
  let error = useSelector(getError);

  const findProduct = value => {
    dispatch(fetchProducts(value));
  };

  const debouncedFindProduct = debounce(findProduct, 400);

  function onSubmit() {
    if (productId === '') {
      return toast.warning('Виберіть продукт!', toastStyles);
    }
    if (productWeight <= 0) {
      return toast.warning('Вкажіть вагу продукту!', toastStyles);
    }

    if (productId !== '' && productWeight >= 1) {
      dispatch(addProduct({ date, productId, productWeight: weight }));
      if (error) { return }  

      setProductId('');
      setWeight('');
      setValue('');
    }
  }
  const onChangeProduct = e => {
    if (e.currentTarget.value !== '')
      debouncedFindProduct(e.currentTarget.value);
  };

  const onChangeWeight = e => {
    const { value } = e.currentTarget;
    if (value > 0) {
      return setWeight(value);
    }
    if (value === '') {
      setWeight('');
    }
  };

  const validationWeight = e => {
    e.target.value = Math.max(0, parseInt(e.target.value))
      .toString()
      .slice(0, 4);
  };

  const isMobile = useMediaQuery({
    query: `(max-width: ${layoutStyles.tablet})`,
  });

  const classes = useStyles();

  return (
    <DivWrapper display={isMobile && toggle ? 'block' : 'none'}>
      <Formik
        initialValues={{ product: '', weight: '' }}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          onSubmit();
          if (isMobile && productId !== '' && productWeight >= 1) {
            dispatch(changeToggle(false));
          }
          setSubmitting(false);
          resetForm();
        }}
        onChange={e => console.log(e)}
      >
        {({ isSubmitting }) => (
          <Form className={'ProductForm'}>
            <div className={'ProductName'}>
              <Autocomplete
                isOptionEqualToValue={(option, value) =>
                  option.iso === value.iso
                }
                autoSelect
                selectOnFocus
                id="product"
                name="product"
                options={products}
                value={value}
                noOptionsText={'Такий продукт не знайдено'} // якщо продукту не має в списку можливих значень
                classes={classes}
                onChange={(e, v) => {
                  if (v === null) {
                    setValue(v);
                    setProductId('');
                  }
                  if (v && v.id) {
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
                    onChange={onChangeProduct}
                    label="Введіть назву продукту"
                  />
                )}
              />
            </div>
            <div className={'ProductWeight'}>
              <TextField
                fullWidth
                id="weight"
                name="weight"
                type="number"
                value={productWeight}
                onInput={validationWeight}
                sx={{
                  borderBottom: `1px solid ${layoutStyles.formBorderColor}`,
                  width: isMobile ? '280px' : '150px',
                  paddingRight: '50px',
                  margin: isMobile && '0 0 60px 0',
                }}
                onChange={onChangeWeight}
                classes={classes}
                label="Вага продукта"
              />
            </div>
            {isSubmitting && <LinearProgress />}
            <Button
              margin="0 auto 0"
              type="submit"
              borderRadius={isMobile && '30px'}
              disabled={isSubmitting}
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
        )}
      </Formik>

      <FormikWrapperStyles />
    </DivWrapper>
  );
}
