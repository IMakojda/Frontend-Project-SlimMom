import styled, { keyframes } from 'styled-components';

const heartBeat = keyframes`
  0% { transform: scale( .75 ); }
  20% { transform: scale( 1.1 ); }
  40% { transform: scale( .75 ); }
  60% { transform: scale( 1.1 ); }
  80% { transform: scale( .75 ); }
  100% { transform: scale( .75 ); }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    background: ${props =>
      props.show ? `linear-gradient(to left, #F0F1F3 , #fff)` : 'transparent'};
  }
  z-index: 1;
`;

export const StrawberryImg = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }
  position: absolute;
  display: ${props => (props.showImg ? 'flex' : 'none')};

  @media screen and (max-width: 1279px) {
    bottom: 140px;
    right: 10px;
  }

  @media screen and (min-width: 1280px) {
    bottom: 0px;
    right: 0px;
  }
  z-index: -1;
  animation: ${heartBeat} 4s;
`;

export const BananaImg = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }
  position: absolute;
  display: ${props => (props.showImg ? 'flex' : 'none')};
  @media screen and (max-width: 1279px) {
    bottom: 0px;
    right: 0px;
  }
  @media screen and (min-width: 1280px) {
    top: 0px;
    right: 0px;
  }
  z-index: -1;
`;

export const LeavesImg = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }
  position: absolute;
  display: ${props => (props.showImg ? 'flex' : 'none')};
  @media screen and (max-width: 1279px) {
    bottom: 0px;
    left: 0px;
  }
  @media screen and (min-width: 1280px) {
    top: 0px;
    right: 220px;
  }
  z-index: -1;
  animation: ${heartBeat} 4s;
`;

export const VectorImg = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }
  position: absolute;
  display: ${props => (props.showImg ? 'flex' : 'none')};
  bottom: 0px;
  right: 0px;
  z-index: -1;
`;

export const LeafSide = styled.img`
  pointer-events: none;
  @media screen and (max-width: 1279px) {
    display: none;
  }
  position: absolute;
  display: ${props => (props.showImg ? 'flex' : 'none')};
  top: 0px;
  right: 0px;
  z-index: 0;
`;
export const LeafFooter = styled.img`
  @media screen and (min-width: 1279px) {
    display: none;
  }
  position: absolute;
  display: ${props => (props.showImg ? 'flex' : 'none')};
  bottom: 0px;
  right: 0px;
  z-index: -1;
`;
