import styled from 'styled-components';

export const Wrapper = styled.div`
@media screen and (min-width: 768px) and (max-width: 1279px){
display: flex;
flex-direction: raw;
justify-content: space-between;
}

@media screen and (min-width: 1280px) {
display: flex;
flex-direction: column;
}
`;

export const Flex = styled.div`
max-width: 288px;

 @media screen and (min-width: 768px) {
  display: flex;
  flex-direction: column;
  }
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