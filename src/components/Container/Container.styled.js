import styled from 'styled-components';
import BgTablet from '../../images/BackgroundTablet.webp'
import BgDesk from'../../images/BackgroundDesc.webp'

export const ResponsiveContainer=styled.div`
  padding:20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    width:320px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px){
    height: 100vh;
    width: 768px;
    padding: 20px 30px;
    background-image: url(${BgTablet});
    background-position: bottom left;
    background-repeat: no-repeat;
    background-size: contain;
  }

  @media screen and (min-width: 1280px) {
    height: 100vh;
    width: 1280px;
    padding: 20px 80px;
    background-image: url(${BgDesk});
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: contain;
  }
`
