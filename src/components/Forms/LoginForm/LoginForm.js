import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../../redux/auth/authOperations';
import { Wrapper, Title, FormLogin, WrapperInputs, Input, Label, WrapperInputEmail, WrapperInputPassword, WrapperButtons, Button, Error, WrapperImage, Image } from './LoginForm.styled';
import eye from '../../../images/eye.svg';
import eyeCrossed from '../../../images/eyeCrossed.svg';

const passwordRules = /^(?=.*[a-zà-ÿ])(?=.*[A-ZÀ-ß])(?=.*\d)[a-zà-ÿA-ZÀ-ß\d]{8,50}$/;
const emailRules = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{1,6}$/i;

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email("Невірна адреса електронної пошти. Приклад myemail@gmail.com")
    .min(3, "Має бути 3 символи або більше!")
    .max(254, "Має бути 254 символів або менше!")
    .matches(emailRules, { message: "Невірна адреса електронної пошти. Приклад myemail@gmail.com" })
    .required("Обов'язкове поле"),
  password: Yup.string()
    .min(8, "Мінімум 8 символів: латинські літери в нижньому/верхньому регістрі та цифри")
    .max(50, "Максимум 50 символів")
    .matches(passwordRules, { message: "Мінімум 8 символів: латинські літери в нижньому/верхньому регістрі та цифри" })
    .required("Обов'язкове поле"),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const [eyeOutlined, setEyeOutlined] = useState(true);

  const handleClick = () => {
    setEyeOutlined(!eyeOutlined);
  };

return (
  <Wrapper>
    <Title>ВХІД</Title>
    <Formik
      initialValues={{
        password: '',
        email: '',
      }}
      validateOnBlur
      validationSchema = { SigninSchema }
      onSubmit={(values, { resetForm }) => {
        dispatch(authOperations.logIn(values));
        resetForm();
      }}
    >
      {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
      <FormLogin onSubmit={handleSubmit}>
        <WrapperInputs>
          <WrapperInputEmail>
            <Input
              id="email"
              name="email"
              placeholder=" "
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <Label htmlFor="email">
              Електронна пошта *
            </Label>
            {touched.email && errors.email && <Error>{errors.email}</Error>}
          </WrapperInputEmail>
          <WrapperInputPassword>
            <Input
              id="password"
              name="password"
              placeholder=" "
              type={eyeOutlined ? 'password' : 'text'}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              autoComplete="off"
            />
            <Label htmlFor="password">
              Пароль *
            </Label>
            <WrapperImage onClick={handleClick}>
              {eyeOutlined ? (
                <Image src={eyeCrossed} />
              ) : (
                <Image src={eye} />
              )}
            </WrapperImage>
            {touched.password && errors.password && <Error>{errors.password}</Error>}
          </WrapperInputPassword>
        </WrapperInputs>
        <WrapperButtons>
          <Button
            type="submit"
            >
              Увійти
          </Button>
          <Link to="/signup">
            <Button
            type="submit"
            >
              Зареєструватися
            </Button>
          </Link>
          </WrapperButtons>
      </FormLogin>
      )}
    </Formik>
  </Wrapper>
);
}
