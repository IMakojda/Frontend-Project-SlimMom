import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import authOperations from 'redux/auth/authOperations';
import styled, { createGlobalStyle } from 'styled-components';

export default function RegisterForm() {
  const Div = styled.div`
    margin-top: 60px;
  `;

  const RegisterFormStyle = createGlobalStyle`

  .Form{
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 100px;
}


.InputBlock {
  position: relative;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
}



.Cut {
  background-color: #FFFFF;
  border-radius: 10px;
  height: 20px;
  left: 20px;
  position: absolute;
  top: -20px;
  transform: translateY(0);
  transition: transform 200ms;
  width: 76px;
}

.Input:focus ~ .Cut,
.Input:not(:placeholder-shown) ~ .Cut {
  transform: translateY(8px);
}

.Placeholder {
  color: #9B9FAA;
  left: 3px;
  line-height: 17px;
  font-weight: 700;
  font-size: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;
  top: 3px;
}

.Input:focus ~ .Placeholder,
.Input:not(:placeholder-shown) ~ .Placeholder {
  transform: translateY(-25px) translateX(2px) scale(0.75);
}

.Input:not(:placeholder-shown) ~ .Placeholder {
  color: #808097;
}

.Input:focus ~ .Placeholder {
  color: #dc2f55;
}

.InputBlock input {
  width: 280px;
  height: 36px;
  border: none;
  border-bottom: 1px solid #E0E0E0;
  background: transparent;
}

.InputBlock p {
    font-size: 12px;
    color: red;
}


.FormButtons{
    display: flex;
    flex-direction: column;
}

.Button{
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 13px;
    padding-bottom: 13px;
    width: 180px;
    background: #FC842D;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
    border: none;
    border-radius: 30px;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.04em;
    color: #FFFFFF;

}

.Button:hover,
.Button:focus{
    background: #FFFFFF;
    border: 2px solid #FC842D;
    border-radius: 30px;
    color: #FC842D;
    cursor: pointer;
}

 @media screen and (min-device-width: 768px) {
    .Form{
    margin-left: 32px;
    text-align: start;
    }

    .FormButtons{
    display: block;
    margin-bottom: 400px;
    }

    .Button{
    margin-right: 32px;
    }

    .InputBlock {
      margin-left: 0;
      margin-right: 0;
    }
  }

  @media screen and (min-device-width: 1199px) {
    .FormButtons{
    margin-bottom: 180px;
    }
  }
`;

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, 'Має бути 2 символа або більше!')
      .max(50, 'Має бути 50 символів або менше!')
      .required("Обов'язкове поле"),
    email: yup
      .string()
      .email('Невірна адреса електронної пошти')
      .required("Обов'язкове поле"),
    password: yup
      .string()
      .min(8, 'Пароль повинен складатися не менше, ніж з 8 символів')
      .matches(
        RegExp('(.*[a-z].*)'),
        'Пароль повинен містити принаймні одну малу літеру'
      )
      .matches(
        RegExp('(.*[A-Z].*)'),
        'Пароль повинен містити принаймні одну велику літеру'
      )
      .matches(
        RegExp('(.*\\d.*)'),
        'Пароль повинен містити принаймні одну цифру'
      )
      .required("Обов'язкове поле"),
  });

  const dispatch = useDispatch();
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const onSubmit = async e => {
    dispatch(authOperations.register(values));
    // setName('');
    // setEmail('');
    // setPassword('');
  };

  return (
    <Div>
      <Formik

        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validateOnBlur
        onSubmit={onSubmit}
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
          <div className="Form">
            <div className="InputBlock">
              <input
                type={'text'}
                name={'name'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder=" "
                className="Input"
              />
              <div className="Cut"></div>
              <label htmlFor={'name'} className="Placeholder">
                Ім'я *
              </label>
              {touched.name && errors.name && <p>{errors.name}</p>}
            </div>
            <div className="InputBlock">
              <input
                type={'email'}
                name={'email'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder=" "
                className="Input"
              />
              <label htmlFor={'email'} className="Placeholder">
                Електронна пошта*
              </label>
              {touched.email && errors.email && <p>{errors.email}</p>}
            </div>
            <div className="InputBlock">
              <input
                type={'password'}
                name={'password'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder=" "
                className="Input"
                autoComplete="off"
                id="password-input"
              />
              <label htmlFor={'password'} className="Placeholder">
                Пароль *
              </label>
              {touched.password && errors.password && <p>{errors.password}</p>}
            </div>

            <div className="FormButtons">
              <button className="Button" onClick={handleSubmit} type={'submit'}>
                Зареєструватися
              </button>

              <Link to={{ pathname: '/login' }}>
                <button className="Button" type="button">
                  Увійти
                </button>
              </Link>
            </div>
          </div>
        )}
      </Formik>
      <RegisterFormStyle />
    </Div>
  );
}
