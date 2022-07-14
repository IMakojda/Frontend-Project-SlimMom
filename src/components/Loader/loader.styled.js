import styled, { keyframes } from 'styled-components';

export const GridDiv=styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 150px;
  height: 150px;
  margin-right: auto;
  margin-left: auto;
  margin-top:100px
`
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

 export const DivComponent=styled.div`
//position: absolute;
width: 50px;
height: 50px;
border-radius: 50%;
background: transparent;
animation: ${animR} 1.2s linear infinite;
`
export const Img=styled.img`
  //position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: 50px;
  height: 50px;
  animation: ${animationDiv} ${props => props.delay} 1.5s linear infinite;
  src: url(${props => props.img})
`

export const Banana=styled.div`
    position: absolute;
     top: 25px;
     left: 8px;
     background: darkred;

`
//
// export const Orange=styled.div`
//   top: 8px;
//   left: 32px;
//   animation-delay: -0.4s;
// `
//
// export const Mandarin=styled.div`
//   top: 8px;
//   left: 56px;
//   animation-delay: -0.8s;`
//
// export const Kiwi=styled.div`
//   top: 32px;
//   left: 8px;
//   animation-delay: -0.4s;
// `
// export const Apple=styled.div`
//   top: 32px;
//   left: 32px;
//   animation-delay: -0.8s;
// `
// export const Lemon=styled.div`
//   top: 32px;
//   left: 56px;
//   animation-delay: -1.2s;
// `
// export const Watermelon=styled.div`
//   top: 56px;
//   left: 8px;
//   animation-delay: -0.8s;
// `
// export const Lime=styled.div`
//   top: 56px;
//   left: 32px;
//   animation-delay: -1.2s;
// `
// export const Avocado=styled.div`
//   top: 56px;
//   left: 56px;
//   animation-delay: -1.6s;
// `


