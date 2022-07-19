import { useState } from 'react';
import PropTypes from 'prop-types';
import CalculatorFormWrapper from '../../components/Forms/CalculatorFormWrapper';
import { ContentWrap } from 'pages/DiaryPage/DiaryPage.styled';
import SummaryForDay from 'components/SummaryForDay';

export default function MainPage() {
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
    <ContentWrap>
      <CalculatorFormWrapper
        openModal={openModal}
        showModal={showModal}
        setShowModal={setShowModal}
        title="Розрахуйте свою денну норму калорій прямо зараз"
      />
      <SummaryForDay/>
    </ContentWrap>
  );
}

MainPage.propTypes = {
  showModal: PropTypes.bool,
};
