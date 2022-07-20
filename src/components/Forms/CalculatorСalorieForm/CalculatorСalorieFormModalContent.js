import { useSelector } from 'react-redux';
import calcSelectors from '../../../redux/calculatorSlice/calculatorSelectors';
import { v4 as uuidv4 } from 'uuid';
import { Wrapper } from '../LoginForm/LoginForm.styled';
import { Item,Calorie,ProductList,Call,CalorieHeader,Foods } from './ModalContent.styled';

const CalculatorСalorieFormModalContent = () => {
  const { dailyRate, notRecFood } = useSelector(calcSelectors.getUserData);

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
