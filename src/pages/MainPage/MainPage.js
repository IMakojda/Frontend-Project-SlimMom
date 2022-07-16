import { useState } from 'react';
import Container from '../../components/Container';
import CalculatorFormWrapper from '../../components/Forms/CalculatorFormWrapper';
import { Modal } from '../../components/Modal';
import { ModalContent } from '../../components/Modal/ModalContent';

export default function MainPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <CalculatorFormWrapper />
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ModalContent setShowModal={setShowModal} />
      </Modal>
    </Container>
  );
}
