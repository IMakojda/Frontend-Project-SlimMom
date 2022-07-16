import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import {
  Wrapper,
  SummaryWrap,
  FoodRecWrap,
  List,
  Item,
  Title,
  Text,
} from './SummaryForDay.styled';

// import { getDairy } from 'redux/services/api-reguest'
// import { fetchDairy } from 'redux/dairy/dairyOperations';
// import { addDate } from 'redux/dairy/dairyReducer';


export default function SummaryForDay() {
  // const dispatch = useDispatch();
  const date = new Date();

  const formatedDate = format(date, 'MM/dd/yyyy');
  // const testDate = format(date, 'yyyy.MM.dd');


  // dispatch(fetchDairy(`${testDate}Z`));

  return (
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
    </Wrapper>
  )
};

// export const getDairy = async (date) => {
//   token.set('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDAxODZjYmI4MThhZjVlZWFmNzY3NyIsImlhdCI6MTY1Nzk1NjcyM30.WIT_uenA2I13eIeBWXjwPI9IKJwuyZrWh9_K99I9PGM');
//   try {
//     const { result } = await axios.get(`calc/user/${date}`); // # Authorization: "Bearer {{token}}"
//                                                       // RequestBody (example):
//                                                       // {
//                                                       // "date":"2022.07.13Z"
//                                                       // }
//   return result;
//   } catch (error) {
//     throw error;
//   }
// }


