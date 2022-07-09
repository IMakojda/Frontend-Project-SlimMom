import styled from 'styled-components';

export const ResponsiveContainer=styled.div`
  display: flex;
  justify-content: center;
  padding:20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-device-width: 480px) and (max-device-width: 768px) {
    width: 480px;
  }

  @media screen and (min-device-width: 768px) and (max-device-width: 1199px){
    width: 768px;
    padding: 20px 30px;
  }

  @media screen and(min-device-width: 1200px) {
    width: 1200px;
    padding: 20px 80px;
  }
`
