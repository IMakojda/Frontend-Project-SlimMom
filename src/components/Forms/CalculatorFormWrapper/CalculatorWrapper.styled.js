import styled from 'styled-components';

export const CalculatorWrapperStyle = styled.div`{
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-device-width: 320px) and (max-device-width: 767px) {
  display: flex;
  justify-content: center;
    max-width: 320px;
    padding-top:32px;
  }

  @media screen and (min-device-width: 768px)  {
    max-width:510px;
    padding-top: 100px;
    margin-left: 0px;
  }

   @media screen and (min-device-width: 1280px) {
   max-width:510px;
   margin: 0;
   padding: 0;
  }
`;
