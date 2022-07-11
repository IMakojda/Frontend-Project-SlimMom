import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(NavLink)`
  color: #9b9faa;
  font-family: Gotham Pro;
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
`;

export default function AuthNav() {
  return (
    <>
      <Link to="/register">Реєстрація</Link>
      <Link to="/login">Вхід</Link>
    </>
  );
}
