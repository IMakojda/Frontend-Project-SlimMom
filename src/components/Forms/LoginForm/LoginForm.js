import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../../redux/auth/authOperations';
import { Wrapper, Title, FormLogin, WrapperInputs, Input, Label,WrapperInputEmail, WrapperInputPassword, WrapperButtons, Button, Error, WrapperImage, Image } from './LoginForm.styled';
import eye from '../../../images/eye.svg';
import eyeCrossed from '../../../images/eyeCrossed.svg';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email("Недійсна електронна адреса")
    .min(6, "Мінімум 6 символів у форматі simple@example.com")
    .max(50, "Максимум 50 символів")
    .required("Обов'язкове поле"),
  password: Yup.string()
    .min(8, "Мінімум 8 символів: латинські літери в нижньому/верхньому регістрі та цифри")
    .max(50, "Максимум 50 символів")
    .matches(passwordRules, { message: "Введіть вірний пароль" })
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
      onSubmit={(values, { resetForm, setSubmitting }) => {
        dispatch(authOperations.logIn(values));
        console.log(values);
        resetForm();
        setSubmitting(false);
      }}
    >
      {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
      <FormLogin onClick={handleSubmit}>
        <WrapperInputs>
          <WrapperInputEmail>
            <Input
              id="email"
              name="email"
              placeholder=""
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
              placeholder=""
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
