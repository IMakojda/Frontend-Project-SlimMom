import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import authOperations from 'redux/auth/authOperations';
import calcSelectors from '../../../redux/calculatorSlice/calculatorSelectors';
import eye from '../../../images/eye.svg';
import eyeCrossed from '../../../images/eyeCrossed.svg';

import {
  Button,
  Cut,
  Form,
  FormButtons,
  Error,
  Input,
  InputBlock,
  PasswordEye,
  Placeholder,
  Wrapper,
} from './RegisterForm.styled';

export default function RegisterForm() {
  const passwordRules =
    /^(?=.*[a-zà-ÿ])(?=.*[A-ZÀ-ß])(?=.*\d)[a-zà-ÿA-ZÀ-ß\d]{8,50}$/;
  const emailRules = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{1,6}$/i;

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, 'Має бути 3 символа або більше!')
      .max(50, 'Має бути 50 символів або менше!')
      .required("Обов'язкове поле"),
    email: yup
      .string()
      .matches(
        emailRules,
        'Невірна адреса електронної пошти. Приклад: myemail@gmail.com'
      )
      .min(3, 'Має бути 3 символа або більше!')
      .max(254, 'Має бути 254 символів або менше!')
      .required("Обов'язкове поле"),
    password: yup
      .string()
      .min(
        8,
        'Мінімум 8 символів: латинські літери в нижньому/верхньому регістрі та цифри'
      )
      .max(50, 'Має бути 50 символів або менше!')
      .matches(
        passwordRules,
        'Мінімум 8 символів: латинські літери в нижньому/верхньому регістрі та цифри'
      )
      .required("Обов'язкове поле"),
  });

  const dispatch = useDispatch();
  const [eyeOutlined, setEyeOutlined] = useState(true);
  const authUserParams = useSelector(calcSelectors.getUserInfo);
  const handleClick = () => {
    setEyeOutlined(!eyeOutlined);
  };

  return (
    <Wrapper>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validateOnBlur
        onSubmit={(values, actions) => {
          authUserParams.height === null || authUserParams.age === null
            ? dispatch(authOperations.register(values))
            : dispatch(
                authOperations.register({ ...values, ...authUserParams })
              );
          actions.resetForm();
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <InputBlock>
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder=" "
              />
              <Cut></Cut>
              <Placeholder htmlFor="name">Ім'я *</Placeholder>
              {touched.name && errors.name && <Error>{errors.name}</Error>}
            </InputBlock>
            <InputBlock>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder=" "
              />
              <Placeholder htmlFor="email">Електронна пошта *</Placeholder>
              {touched.email && errors.email && <Error>{errors.email}</Error>}
            </InputBlock>
            <InputBlock>
              <Input
                type={eyeOutlined ? 'password' : 'text'}
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder=" "
                autoComplete="off"
              />
              <PasswordEye onClick={handleClick}>
                {eyeOutlined ? (
                  <img
                    src={eyeCrossed}
                    width="20px"
                    height="20px"
                    alt="visibility_off"
                  />
                ) : (
                  <img src={eye} width="20px" height="20px" alt="visibility" />
                )}
              </PasswordEye>
              <Placeholder htmlFor="password">Пароль *</Placeholder>
              {touched.password && errors.password && (
                <Error>{errors.password}</Error>
              )}
            </InputBlock>

            <FormButtons>
              <Button type="submit">Зареєструватися</Button>

              <Link to={{ pathname: '/login' }}>
                <Button type="button">Увійти</Button>
              </Link>
            </FormButtons>
          </Form>
        )}
      </Formik>
      <ToastContainer
        style={{ top: '35%' }}
        toastStyle={{
          border: '1px solid #FC842D',
          paddingTop: '20px',
          paddingBottom: '20px',
          paddingLeft: '10px',
          paddingRight: '10px',
          textAlign: 'center',
        }}
      />
    </Wrapper>
  );
}
