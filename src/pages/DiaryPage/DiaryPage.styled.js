import { layoutStyles } from '../../stlyles/layoutStyles';
import styled from 'styled-components';

const ContentWrap = styled.div`
@media screen and (min-width: ${layoutStyles.deskTop}) {
  display: flex;
  justify-content: space-between;
  align-items:flex-start;
  padding-top: 150px;
  }
`

const DivWrapper = styled.div`
  position: relative;
  display: block;
  padding-top: 40px;
  margin: 0 auto 0;
  max-width: 320px;

  @media screen and (min-width: ${layoutStyles.tablet}) {
    max-width: 748px;
    margin: 0;
    padding-top: 100px;
  }
  @media screen and (min-width: ${layoutStyles.deskTop}) {
    max-width: 748px;
    margin: 0;
    padding: 0;
  }
`;

const DivDate = styled.div`
  margin-bottom: 32px;

  @media screen and (min-width: ${layoutStyles.tablet}) {
    margin-bottom: 60px;
  }
`;

export { DivDate, DivWrapper, ContentWrap };
