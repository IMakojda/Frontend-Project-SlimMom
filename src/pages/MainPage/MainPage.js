import { useState } from 'react';
import Container from '../../components/Container';
import CalculatorFormWrapper from '../../components/Forms/CalculatorFormWrapper';
import { Modal } from '../../components/Modal';
import { ModalContent } from '../../components/Modal/ModalContent';

import {motion} from 'framer-motion';

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
    <motion.div
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth,  transition:{duration: 0.1}}}
    >
    <Container>
      <CalculatorFormWrapper openModal={openModal} />
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ModalContent setShowModal={setShowModal} />
      </Modal>
      </Container>
    </motion.div>
  );
}
