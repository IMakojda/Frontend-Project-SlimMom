import { useSelector } from 'react-redux';
import calcSelectors from '../../../redux/calculatorSlice/calculatorSelectors';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { Wrapper } from '../LoginForm/LoginForm.styled';

const Item = styled.li`
  margin-bottom: 20px;
  @media only screen and {
  }
  @media only screen and (min-width: ) {
  }
`;
const Calorie = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  letter-spacing: 0.04em;
  padding-bottom: 45px;
  color: #264061;
  min-width: 280px;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 25px;
`;
const ProductList = styled.ol`
  text-align: left;
  padding-left: 22px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;

  color: #9b9faa;
`;

const Call = styled.span`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #264061;
`;

const CalorieHeader = styled.h2`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #212121;
  margin-bottom: 60px;
  max-width: 280px;
  text-align: center;

  @media screen and (min-device-width: 768px) {
    margin-bottom: 45px;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 32px;
    max-width: 370px;
  }
`;

const Foods = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  letter-spacing: 0.04em;

  color: #212121;
  max-width: 330px;
  margin-bottom: 25px;

  @media screen and (min-device-width: 768px) {
    text-align: left;
  }
`;

const CalculatorСalorieFormModalContent = () => {
  const { dailyRate, notRecFood } = useSelector(calcSelectors.getUserData);

  console.log(notRecFood);
  return (
    <Wrapper>
      <CalorieHeader>
        Ваша рекомендована добова норма споживання калорій становить
      </CalorieHeader>
      <Calorie>
        {Math.round(dailyRate)}
        <Call> ккал</Call>
      </Calorie>
      <Foods>Продукти, які ви не повинні вживати</Foods>
      <ProductList>
        {notRecFood.map(product => {
          return <Item key={uuidv4()}>{product.title.ua}</Item>;
        })}
      </ProductList>
    </Wrapper>
  );
};

export default CalculatorСalorieFormModalContent;
