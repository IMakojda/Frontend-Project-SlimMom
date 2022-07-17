// import React, { useEffect, useCallback } from 'react';
// import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';
// import { Background, ModalWrapper } from './Modal.styled';
//
// const modalRoot = document.querySelector('#modal-root');
//
// export const Modal = ({ setShowModal, showModal, children }) => {
//   const closeModal = e => {
//     if (e.target === e.currentTurget) {
//       setShowModal();
//     }
//   };
//
//   const closeOnEscapeKey = useCallback(
//     e => {
//       if (e.code === 'Escape') {
//         setShowModal();
//       }
//     },
//     [setShowModal]
//   );
//
//   useEffect(() => {
//     window.addEventListener('keydown', closeOnEscapeKey);
//
//     return () => window.removeEventListener('keydown', closeOnEscapeKey);
//   }, [closeOnEscapeKey]);
// return
//   return createPortal(
//     <>
//         <Background onClick={closeModal}>
//           <ModalWrapper showModal={showModal}>{children}</ModalWrapper>
//         </Background>
//
//     </>,
//     modalRoot
//   );
// };
//
// Modal.propTypes = {
//   children: PropTypes.node,
//   onClose: PropTypes.func,
// };
