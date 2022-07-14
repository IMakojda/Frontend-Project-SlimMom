import { createGlobalStyle } from 'styled-components';
import { layoutStyles } from '../../stlyles/layoutStyles';

export const DivStyles = createGlobalStyle`
::-webkit-scrollbar {
  width: 6px;
}
 
::-webkit-scrollbar-track {
  background-color: ${layoutStyles.scrollbarTrack};
}
 
::-webkit-scrollbar-thumb {
  background-color: ${layoutStyles.scrollbarTumb};
}
.control {
  border: none;
  padding: 0;
  max-height: 252px;
  margin-left: -8px;
}
.table{
  min-width: 230px;
  border-collapse: separate ;
  border-spacing: 8px 0px ;
  font-family: ${layoutStyles.verdana};
  font-weight: 700;
  font-size: 14px; 
  max-height: 252px;
  display: inline-block;
  overflow-y: scroll;
  overflow-x: hidden;
}
.td-name{
  border-bottom: 1px solid ${layoutStyles.formBorderColor};
  padding: 20px 0 8px;
  width: 130px;
}
.td-weight{
  border-bottom: 1px solid ${layoutStyles.formBorderColor};
  padding: 20px 0 8px;
  width: 49px;
  text-align: right;
}
.td-calories{
  border-bottom: 1px solid ${layoutStyles.formBorderColor};
  padding: 20px 0 8px;
  width: 59px;
  text-align: right;
}
@media screen and (min-width: ${layoutStyles.tablet}) {
  .control {
  margin-left: -22px;
}
  .table{
  border-spacing: 22px 0px;
  min-width: 610px;
  }
  .td-name{
  width: 240px;
}
.td-weight{
  width: 106px;
}
.td-calories{
  width: 106px;
}
}
@media screen and (min-width: ${layoutStyles.deskTop}) {
  .control {
  margin-left: -48px;
}
  .table{
  border-spacing: 48px 0px;
  min-width: 731px;
  }
}
`;
