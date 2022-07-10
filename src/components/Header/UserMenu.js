import styled from 'styled-components';

import arrow from '../Image/Logo/arrow.png';

const Title = styled.h2`
  margin: 0;
  display: inline;
  font-family: Gotham Pro;
  font-size: 14px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0.04em;
  margin-left: auto;
  padding: 15px 16px 13px 0;
  border-right: 2px solid #e0e0e0;
`;

const Button = styled.button`
  font-family: Gotham Pro;
  font-size: 14px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  border: none;
  background-color: transparent;
  padding: 4px 10px 0 15px;
  cursor: pointer;
`;

const Arrow = styled.div`
  width: 20px;
  height: 10px;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: center;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const List = styled.div`
  display: flex;
  margin-right: 630px;
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

const ListItem = styled.span`
  padding: 10px 10px 10px 0;
`;
export default function UserMenu() {
  return (
    <>
      <List>
        <ListItem>Щоденник</ListItem>
        <ListItem>Калькулятор</ListItem>
      </List>
      <Button type="button">
        <Arrow />
      </Button>
      <Title>Nic</Title>
      <Button type="button">Вихід</Button>
    </>
  );
}
