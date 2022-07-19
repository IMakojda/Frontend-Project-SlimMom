import { useState } from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/Container';
import CalculatorFormWrapper from '../../components/Forms/CalculatorFormWrapper';

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
    <Container>
      <CalculatorFormWrapper
        openModal={openModal}
        showModal={showModal}
        setShowModal={setShowModal}
        title="Розрахуйте свою денну норму калорій прямо зараз"
      />
    </Container>
  );
}

MainPage.propTypes = {
  showModal: PropTypes.bool,
};
