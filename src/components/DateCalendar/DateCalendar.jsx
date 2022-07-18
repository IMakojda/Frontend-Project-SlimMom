import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import Datetime from 'react-datetime';
import Button from '../button/Button.styled';
import { layoutStyles } from '../../stlyles/layoutStyles';
import 'react-datetime/css/react-datetime.css';
import styled, { createGlobalStyle } from 'styled-components';

import { RiCalendar2Fill } from 'react-icons/ri';

import { fetchDairy } from '../../redux/dairy/dairyOperations';
import { addDate } from '../../redux/dairy/dairyReducer';

export default function DateCalendar() {
  const [value, setValue] = useState(moment(new Date()));
  const [openCalendar, setOpenCalendar] = useState(false);
  const maxDate = moment(new Date());
  const minDate = moment('1922.01.01');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDairy(dateFormat(value)));
  }, [value, dispatch]);

  const setDate = date => {
    dispatch(addDate(date));
  };

  function dateFormat(date) {
    return `${date.format('YYYY.MM.DD')}Z`;
  }

  setDate(dateFormat(value));
  fetchDairy(dateFormat(value));

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

  return (
    <Div>
      <Datetime
        className="form-control"
        dateFormat="DD.MM.yyyy"
        value={value}
        timeFormat={false}
        closeOnSelect
        open={openCalendar}
        onChange={newValue => {
          if (newValue > maxDate) {
            newValue = maxDate;
          }
          if (newValue < minDate) {
            newValue = minDate;
          }
          setValue(newValue);
          setOpenCalendar(false);
          setDate(dateFormat(newValue));
        }}
      />
      <DatePickerWrapperStyles />
      <Button
        onClick={() => {
          if (openCalendar) {
            return setOpenCalendar(false);
          }
          setOpenCalendar(true);
        }}
        background={layoutStyles.mainBackground}
        boxShadow={'none'}
        width={'23px'}
        height={'23px'}
        margin={'0'}
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
