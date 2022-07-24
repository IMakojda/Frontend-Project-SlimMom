import styled, { keyframes } from 'styled-components';
import { layoutStyles } from '../../stlyles/layoutStyles';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo/logo.png';
import logoBig from '../../images/Logo/logo@2x.png';
import slim from '../../images/Logo/slim.png';
import mom from '../../images/Logo/mom.png';

const heartBeat = keyframes`
  0% { transform: scale( .75 ); }
  20% { transform: scale( 1.1 ); }
  40% { transform: scale( .75 ); }
  60% { transform: scale( 1.1 ); }
  80% { transform: scale( .75 ); }
  100% { transform: scale( .75 ); }
`;

export const Header = styled.header`
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
    margin-right: auto;
    margin-left: auto;
    align-items: baseline;
    padding: 80px 0 0 16px;
    max-width: 1280px;
    margin-right: 50px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 20px 0px 16px 10px;

  @media only screen and (max-width: 400px) {
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

export const WrapperMobile = styled.div`
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

export const WrapperUserMenu = styled.div`
  width: auto;
  heigth: auto;
  display: flex;
  justify-content: space-between;
  background-color: #eff1f3;
  @media only screen and (min-width: ${layoutStyles.tablet}) {
    display: none;
  }
`;

export const WrapperUserMenuDesktop = styled.div`
  heigth: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: ${layoutStyles.tablet}) {
    display: none;
  }
`;

export const Link = styled(NavLink)`
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

export const NavHeader = styled.nav`
  display: flex;
  @media only screen and (min-width: ${layoutStyles.deskTop}) {
    display: flex;
    align-items: center;
  }
`;

export const Logo = styled.div`
  min-width: 46.67px;
  min-height: 44px;
  background-image: url(${logo});
  background-size: cover;
  @media only screen and (min-width: ${layoutStyles.deskTop}) {
    min-height: 66px;
    min-width: 70px;
    background-image: url(${logoBig});
    animation: ${heartBeat} 4s;
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const LogoSlim = styled.span`
  width: 52.18px;
  height: 17.27px;
  margin-right: 6px;
  background-image: url(${slim});
  background-size: cover;
  transition: all 0.2s ease-in-out;
}
&:hover {
  transform: scale(1.1);
}
`;

export const LogoMom = styled.span`
  width: 59.18px;
  height: 17.27px;
  background-image: url(${mom});
  background-size: cover;
  transition: all 0.2s ease-in-out;
}
&:hover {
  transform: scale(1.1);
}
`;
