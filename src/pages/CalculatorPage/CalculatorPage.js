import { useMediaQuery } from 'react-responsive';

import DateCalendar from '../../components/DateCalendar/DateCalendar';
import ProductsList from '../../components/ProductsList/ProductsList';
import ProductForm from '../../components/Forms/ProductForm';
import Button from '../../components/button/Button.styled';
import {layoutStyles} from '../../stlyles/layoutStyles';

import sprite from '../../components/Image/icon/sprite.svg';
import styles from './Calculator.module.css';


export default function CalculatorPage() {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <div className={styles.Wrapper}>
      <div className={styles.WrapperDate}>
        <DateCalendar />
      </div>

      {!isMobile && <ProductForm />}
      <ProductsList />
      {isMobile && 
        <Button
          margin={'60px auto 0'}
        >
          <svg width="20" height="20" fill={layoutStyles.mainBackground}>
            <use href={`${sprite}#icon-plus`}></use>
          </svg>
        </Button>
      }
    </div>
  );
}
