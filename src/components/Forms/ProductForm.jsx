import React from 'react';
import { Form, Formik } from 'formik';
import { useMediaQuery } from 'react-responsive';

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
    '@media screen and (max-width: 768px': {
      minWidth: '280px',
    },
  },
}));

export default function ProductForm(styles) {
 
//  const Div = styled.div`
//     margin-bottom: 60px;
//   `;

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
                margin: '0 32px 60px 0',
              }}
              classes={classes}
              label="Вага продукта"
            />
          </div>
          <Button
          margin='0 auto 0'
          // clickOnBtn={() => {
          //   setOpenCalendar(true);
          // }}
          // className={styles.iconPlus}
          >
            {isMobile ? <p weight='176px'>Додати</p> : <ImPlus width="20" height="20" fill={layoutStyles.mainBackground} /> } 
            
          </Button>
        </Form>
      </Formik>

      <FormikWrapperStyles />
    </div>
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
