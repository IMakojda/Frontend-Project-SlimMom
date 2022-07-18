import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import DateCalendar from '../../components/DateCalendar/DateCalendar';
import ProductsList from '../../components/ProductsList/ProductsList';
import ProductForm from '../../components/Forms/ProductForm';
import Button from '../../components/button/Button.styled';
import { layoutStyles } from '../../stlyles/layoutStyles';
import { ImPlus } from 'react-icons/im';
import { changeToggle } from '../../redux/dairy/dairyReducer';
import { getToggle } from '../../redux/dairy/dairySelector';

import styles from './DiaryPage.module.css';

export default function DiaryPage() {
  const dispatch = useDispatch();
  const toggle = useSelector(getToggle);

  const isMobile = useMediaQuery({
    query: `(max-width: ${layoutStyles.tablet})`,
  });

  return (
    <motion.div>
      <div className={styles.Wrapper}>
        <div className={styles.WrapperDate}>
          <DateCalendar />
        </div>

        {isMobile && toggle ? (
          <ProductForm />
        ) : (
          <ProductForm display={'none'} />
        )}
        <ProductsList />
        {isMobile && (
          <Button
            onClick={() => {
              dispatch(changeToggle(true));
            }}
            margin={'60px auto 0'}
          >
            <ImPlus width="20" height="20" fill={layoutStyles.mainBackground} />
          </Button>
        )}
      </div>
    </motion.div>
  );
}
