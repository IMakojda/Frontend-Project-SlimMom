import styled from 'styled-components';
import { layoutStyles } from '../../stlyles/layoutStyles';
import { FiCornerDownLeft } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

export const Title = styled.h2`
  margin: 0;
  display: inline;
  font-family: ${layoutStyles.gothamPro};
  font-size: 14px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0.04em;
  padding: 15px 16px 13px 0;
  margin-left: 10px;
  border-right: 2px solid ${layoutStyles.formBorderColor};
`;

export const Button = styled.button`
  font-family: ${layoutStyles.gothamPro};
  font-size: 14px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0.04em;
  color: ${layoutStyles.placeholderColor};
  border: none;
  background-color: transparent;
  padding: 4px 10px 0 15px;
  cursor: pointer;
  z-index: 30;
  &:hover {
    color: ${layoutStyles.activeButton};
  }
`;

export const Arrow = styled(FiCornerDownLeft)`
  @media only screen and (min-width: ${layoutStyles.tablet}) {
    display: none;
    visibility: hidden;
  }
`;

export const List = styled.div`
  display: none;
  @media only screen and (min-width: ${layoutStyles.deskTop}) {
    display: flex;
    margin-right: 550px;
  }
`;

export const ListItem = styled(NavLink)`
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

export const ToastTitle = styled.h2`
  padding: 20px;
  font-family: ${layoutStyles.gothamPro};
  font-size: 14px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0.04em;
`;

export const Wrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;
export const ImgAvatar = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const WrapperAvatar = styled.div`
  width: 50px;
  height: 45px;
  overflow: hidden;
`;
