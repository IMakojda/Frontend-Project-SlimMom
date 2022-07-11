import { useState } from 'react';
import Datetime from 'react-datetime';
import Button from '../button/Button.styled';
import {layoutStyles} from '../../stlyles/layoutStyles';
import 'react-datetime/css/react-datetime.css';
import styles from './DateCalendar.module.css';

import sprite from '../Image/icon/sprite.svg';

export default function DateCalendar() {
  const [value, setValue] = useState(new Date());
  const [openCalendar, setOpenCalendar] = useState(false);

  return (
    <div className={styles.wrapper}>
      <Datetime
        inputProps={{ className: styles.datetime }}
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
      <Button
        onClick={() => {
          setOpenCalendar(true);
        }}
        background={layoutStyles.mainBackground}
        width={'23px'}
        height={'23px'}
      >
        <svg width="20" height="20" fill={layoutStyles.placeholderColor}>
          <use href={`${sprite}#icon-calendar`}></use>
        </svg>
      </Button>
    </div>
  );
}
