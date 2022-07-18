import styled from 'styled-components';
import { layoutStyles } from '../../stlyles/layoutStyles';
import { MdClose } from 'react-icons/md';
import { FiCornerDownLeft } from 'react-icons/fi';

const { transparentGrey, mainBackground, modalWrapperColor, verdanaBold } =
  layoutStyles;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: scroll;
  
  @media screen and (min-width: 768px) {
    background: ${transparentGrey};
  }
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 672px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: ${mainBackground};
  color: ${modalWrapperColor};
  @media screen and (max-width: 767px) {
    top: 502px;
    // left: 50%;
    width: 100vh;
    border-radius: 0px;
    box-shadow: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: ${verdanaBold};
  padding: 64px 81px 81px 81px;
  text-align: center;
  font-family: 'Verdana';
  margin: auto;
  color: ${modalWrapperColor};
  @media screen and (max-width: 767px) {
    padding: 40px 20px 120px 20px;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  padding: 0;
  z-index: 10;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Button = styled.button`
  margin-top: 80px;
  max-width: 767px;
  height:40px;
  font-family: ${layoutStyles.gothamPro};
  font-size: 14px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0.04em;
  color: ${layoutStyles.placeholderColor};
  border: none;
  padding-left: 50px;
  padding-right: 100%;
  cursor: pointer;

  &:hover {
    color: ${layoutStyles.activeButton};
  };
  @media only screen and (min-width: ${layoutStyles.tablet}) {
    display: none;
    visibility: hidden;
  }

`;

export const Arrow = styled(FiCornerDownLeft)`

  @media only screen and (min-width: ${layoutStyles.tablet}) {
    display: none;
    visibility: hidden;
  }
`;