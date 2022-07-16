import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import authOperations from 'redux/auth/authOperations';
import visibility from './visibility.svg';
import visibility_off from './visibility_off.svg';
import {
  Button,
  Cut,
  Form,
  FormButtons,
  Input,
  InputBlock,
  PasswordEye,
  Placeholder,
  Wrapper,
} from './RegisterForm.styled';

export default function RegisterForm() {
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, 'Має бути 3 символа або більше!')
      .max(50, 'Має бути 50 символів або менше!')
      .required("Обов'язкове поле"),
    email: yup
      .string()
      .email('Невірна адреса електронної пошти')
      .min(6, 'Має бути 6 символа або більше!')
      .max(50, 'Має бути 50 символів або менше!')
      .required("Обов'язкове поле"),
    password: yup
      .string()
      .min(8, 'Введіть не менше, ніж 8 символів')
      .matches(RegExp('(.*[a-z].*)'), 'Введіть принаймні одну малу літеру')
      .matches(RegExp('(.*[A-Z].*)'), 'Введіть принаймні одну велику літеру')
      .matches(RegExp('(.*\\d.*)'), 'Введіть принаймні одну цифру')
      .required("Обов'язкове поле"),
  });

  const dispatch = useDispatch();
  const [eyeOutlined, setEyeOutlined] = useState(true);

  const handleClick = () => {
    setEyeOutlined(!eyeOutlined);
  };

  // const onSubmit = async (values, actions) => {
  //   dispatch(authOperations.register(values));
  //   setTimeout(async () => {
  //     alert(JSON.stringify(values, null, 2));
  //     actions.setSubmitting(false);
  //     // actions.resetForm();
  //   }, 1000);
  // };

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
          dispatch(authOperations.register(values));
          setTimeout(async () => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            // actions.resetForm();
          }, 1000);
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
              {touched.name && errors.name && <p>{errors.name}</p>}
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
              {touched.email && errors.email && <p>{errors.email}</p>}
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
                    src={visibility}
                    width="24px"
                    height="24px"
                    alt="visibility"
                  />
                ) : (
                  <img
                    src={visibility_off}
                    width="24px"
                    height="24px"
                    alt="visibility_off"
                  />
                )}
              </PasswordEye>
              <Placeholder htmlFor="password">Пароль *</Placeholder>
              {touched.password && errors.password && <p>{errors.password}</p>}
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
    </Wrapper>
  );
}
