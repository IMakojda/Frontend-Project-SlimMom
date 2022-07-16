import { format } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';
import { getSummary, getDate, getNotRecFood } from 'redux/dairy/dairySelector';
// import { addDate } from 'redux/dairy/dairyReducer';
import {
  Wrapper,
  SummaryWrap,
  FoodRecWrap,
  List,
  Item,
  Title,
  Text,
} from './SummaryForDay.styled';

export default function SummaryForDay() {

  const date = new Date();
  const reduxDate = useSelector(getDate)

  const summary = useSelector(getSummary);
  const notRecFoodArr = useSelector(getNotRecFood);

  return (
    <Wrapper>
      <SummaryWrap>
        <Title>Загалом за {reduxDate === '' ? format(date, 'MM/dd/yyyy') : format(reduxDate, 'MM/dd/yyyy')}</Title>
        <List>
        <Item>
          <Text>Залишилось</Text><Text>{summary.left ? summary.left : '000'} ккал</Text>
        </Item>
        <Item>
          <Text>Спожито</Text><Text>{summary.consumed ? summary.consumed : '000'} ккал</Text>
        </Item>
        <Item>
          <Text>Добова норма</Text><Text>{summary.dailyRate ? summary.dailyRate : '000'} ккал</Text>
          </Item>
        <Item>
          <Text>n% від норми</Text><Text>{summary.nOfNorm ? summary.nOfNorm : '000'} %</Text>
        </Item>
        </List>
      </SummaryWrap>

      <FoodRecWrap>
        <Title>Не рекомендована їжа</Title>
        <Text>{
          notRecFoodArr.length === 0
            ? 'Ваша діета буде відображатись тут'
            : 
            notRecFoodArr.map(product=>product.title.ua).join(', ').toLowerCase() }</Text>
      </FoodRecWrap> 

    </Wrapper>
  )
};

