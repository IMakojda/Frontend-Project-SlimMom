import { useSelector } from 'react-redux';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import authSelectors from '../../redux/auth/selectors';
import { NavState } from 'components/Burger/NavState/NavState';
import MainMenu from 'components/Burger/MainMenu';

import { Header,
Wrapper,
WrapperMobile,
WrapperUserMenu,
WrapperUserMenuDesktop,
NavHeader,
Logo,
LogoSlim,
LogoMom,
Link} from './AppBarStyled';

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
