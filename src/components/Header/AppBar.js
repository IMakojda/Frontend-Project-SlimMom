import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { layoutStyles } from '../../stlyles/layoutStyles';
import logo from '../Image/Logo/logo.png';
import logoBig from '../Image/Logo/logo@2x.png';
import slim from '../Image/Logo/slim.png';
import mom from '../Image/Logo/mom.png';

import styled from 'styled-components';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import authSelectors from '../../redux/auth/selectors';

import { NavState } from 'components/Burger/NavState/NavState';
import MainMenu from 'components/Burger/MainMenu';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 16px 20px;
  border-bottom: 2px solid ${layoutStyles.formBorderColor};
  @media only screen and (min-width: ${layoutStyles.tablet}) {
    padding: 20px 32px 16px 32px;
  }
  @media only screen and (min-width: ${layoutStyles.deskTop}) {
    border-bottom: none;
    justify-content: start;
    align-items: baseline;
    padding: 80px 0 0 16px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  padding: 20px 0px 16px 10px;

  @media only screen and (max-width: ${layoutStyles.tablet}) {
    display: none;
    padding: 20px 0 16px 20px;
  }

  @media only screen and (min-width: ${layoutStyles.deskTop}) {
    position: absolute;
    bottom: -15px;
    left: 51px;
    border-right: 2px solid ${layoutStyles.formBorderColor};
    padding-right: 20px;
  }
`;

const WrapperMobile = styled.div`
  display: flex;
  padding: 20px 0px 16px 10px;

  @media only screen and (min-width: ${layoutStyles.deskTop}) {
    position: absolute;
    bottom: -15px;
    left: 51px;
    border-right: 2px solid ${layoutStyles.formBorderColor};
    padding-right: 20px;
  }
`;

const WrapperUserMenu = styled.div`
  width: auto;
  heigth: auto;
  display: flex;
  justify-content: space-between;
  background-color: #eff1f3;
  @media only screen and (min-width: ${layoutStyles.tablet}) {
    display: none;
  }
`;

const WrapperUserMenuDesktop = styled.div`
  heigth: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: ${layoutStyles.tablet}) {
    display: none;
  }
`;
const Link = styled(NavLink)`
  display: flex;
  align-items: center;

  @media only screen and (min-width: ${layoutStyles.tablet}) {
    margin-right: 330px;
  }

  @media only screen and (min-width: ${layoutStyles.deskTop}) {
    position: relative;
    margin-right: 150px;
  }
`;

const NavHeader = styled.nav`
  display: flex;
  @media only screen and (min-width: ${layoutStyles.deskTop}) {
    display: flex;
    align-items: center;
  }
`;
const Logo = styled.div`
  min-width: 46.67px;
  min-height: 44px;

  background-image: url(${logo});
  background-size: cover;
  @media only screen and (min-width: ${layoutStyles.deskTop}) {
    min-height: 66px;
    min-width: 70px;
    background-image: url(${logoBig});
  } ;
`;
const LogoSlim = styled.span`
  width: 52.18px;
  height: 17.27px;
  margin-right: 6px;
  background-image: url(${slim});
  background-size: cover;
`;

const LogoMom = styled.span`
  width: 59.18px;
  height: 17.27px;
  background-image: url(${mom});
  background-size: cover;
`;

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <Header>
        <Link to="/">
          {isLoggedIn ? (
            <>
              <Logo />
              <WrapperMobile>
                <LogoSlim />
                <LogoMom />
              </WrapperMobile>
            </>
          ) : (
            <>
              <Logo />
              <Wrapper>
                <LogoSlim />
                <LogoMom />
              </Wrapper>
            </>
          )}
        </Link>

        <NavHeader>
          {isLoggedIn ? (
            <>
              <WrapperUserMenuDesktop>
                <UserMenu />
              </WrapperUserMenuDesktop>
            </>
          ) : (
            <AuthNav />
          )}
        </NavHeader>
        {isLoggedIn && (
          <NavState>
            <MainMenu />
          </NavState>
        )}
      </Header>

      {isLoggedIn && (
        <WrapperUserMenu>
          <UserMenu />
        </WrapperUserMenu>
      )}
    </>
  );
}
