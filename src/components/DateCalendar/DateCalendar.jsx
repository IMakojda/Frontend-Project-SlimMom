import { useState } from 'react';
import Datetime from 'react-datetime';
import Button from '../button/Button.styled';
import { layoutStyles } from '../../stlyles/layoutStyles';
import 'react-datetime/css/react-datetime.css';
import styled, { createGlobalStyle } from 'styled-components';

import { RiCalendar2Fill } from 'react-icons/ri';

export default function DateCalendar() {
  const [value, setValue] = useState(new Date());
  const [openCalendar, setOpenCalendar] = useState(false);

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

  return (
    <Div>
      <Datetime
        inputProps={{ className: 'form-control' }}
        dateFormat="DD.MM.yyyy"
        value={value}
        timeFormat={false}
        closeOnSelect
        open={openCalendar}
        onChange={newValue => {
          setValue(newValue);
          setOpenCalendar(false);
        }}
      />
      <DatePickerWrapperStyles />
      <Button
        onClick={() => {
          setOpenCalendar(true);
        }}
        background={layoutStyles.mainBackground}
        width={'23px'}
        height={'23px'}

      >
        <RiCalendar2Fill
          width="23"
          height="23"
          fill={layoutStyles.placeholderColor}
        />
      </Button>
    </Div>
  );
}
