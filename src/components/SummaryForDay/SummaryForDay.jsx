import { createPortal } from 'react-dom';
import { format } from 'date-fns'
import {
  Wrapper,
  SummaryWrap,
  FoodRecWrap,
  List,
  Item,
  Title,
  Text,
} from './SummaryForDay.styled';

const sideBarRoot = document.getElementById('side-bar')

export default function SummaryForDay() {
  
  const date = new Date(Date.now());

  const formatedDate = format(date, 'MM/dd/yyyy');

  return createPortal(
    <Wrapper>
      <SummaryWrap>
        <Title>Загалом за {formatedDate}</Title>
        <List>
        <Item>
          <Text>Залишилось</Text><Text>000 ккал</Text>
        </Item>
        <Item>
          <Text>Спожито</Text><Text>000 ккал</Text>
        </Item>
        <Item>
          <Text>Добова норма</Text><Text>000 ккал</Text>
          </Item>
        <Item>
          <Text>n% від норми</Text><Text>000 %</Text>
        </Item>
        </List>
      </SummaryWrap>

      <FoodRecWrap>
        <Title>Не рекомендована їжа</Title>
        <Text>Ваша діета буде відображатись тут</Text>
      </FoodRecWrap> 
    </Wrapper>,
    sideBarRoot
  )
};