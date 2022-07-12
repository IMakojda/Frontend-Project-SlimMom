import React from 'react';
import { Field, Form, Formik } from 'formik';

import styled, { createGlobalStyle } from 'styled-components';
import { layoutStyles } from '../../stlyles/layoutStyles';
import Button from '../button/Button.styled';
import { ImPlus } from 'react-icons/im';

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
  border: none;
  border-bottom: 1px solid ${layoutStyles.formBorderColor};
  width: 126px;
  margin-right: 87px;
  padding-bottom: 20px;
}
.ProductName {
  border: none;
  border-bottom: 1px solid ${layoutStyles.formBorderColor};
  width: 240px;
  margin-right: 32px;
  padding-bottom: 20px;
}

@media screen and(min-device-width: ${layoutStyles.deskTop}) {
  .ProductName {
    margin-right: 48px;
  }
  .ProductWeight {
    margin-right: 60px;
  }
}

`;


  return (
    <Div >
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
          <Field
            id="product"
            name="product"
            placeholder="Введіть назву продукту"
            className={'ProductName'}
          />

          <Field
            id="weight"
            name="weight"
            placeholder="Вага продукта"
            className={'ProductWeight'}
          />

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
      <FormikWrapperStyles/>
    </Div>
  );
}
