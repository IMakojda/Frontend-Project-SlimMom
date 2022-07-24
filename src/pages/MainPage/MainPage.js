import { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import CalculatorFormWrapper from '../../components/Forms/CalculatorFormWrapper';
import { ContentWrap } from 'pages/DiaryPage/DiaryPage.styled';
import SummaryForDay from 'components/SummaryForDay';
import authSelector from 'redux/auth/selectors';
import { motion } from 'framer-motion';

export default function MainPage() {
  const userIsLoggedIn = useSelector(authSelector.getIsLoggedIn);

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev);
  };
  if (showModal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0, transition:{duration:0.3}}}
    >
      <ContentWrap>
        <CalculatorFormWrapper
          openModal={openModal}
          showModal={showModal}
          setShowModal={setShowModal}
          title="Розрахуйте свою денну норму калорій прямо зараз"
        />

        {userIsLoggedIn ? <SummaryForDay/> : false}
      </ContentWrap>
    </motion.div>
  );
}

MainPage.propTypes = {
  showModal: PropTypes.bool,
};
