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

import * as Yup from 'yup';

const CalculatorSchema = Yup.object().shape({
  height: Yup.number('number')
    .min(100, 'Мінімальний зріст 100 см')
    .max(250, 'Максимальний зріст 250 см')
    .required('Обов`язково до заповнення'),
  age: Yup.number()
    .min(18, 'Мінімальний вік 18 років')
    .max(100, 'Максимальний вік 100 років ')
    .required('Обов`язково до заповнення'),
  currentWeight: Yup.number()
    .moreThan(
      Yup.ref('desiredWeight'),
      'Поточна вага має бути більшою за бажану'
    )
    // .min(30, 'Мінімальна вага 30 кг')
    .max(120, 'Максимальна вага 120 кг')
    .required('Обов`язково до заповнення'),
  desiredWeight: Yup.number()
    .min(20, 'Мінімальна вага 20 кг')
    .max(500, 'Максимальна вага 500 кг')
    .required('Обов`язково до заповнення'),
  bloodType: Yup.string().required(),
});

const CalculatorСalorieForm = () => {
  return (
    <StileWrapper>
      <Header>Розрахуйте свою денну норму калорій прямо зараз</Header>
      <Formik
        initialValues={{
          height: '',
          age: '',
          currentWeight: '',
          desiredWeight: '',
          bloodType: '1',
        }}
        validationSchema={CalculatorSchema}
        onSubmit={(values, actions) => {
          setTimeout(async () => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            // actions.resetForm();
          }, 1000);
        }}
      >
        {props => {
          const { values, handleSubmit, handleChange } = props;
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
                        value={value}
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
    </StileWrapper>
  );
};

export default CalculatorСalorieForm;
