import { useMediaQuery } from 'react-responsive';
import {  useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import DateCalendar from '../../components/DateCalendar/DateCalendar';
import ProductsList from '../../components/ProductsList/ProductsList';
import ProductForm from '../../components/Forms/ProductForm/ProductForm';
import Button from '../../components/button/Button.styled';
import { layoutStyles } from '../../stlyles/layoutStyles';
import { ImPlus } from 'react-icons/im';
import { changeToggle } from '../../redux/dairy/dairyReducer';

import { DivDate, DivWrapper } from './DiaryPage.styled';

export default function DiaryPage() {
  const dispatch = useDispatch();

  const isMobile = useMediaQuery({
    query: `(max-width: ${layoutStyles.tablet})`,
  });

  return (
    <motion.div>
      <DivWrapper>
        <DivDate>
          <DateCalendar />
        </DivDate>
        <ProductForm />
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
      </DivWrapper>
    </motion.div>
  );
}
