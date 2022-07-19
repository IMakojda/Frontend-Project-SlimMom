import { layoutStyles } from '../../stlyles/layoutStyles';
import styled from 'styled-components';

const DivWrapper = styled.div`
  position: relative;
  display: block;
  padding-top: 40px;
  margin: 0 auto 0;
  max-width: 320px;

  @media screen and (min-width: ${layoutStyles.tablet}) {
    max-width: 748px;
  }
  @media screen and (min-width: ${layoutStyles.deskTop}) {
    max-width: 748px;
  }
`;

const DivDate = styled.div`
  margin-bottom: 32px;

  @media screen and (min-width: ${layoutStyles.tablet}) {
    margin-bottom: 60px;
    padding-top: 100px;
  }
  @media screen and (min-width: ${layoutStyles.deskTop}) {
    padding-top: 150px;
  }
`;

export { DivDate, DivWrapper };
