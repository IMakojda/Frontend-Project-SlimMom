import { layoutStyles } from '../../stlyles/layoutStyles';
import styled, { createGlobalStyle } from 'styled-components';


 const Div = styled.div`
 display: flex;
 margin: 0;
 padding: 0;
`;

const DatePickerWrapperStyles = createGlobalStyle`
    .form-control {
  border: none;
  font-size: 18px;
  width: 116px;
  font-weight: 700;
  line-height: 1.22;
  padding: 0;
  font-family: ${layoutStyles.verdana};
  letter-spacing: 0.04em;
    table{
  font-size: 16px;
  font-weight: 400;
}
}
.rdtPicker td.rdtActive,
.rdtPicker td.rdtActive:hover {
  background-color: ${layoutStyles.activeButton} !important;
}
.rdtPicker td.rdtToday:before {
  border-bottom: 7px solid ${layoutStyles.activeButton};
}
@media screen and (min-width: ${layoutStyles.tablet}) {
  .form-control {
    font-size: 34px;
    width: 219px;
  }
}

`;

export {Div, DatePickerWrapperStyles}