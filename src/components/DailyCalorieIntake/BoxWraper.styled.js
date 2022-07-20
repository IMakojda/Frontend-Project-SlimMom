import styled from 'styled-components';
const BoxWraper = styled.div`
display:flex;
height: 112px;
flex-direction: column;
justify-content: space-between;
margin-bottom: 40px;
  @media screen and (min-width: 768px) and (max-width: 1024px) {
  width: 288px;
  }
`
export default BoxWraper;
