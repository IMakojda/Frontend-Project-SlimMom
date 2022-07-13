import React from 'react';
import { Form, Formik } from 'formik';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import styled, { createGlobalStyle } from 'styled-components';
import { layoutStyles } from '../../stlyles/layoutStyles';
import Button from '../button/Button.styled';
import { ImPlus } from 'react-icons/im';

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
   
  },
}));

export default function ProductForm() {
 
 const Div = styled.div`
    margin-bottom: 60px;
  `;

  const FormikWrapperStyles = createGlobalStyle`
 .ProductForm {
  display: flex;
  margin: 0px;
  outline: none;
  width: 240px;
}
.ProductWeight {
  margin-right: 87px;
}
.ProductName {
  margin-right: 32px;
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

  const classes = useStyles();

  return (
    <Div>
      <Formik
        initialValues={{ product: '', weight: '' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        <Form className={'ProductForm'}>
          <div className={'ProductName'}>
            <Autocomplete
              disablePortal
              id="product"
              options={top100Films}
              classes={classes}
              sx={{
                borderBottom: `1px solid ${layoutStyles.formBorderColor}`,
                minWidth: '240px',
              }}
              renderInput={params => (
                <TextField {...params} label="Введіть назву продукту" />
              )}
            />
          </div>
          <div className={'ProductWeight'}>
            <TextField
              id="weight"
              sx={{
                borderBottom: `1px solid ${layoutStyles.formBorderColor}`,
                minWidth: '140px',
                marginRight: '32px',
              }}
              classes={classes}
              label="Вага продукта"
            />
          </div>
          <Button
          // clickOnBtn={() => {
          //   setOpenCalendar(true);
          // }}
          // className={styles.iconPlus}
          >
            <ImPlus width="20" height="20" fill={layoutStyles.mainBackground} />
          </Button>
        </Form>
      </Formik>

      <FormikWrapperStyles />
    </Div>
  );
}


const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
 
 
];
