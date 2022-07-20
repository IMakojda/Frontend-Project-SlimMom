import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import { useMediaQuery } from 'react-responsive';
import debounce from 'lodash.debounce';
import { toast } from 'react-toastify';
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
import { toastStyles } from '../../../stlyles/toastStyled';
import Button from '../../button/Button.styled';
import {
  getProducts,
  getDate,
  getToggle,
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

  const dispatch = useDispatch();

  const products = useSelector(getProducts); // список найденных продуктов
  const date = useSelector(getDate); // форматированная дата на которую добавляем проукт
  const toggle = useSelector(getToggle);

  const findProduct = value => {
    dispatch(fetchProducts(value));
  };

  const debouncedFindProduct = debounce(findProduct, 400);

  function onSubmit(e) {
    if (productId === '') {
      return toast.warning('Виберіть продукт!', toastStyles);
    }
    if (productWeight <= 0) {
      return toast.warning('Вкажіть вагу продукту!', toastStyles);
    }

    if (productId !== '' && productWeight >= 1) {
      dispatch(addProduct({ date, productId, productWeight }));
      toast.success(`З'їдено!`, toastStyles);
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
      >
        {({ isSubmitting }) => (
          <Form className={'ProductForm'}>
            <div className={'ProductName'}>
              <Autocomplete
                // forcePopupIcon={true}
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
                    // required
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
                // required
                fullWidth
                id="weight"
                name="weight"
                type="number"
                value={productWeight}
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
                  if (e.currentTarget.value > 0) {
                    setWeight(e.currentTarget.value);
                  }
                }}
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
