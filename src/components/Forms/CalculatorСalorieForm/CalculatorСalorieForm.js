import { Formik, ErrorMessage } from 'formik';
import {
  Form,
  Btn,
  Header,
  Input,
  BloodTypeRadioBtn,
  BloodTypeCheckBox,
  Label,
  BloodTypeLabel,
  BloodTypeTitle,
  BloodTypeRadioContainer,
  Text,
  StileWrapper,
  PlaceholderContainer,
  ErrorWrapper,
  StileButtonWrapper,
} from './CalculatorСalorieForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import calcOperation from '../../../redux/calculatorSlice/calcOperation';
import { Modal } from '../../Modal';
import { ModalContent } from '../../Modal/ModalContent';
import { React, useEffect } from 'react';
import calcSelectors from '../../../redux/calculatorSlice/calculatorSelectors';
import authSelector from '../../../redux/auth/selectors';
import Loader from '../../Loader/loader';
import { updateUser } from 'redux/calculatorSlice/calcSlice';

const CalculatorSchema = Yup.object().shape({
  height: Yup.number()
    .typeError('Обов`язково до заповнення')
    .min(100, 'Мінімальний зріст 100 см')
    .max(250, 'Максимальний зріст 250 см')
    .required('Обов`язково до заповнення'),
  age: Yup.number()
    .typeError('Обов`язково до заповнення')
    .min(18, 'Мінімальний вік 18 років')
    .max(100, 'Максимальний вік 100 років ')
    .required('Обов`язково до заповнення'),
  currentWeight: Yup.number()
    .typeError('Обов`язково до заповнення')
    .moreThan(
      Yup.ref('desiredWeight'),
      'Поточна вага має бути більшою за бажану'
    )
    .test('min-width', 'Мінімальна вага 30 кг', function (value) {
      return value > 29;
    })
    .max(500, 'Максимальна вага 500 кг')
    .required('Обов`язково до заповнення'),
  desiredWeight: Yup.number()
    .typeError('Обов`язково до заповнення')
    .min(20, 'Мінімальна вага 20 кг')
    .max(500, 'Максимальна вага 500 кг')
    .required('Обов`язково до заповнення'),
  bloodType: Yup.string().required(),
});

const CalculatorСalorieForm = props => {
  const { showModal, setShowModal, title } = props;
  const authUserParams = useSelector(calcSelectors.getUserInfo);
  const LoaderStatus = useSelector(calcSelectors.getLoaderStatus);
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  const FullUser = useSelector(authSelector.getFullUser);
  const dispatch = useDispatch();

  const initFormState = {
    height: '',
    age: '',
    currentWeight: '',
    desiredWeight: '',
    bloodType: '1',
  };

  const LoginFormState = {
    height: authUserParams.height,
    age: authUserParams.age,
    currentWeight: authUserParams.currentWeight,
    desiredWeight: authUserParams.desiredWeight,
    bloodType: String(authUserParams.bloodType),
  };

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(updateUser(FullUser));
    }
  }, [FullUser, dispatch, isLoggedIn]);

  const formState = isLoggedIn ? LoginFormState : initFormState;

  return (
    <StileWrapper>
      <Header>{title}</Header>
      <Formik
        validateOnChange="true"
        initialValues={formState}
        validationSchema={CalculatorSchema}
        onSubmit={(values, actions) => {
          if (isLoggedIn) {
            dispatch(calcOperation.calcUserUpdate(values));
            dispatch(updateUser(values));
          } else {
            dispatch(calcOperation.calc(values));
          }

          setShowModal(true);

          actions.setSubmitting(false);

          if (!isLoggedIn) {
            actions.resetForm();
          }

          return;
        }}
      >
        {props => {
          const { values, handleSubmit, handleChange, handleBlur } = props;
          const { height, age, currentWeight, desiredWeight } = values;

          const settings = [
            {
              name: 'height',
              type: 'number',
              label: 'Зріст*',
              value: height,
            },
            {
              name: 'age',
              type: 'number',
              label: 'Вік*',
              value: age,
            },
            {
              name: 'currentWeight',
              type: 'number',
              label: 'Поточна вага*',
              value: currentWeight,
            },
            {
              name: 'desiredWeight',
              type: 'number',
              label: 'Бажана вага*',
              value: desiredWeight,
            },
          ];

          const bloodSettings = [
            { id: 'bloodType1', value: '1' },
            { id: 'bloodType2', value: '2' },
            { id: 'bloodType3', value: '3' },
            { id: 'bloodType4', value: '4' },
          ];
          return (
            <>
              <Form id="calculatorForm" onSubmit={handleSubmit}>
                {settings.map(({ name, type, label, value }) => {
                  return (
                    <PlaceholderContainer key={name}>
                      <Input
                        id={name}
                        name={name}
                        type={type}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={value || ''}
                        placeholder=" "
                      />

                      <Label htmlFor={label}>{label}</Label>
                      <ErrorMessage
                        className="menu navigation-menu"
                        component={ErrorWrapper}
                        name={name}
                      />
                    </PlaceholderContainer>
                  );
                })}
                <BloodTypeTitle>Група крові*</BloodTypeTitle>
                <BloodTypeRadioContainer>
                  {bloodSettings.map(({ id, value }) => {
                    return (
                      <BloodTypeLabel key={id}>
                        <BloodTypeRadioBtn
                          checked={values.bloodType === value}
                          type="radio"
                          id={id}
                          name="bloodType"
                          onChange={handleChange}
                          value={value}
                        />
                        <BloodTypeCheckBox></BloodTypeCheckBox>
                        <Text>{value}</Text>
                      </BloodTypeLabel>
                    );
                  })}
                </BloodTypeRadioContainer>
              </Form>
              <StileButtonWrapper>
                <Btn form="calculatorForm" type="submit">
                  Почніть худнути
                </Btn>
              </StileButtonWrapper>
            </>
          );
        }}
      </Formik>
      {LoaderStatus && <Loader />}
      {showModal && !LoaderStatus && (
        <Modal setShowModal={setShowModal}>
          <ModalContent setShowModal={setShowModal}></ModalContent>
        </Modal>
      )}
    </StileWrapper>
  );
};

export default CalculatorСalorieForm;
