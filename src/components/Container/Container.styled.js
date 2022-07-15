import styled from 'styled-components';
import BgTablet from '../../images/BackgroundTablet.webp';
import BgDesk from '../../images/BackgroundDesc.webp';

export const ResponsiveContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 20px 20px;
  width: 100%;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    height: 100vh;
    padding: 20px 20px;
    // background-image: url(${BgTablet});

    background-position: bottom left;
    background-repeat: no-repeat;
    background-size: contain;
  }

  @media screen and (min-width: 1280px) {
    height: 100vh;
    width: 1280px;
    // background-image: url(${BgDesk});
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;
