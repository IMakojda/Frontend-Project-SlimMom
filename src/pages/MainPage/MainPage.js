// import { useState } from 'react';
import PropTypes from 'prop-types';
// import Container from '../../components/Container';
import CalculatorFormWrapper from '../../components/Forms/CalculatorFormWrapper';
// import { Modal } from '../../components/Modal';
// import { ModalContent } from '../../components/Modal/ModalContent';
import { motion } from 'framer-motion';

export default function MainPage() {

  // const [showModal, setShowModal] = useState(false);
  // const openModal = () => {
  //   setShowModal(prev => !prev);
  // };
  // if (showModal) {
  //   document.body.style.overflow = 'hidden';
  // } else {
  //   document.body.style.overflow = 'unset';
  // }

  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0, transition:{duration:0.3}}}
    >
      <CalculatorFormWrapper />
      {/*// <Container>*/}
      {/*//*/}
      {/*//   /!*<Modal showModal={showModal} setShowModal={setShowModal}>*!/*/}
      {/*//   /!*  <ModalContent setShowModal={setShowModal} />*!/*/}
      {/*//   /!*</Modal>*!/*/}
      {/*// </Container>*/}
    </motion.div>
  );
}


MainPage.propTypes = {
  showModal: PropTypes.bool,
  toggleModal: PropTypes.func,
};
