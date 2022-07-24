import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { layoutStyles } from '../../stlyles/layoutStyles';

const Link = styled(NavLink)`
  color: ${layoutStyles.placeholderColor};
  font-family: ${layoutStyles.gothamPro};
  font-size: 14px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0.04em;
  text-decoration: none;

  &.active {
    color: #212121;
  }
  :first-child {
    margin-right: 16px;
  }
  :hover{
    color:${layoutStyles.activeButton}
  }
`;

export default function AuthNav() {
  return (
    <>
      <Link to="/signup">Реєстрація</Link>
      <Link to="/login">Вхід</Link>
    </>
  );
}
