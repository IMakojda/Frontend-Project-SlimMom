import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import { useState } from 'react';
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
    .min(8, "Мінімум 8 символів: латинські літери в нижньому/верхньому регістрі, цифри та спеціальні символи")
    .max(50, "Максимум 50 символів")
    .matches(passwordRules, { message: "Створіть надійніший пароль" })
    .required("Обов'язкове поле"),
});

export default function LoginForm() {
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
      validationSchema = { SigninSchema }
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      <FormLogin>
        <WrapperInputs>
          <WrapperInputEmail>
            <Label htmlFor="email">
              Електронна пошта *
            </Label>
            <Input
              id="email"
              name="email"
              placeholder=""
              type="email"
            />
            <Error name="email" component="p" />
          </WrapperInputEmail>
          <WrapperInputPassword>
            <Label htmlFor="password">
              Пароль *
            </Label>
            <Input
              id="password"
              name="password"
              placeholder=""
              type={eyeOutlined ? 'password' : 'text'}
            />
            <WrapperImage onClick={handleClick}>
              {eyeOutlined ? (
                <Image src={eyeCrossed} />
              ) : (
                <Image src={eye} />
              )}
            </WrapperImage>
            <Error name="password" component="p" />
          </WrapperInputPassword>
        </WrapperInputs>
        <WrapperButtons>
          <Button
            type="submit"
            primary>
              Вхід
          </Button>
          <Link to="/register">
            <Button
            type="submit">
              Реєстрація
            </Button>
          </Link>
          </WrapperButtons>
      </FormLogin>
    </Formik>
  </Wrapper>
);
}
