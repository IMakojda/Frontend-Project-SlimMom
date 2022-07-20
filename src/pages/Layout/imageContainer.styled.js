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
  height: 100vh;
`

export const StrawberryImg=styled.img`
  @media screen and (max-width: 768px){
    display: none;
  }
  position: absolute;
  display: ${props => (props.showImg ? 'flex' : 'none')};
  bottom: ${props => (props.desktop ? `60px` : `190px`)};
  right:${props => (props.desktop ? '20px' : '20px')};
  z-index: -1;
  animation: ${heartBeat} 4s;
`

export const BananaImg=styled.img`
  @media screen and (max-width: 768px){
    display: none;
  }
  position: absolute;
  display: ${props=>(props.showImg ? 'flex' : 'none')};
  bottom: ${props=>(props.desktop ? '550px' : '0px')};
  right:${props=>(props.desktop ? '0px' : '0px')};
  z-index: -1;
`

export const LeavesImg=styled.img`
  @media screen and (max-width: 768px){
    display: none;
  }
  position: absolute;
  display: ${props=>(props.showImg ? 'flex' : 'none')};
  top: ${props=>(props.desktop ? '0px' : '50%')};
  left:${props=>(props.desktop ? '200px' : '20px')};
  z-index: -1;
  animation: ${heartBeat} 4s;
`

export const VectorImg=styled.img`
  @media screen and (max-width: 768px){
    display: none;
  }
  position: absolute;
  display: ${props=>(props.showImg ? 'flex' : 'none')};
  bottom: ${props=>(props.desktop ? '0px' : '0px')};
  right:${props=>(props.desktop ? '0px' : '0px')};
  z-index: -1;
`

export const LeafSide=styled.img`
  @media screen and (max-width: 1279px){
    display: none;
  }
  position: absolute;
  display: ${props=>(props.showImg ? 'flex' : 'none')};
  bottom: 0px;
  right:0px;
  z-index: -1;
`
export const LeafFooter=styled.img`

  @media screen and (min-width: 1280px){
    display: none;
  }
  position: absolute;
  display: ${props=>(props.showImg ? 'flex' : 'none')};
  bottom: 0px;
  right:0px;
  z-index: -1;
`



