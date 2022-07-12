import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FiCornerDownLeft } from 'react-icons/fi';
import { layoutStyles } from '../../stlyles/layoutStyles';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/selectors';
import authOperations from '../../redux/auth/authOperations';
const Title = styled.h2`
  margin: 0;
  display: inline;
  font-family: ${layoutStyles.gothamPro};
  font-size: 14px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0.04em;
  margin-left: auto;
  padding: 15px 16px 13px 0;
  border-right: 2px solid ${layoutStyles.formBorderColor};
`;

const Button = styled.button`
  font-family: Gotham Pro;
  font-size: 14px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0.04em;
  color: ${layoutStyles.placeholderColor};
  border: none;
  background-color: transparent;
  padding: 4px 10px 0 15px;
  cursor: pointer;
`;

const Arrow = styled(FiCornerDownLeft)`
  @media only screen and (min-width: ${layoutStyles.tablet}) {
    display: none;
    visibility: hidden;
  }
`;

const List = styled.div`
  display: flex;
  margin-right: 630px;
  @media only screen and (max-width: ${layoutStyles.deskTop}) {
    display: none;
  }
`;

const ListItem = styled(NavLink)`
  color: ${layoutStyles.placeholderColor};
  font-family: ${layoutStyles.gothamPro};
  font-size: 14px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0.04em;
  padding: 10px 10px 10px 0;
  &.active {
    color: #212121;
  }
`;
export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <>
      <List>
        <ListItem to="/diary">Щоденник</ListItem>
        <ListItem to="/calculator">Калькулятор</ListItem>
      </List>
      <Button type="button">
        <Arrow color="black" size="20px" />
      </Button>
      <Title>{name}</Title>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Вихід
      </Button>
    </>
  );
}
