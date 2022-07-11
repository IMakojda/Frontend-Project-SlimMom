import { Wrapper, Flex, List, Item, Title, Text } from './SummaryForDay.styled'

export default function SummaryForDay() {
  
  return (
      <Wrapper>
      <Flex>
        <Title>Загалом за "вибрана дата"</Title>
        <List>
        <Item>
          <Text>Втрачено</Text><Text>000 ккал</Text>
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
      </Flex>

      <Flex>
        <Title>Не рекомендована їжа</Title>
        <Text>Ваша діета буде відображатись тут</Text>
      </Flex> 
      </Wrapper>    
  )
};