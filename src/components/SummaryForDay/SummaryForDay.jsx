import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import { getSummary, getDate, getNotRecFood } from 'redux/dairy/dairySelector';
import { getDaily } from 'redux/dairy/dairySelector';
import {
  Wrapper,
  SummaryWrap,
  FoodRecWrap,
  List,
  Item,
  Title,
  Text,
} from './SummaryforDay.styled';

export default function SummaryForDay() {
  const date = new Date();
  const reduxDate = useSelector(getDate);
  const dailyRate = useSelector(getDaily);
  const summary = useSelector(getSummary);
  const notRecFoodArr = useSelector(getNotRecFood);

  return (
    <Wrapper>
      <SummaryWrap>
        <Title>Загалом за {reduxDate === '' ? format(date, 'dd/MM/yyyy') : format(new Date(reduxDate), 'dd/MM/yyyy')}</Title>
        <List>
        <Item>
          <Text>Залишилось</Text><Text>{summary.left ? Math.round(summary.left) : '000'} ккал</Text>
        </Item>
        <Item>
          <Text>Спожито</Text><Text>{summary.consumed ? Math.round(summary.consumed) : '000'} ккал</Text>
        </Item>
        <Item>
          <Text>Добова норма</Text><Text>{dailyRate ? Math.round(dailyRate) : '000'} ккал</Text>
          </Item>
        <Item>
          <Text>n% від норми</Text><Text>{summary.nOfNorm ? Math.round(summary.nOfNorm) : '000'} %</Text>
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

