import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Background, ModalWrapper } from './Modal.styled';
import { Button, Arrow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ setShowModal, showModal, children }) => {
  const closeModal = e => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  const closeOnEscapeKey = useCallback(
    e => {
      if (e.code === 'Escape') {
        setShowModal();
      }
    },
    [setShowModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', closeOnEscapeKey);

    return () => window.removeEventListener('keydown', closeOnEscapeKey);
  }, [closeOnEscapeKey]);

  return createPortal(
    <>
      <Background onClick={closeModal}>
        <ModalWrapper showModal={showModal}>
          {children}</ModalWrapper>
        <Button type="button" onClick={closeModal}>
          <Arrow color="black" size="20px" onClick={closeModal} left="20px"/>
        </Button>
      </Background>
    </>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};

