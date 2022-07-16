import styled from 'styled-components';
import { layoutStyles } from '../../stlyles/layoutStyles';
import { MdClose } from 'react-icons/md';

const { transparentGrey, mainBackground, modalWrapperColor, verdanaBold } =
  layoutStyles;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: scroll;
  background: ${transparentGrey};
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 672px;
  min-height: 573px;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: ${mainBackground};
  color: ${modalWrapperColor};
  @media screen and (max-width: 767px) {
    top: 65%;
    left: 50%;
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