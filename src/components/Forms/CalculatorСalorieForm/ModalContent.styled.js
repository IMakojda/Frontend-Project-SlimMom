import styled from 'styled-components';

export const Item = styled.li`
  margin-bottom: 20px;
`;

export const Calorie = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  letter-spacing: 0.04em;
  padding-bottom: 45px;
  color: #264061;
  min-width: 280px;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 25px;
`;

export const ProductList = styled.ol`
  text-align: left;
  padding-left: 22px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
`;

export const Call = styled.span`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #264061;
`;

export const CalorieHeader = styled.h2`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #212121;
  margin-bottom: 60px;
  max-width: 280px;
  text-align: center;

  @media screen and (min-device-width: 768px) {
    margin-bottom: 45px;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 32px;
    max-width: 370px;
  }
`;

export const Foods = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #212121;
  max-width: 330px;
  margin-bottom: 25px;

  @media screen and (min-device-width: 768px) {
    text-align: left;
  }
`;
