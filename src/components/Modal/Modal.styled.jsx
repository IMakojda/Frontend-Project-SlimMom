import styled from 'styled-components';
import { layoutStyles } from '../../stlyles/layoutStyles';
import { MdClose } from 'react-icons/md';
import { FiCornerDownLeft } from 'react-icons/fi';

const { transparentGrey, mainBackground, modalWrapperColor, verdanaBold } =
  layoutStyles;

export const Background = styled.div`
  top: 0;
  left:0;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 5;

  @media screen and (min-width: 768px) {
    background: ${transparentGrey};
    position: fixed;
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
    top: 485px;
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
  position: absolute;
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
  padding-right: 93%;
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

export const StileButtonWrapper = styled.div`
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;


export const Btn = styled.button`
  height: 44px;
  width: 182px;
  font-weight: 700;
  font-size: 14px;
  background: #fc842d;
  color: #ffffff;
  border: 2px solid #fc842d;
  border-radius: 30px;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  padding-top: 13px;
  padding-bottom: 13px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
  }
  @media screen and (min-width: 1280px) {
    margin: 0 auto;
  }

  &:hover,
  &:focus {
    background: #ffffff;
    border: 2px solid #fc842d;
    border-radius: 30px;
    color: #fc842d;
    cursor: pointer;
  }
`;