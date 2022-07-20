import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import Datetime from 'react-datetime';
import Button from '../button/Button.styled';
import { layoutStyles } from '../../stlyles/layoutStyles';
import 'react-datetime/css/react-datetime.css';
import { Div, DatePickerWrapperStyles } from './DateCalendar.styled';
import { toastStyles } from '../../stlyles/toastStyled';
import { toast } from 'react-toastify';
import { RiCalendar2Fill } from 'react-icons/ri';

import { fetchDairy } from '../../redux/dairy/dairyOperations';
import { addDate } from '../../redux/dairy/dairyReducer';
import authSelector from '../../redux/auth/selectors';

export default function DateCalendar() {
  const [value, setValue] = useState(moment(new Date()));
  const [openCalendar, setOpenCalendar] = useState(false);

  const dispatch = useDispatch();

  const dateConnect = new Date(useSelector(authSelector.getStartDate));

  const maxDate = moment(new Date());
  const minDate = moment(dateConnect);

  function dateFormat(date) {
    return `${date.format('YYYY.MM.DD')}Z`;
  }
  useEffect(() => {
    dispatch(addDate(dateFormat(value)));
    dispatch(fetchDairy(dateFormat(value)));
  }, [value, dispatch]);

  const setDate = date => {
    dispatch(addDate(date));
  };

  fetchDairy(dateFormat(value));

  const onChange = newValue => {
    setOpenCalendar(false);
    if (!moment(newValue, 'DD.MM.YYYY', true).isValid()) {
      newValue = maxDate;
      return;
    }
    if (newValue > maxDate) {
      newValue = maxDate;
      toast.warning(`Вибрана дата ще не настала!`, toastStyles);
      return;
    }
    if (newValue < minDate) {
      newValue = minDate;
      toast.warning(`На вибрану дату у додатку не має історії!`, toastStyles);
      return;
    }
    setValue(newValue);
    setDate(dateFormat(newValue));
  };
  return (
    <Div>
      <Datetime
        className="form-control"
        dateFormat="DD.MM.YYYY"
        value={value}
        timeFormat={false}
        closeOnSelect
        open={openCalendar}
        onChange={onChange}
      />

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
      <DatePickerWrapperStyles />
    </Div>
  );
}
