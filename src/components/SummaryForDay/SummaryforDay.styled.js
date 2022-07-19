import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media screen and (max-width: 767px) {
margin-top: 100px;
padding-bottom: 85px;
}

@media screen and (min-width: 768px) and (max-width: 1279px) {
flex-direction: row;
justify-content: flex-start;
margin-top: 130px;
padding-left: 15px;
padding-bottom: 85px;
}

@media screen and (min-width: 1280px) {
flex-direction: column;
justify-content: center;
align-items: center;
width: 288px;
margin-right: 135px;
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
font-weight: 400;
line-height: 2;

color: #9B9FAA;
`;