import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import DateCalendar from '../../components/DateCalendar/DateCalendar';
import ProductsList from '../../components/ProductsList/ProductsList';
import ProductForm from '../../components/Forms/ProductForm';
import Button from '../../components/button/Button.styled';
import { layoutStyles } from '../../stlyles/layoutStyles';
import { ImPlus } from 'react-icons/im';

import styles from './DiaryPage.module.css';

export default function DiaryPage() {
  const [addProduct, setAddProduct] = useState(false);
  const isMobile = useMediaQuery({
    query: `(max-width: ${layoutStyles.tablet})`,
  });

  return (
    <div className={styles.Wrapper}>
      <div className={styles.WrapperDate}>
        <DateCalendar />
      </div>

      {isMobile && addProduct ? <ProductForm  /> : <ProductForm display={'none'} />}
      <ProductsList />
      {isMobile && (
        <Button
        onClick={()=>{setAddProduct(true)}}
        margin={'60px auto 0'}
        >
          <ImPlus width="20" height="20" fill={layoutStyles.mainBackground} />
        </Button>
      )}
    </div>
  );
}
