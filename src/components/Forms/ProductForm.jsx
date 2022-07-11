import React from "react";
import { Field, Form, Formik, FormikProps } from "formik";
import styles from "./ProductForm.module.css";

import {layoutStyles} from '../../stlyles/layoutStyles';
import Button from '../button/Button.styled';
import sprite from '../Image/icon/sprite.svg';

export default function ProductForm() {

  return (
    <div className={styles.ProductFormWrapper}>
      <Formik
        initialValues={{ product: "", weight: "" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        <Form className={styles.ProductForm}>
          
          <Field id="product"  name="product" placeholder="Введіть назву продукту" className={styles.ProductName} />

          <Field id="weight" name="weight" placeholder="Вага продукта" className={styles.ProductWeight}/>
           
          <Button
        // clickOnBtn={() => {
        //   setOpenCalendar(true);
        // }}
        // className={styles.iconPlus}
      
      >
        <svg width="20" height="20"   fill={layoutStyles.mainBackground}>
          <use href={`${sprite}#icon-plus`}></use>
        </svg>
      </Button>

        </Form>
      </Formik>
    </div>
  );
}
