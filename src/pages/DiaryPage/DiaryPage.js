import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import DateCalendar from '../../components/DateCalendar/DateCalendar';
import ProductsList from '../../components/ProductsList/ProductsList';
import ProductForm from '../../components/Forms/ProductForm';
import Button from '../../components/button/Button.styled';
import { layoutStyles } from '../../stlyles/layoutStyles';
import { ImPlus } from 'react-icons/im';

import styles from './DiaryPage.module.css';

import {motion} from 'framer-motion';

export default function DiaryPage() {
  const [addProduct, setAddProduct] = useState(false);
  const isMobile = useMediaQuery({
    query: `(max-width: ${layoutStyles.tablet})`,
  });

  return (
    <motion.div className={styles.Wrapper}
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth,  transition:{duration: 0.1}}}
    >
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
    </motion.div>
  );
}
