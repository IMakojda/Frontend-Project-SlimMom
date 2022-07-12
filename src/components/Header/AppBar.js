import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { layoutStyles } from '../../stlyles/layoutStyles';
import logo from '../Image/Logo/logo.png';
import logoBig from '../Image/Logo/logo@2x.png';
import slim from '../Image/Logo/slim.png';
import mom from '../Image/Logo/mom.png';
import vector from '../Image/Logo/vector.png';
import styled from 'styled-components';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import authSelectors from '../../redux/auth/selectors';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${layoutStyles.formBorderColor};

  @media only screen and (min-width: ${layoutStyles.deskTop}) {
    border-bottom: none;
    justify-content: start;
    align-items: baseline;
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
    left: 67px;
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
    left: 67px;
    border-right: 2px solid ${layoutStyles.formBorderColor};
    padding-right: 20px;
  }
`;

const WrapperUserMenu = styled.div`
  width: 100%;
  heigth: auto;
  display: flex;
  justify-content: space-between;

  background-color: #eff1f3;
  @media only screen and (min-width: ${layoutStyles.tablet}) {
    display: none;
  }
`;

const WrapperUserMenuDesktop = styled.div`
  width: 100%;
  heigth: auto;
  display: flex;
  justify-content: space-between;

  margin-right: 50px;
  @media only screen and (max-width: ${layoutStyles.tablet}) {
    display: none;
  }
`;
const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 20px 0 16px 20px;
  @media only screen and (min-width: ${layoutStyles.deskTop}) {
    position: relative;
    padding: 80px 0 0 16px;
    margin-right: 135px;
  }
`;

const NavHeader = styled.nav`
  padding: 20px 20px 16px 14px;
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

const Button = styled.button`
  background-image: url(${vector});
  border: none;
  background-color: transparent;
  width: 24px;
  height: 24px;
  padding: 0;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center;

  @media only screen and (min-width: ${layoutStyles.deskTop}) {
    display: none;
  } ;
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
              <Button />
            </>
          ) : (
            <AuthNav />
          )}
        </NavHeader>
      </Header>

      {isLoggedIn && (
        <WrapperUserMenu>
          <UserMenu />
        </WrapperUserMenu>
      )}
    </>
  );
}
