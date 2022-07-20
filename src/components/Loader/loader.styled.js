import styled, { keyframes } from 'styled-components';

const animationDiv = keyframes`
     0%, 100% {
       transform: scale(1.0);
     }
     50% {
       transform: scale(0.5);
     }
`;
const animR = keyframes`
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
`;
export const GridDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 300px;
  height: 300px;
  margin-right: auto;
  margin-left: auto;
  margin-top: ${props => props.marginTop || '200px'};
  z-index: 50;
`;

export const DivComponent = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: transparent;
  animation: ${animR} 1.2s linear infinite;
  z-index: 60;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  animation: ${animationDiv} ${props => props.delay} 1.5s linear infinite;
  src: url(${props => props.img});
  z-index: 70;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.05);
`;
