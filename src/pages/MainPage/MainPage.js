import { useState } from 'react';
import Container from '../../components/Container';
import CalculatorFormWrapper from '../../components/Forms/CalculatorFormWrapper';
import { Modal } from '../../components/Modal';
import { ModalContent } from '../../components/Modal/ModalContent';

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
      <CalculatorFormWrapper openModal={openModal} />
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ModalContent setShowModal={setShowModal} />
      </Modal>
    </Container>
  );
}