import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 40px;
padding-bottom: 85px;

background-color: #F0F1F3;

@media screen and (min-width: 768px) and (max-width: 1279px) {
flex-direction: row;
justify-content: flex-start;
padding-left: 35px;
}

@media screen and (min-width: 1280px) {
position: absolute;
top: 0;
right: 0;
flex-direction: column;
justify-content: center;
align-items: center;
width: 500px;
height: 100vh;

padding: 0;

${'' /* margin-top: -30%;
margin-left: auto;
margin-right: -63px;
padding-top: 19%; */}
${'' /* background-color: white; */}
}
`;

export const SummaryWrap = styled.div`
width: 288px;

@media screen and (max-width: 767px) {
  margin-bottom: 40px;
  }

 @media screen and (min-width: 768px) and (max-width: 1279px) {
  margin-right: 80px;
  }

 @media screen and (min-width: 1280px) {
  margin-bottom: 60px;
  } 
`;

export const FoodRecWrap = styled.div`
width: 288px;

`;

export const List = styled.ul`
`;

export const Item = styled.li`
display:flex;
justify-content: space-between;
`;

export const Title = styled.h2`
margin-bottom: 20px;

font-size: 14px;
`;

export const Text = styled.p`
font-size: 14px;
line-height: 2;

color: #9B9FAA;
`;