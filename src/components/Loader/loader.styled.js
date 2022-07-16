import styled, { keyframes } from 'styled-components';

const animationDiv=keyframes`
     0%, 100% {
       transform: scale(1.0);
     }
     50% {
       transform: scale(0.5);
     }
`
const animR=keyframes`
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
`
export const GridDiv=styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 210px;
  height: 210px;
  margin-right: auto;
  margin-left: auto;
  margin-top:100px
`

 export const DivComponent=styled.div`
width: 70px;
height: 70px;
border-radius: 50%;
background: transparent;
animation: ${animR} 1.2s linear infinite;
`

export const Img=styled.img`
  //position: absolute;
  // top: ${props => props.top};
  // left: ${props => props.left};
  width: 70px;
  height: 70px;
  animation: ${animationDiv} ${props => props.delay} 1.5s linear infinite;
  src: url(${props => props.img})
`

export const Overlay=styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background-color:rgba(0,0,0,0.10);
`
