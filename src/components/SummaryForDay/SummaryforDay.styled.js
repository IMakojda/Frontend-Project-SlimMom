import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 40px;
padding-bottom: 85px;
background-color: #F0F1F3;

@media screen and (min-width: 768px) {
flex-direction: row;
justify-content: space-around;
}

@media screen and (min-width: 1280px) {
position: absolute;

flex-direction: column;
justify-content: center;
align-items: center;
max-width: 500px;
}
`;

export const SummaryWrap = styled.div`
width: 288px;

 ${'' /* @media screen and (min-width: 768px) {
  display: flex;
  flex-direction: column;
  } */}
`;

export const FoodRecWrap = styled.div`
width: 288px;

 ${'' /* @media screen and (min-width: 768px) {
  display: flex;
  flex-direction: column;
  } */}
`;

export const List = styled.ul`
  margin-bottom: 40px;
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