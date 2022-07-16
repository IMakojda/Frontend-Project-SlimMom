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

import {getDairy} from 'services/api-reguest'

export default function SummaryForDay() {
  
  const date = new Date();

  const formatedDate = format(date, 'MM/dd/yyyy');
  const testDate = format(date, 'yyyy.MM.dd');

  

  console.log(`${testDate}Z`);

  getDairy(`${testDate}Z`);

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

// const initialState = {
//   user: null,
//   date: null,
//   products: [],
//   summary: {
//     dailyRate: null,
//     consumed: null,
//     left: null,
//     nOfNorm: null,
//   },
//   notRecFood: [],
//   dateFind: '',
//   error: null,
//   productList:[],
// };

// const counterSlice = createSlice({
//   name: 'daySummary',
//   initialState,
//   reducers: {
//     filterProduct(state, action) {
//       state.filter = action.payload;
//     },
//   },
//   extraReducers: {
    
//   }
// });

// export const { increment, decrement, incrementByAmount } = counterSlice.actions
// export default counterSlice.reducer
