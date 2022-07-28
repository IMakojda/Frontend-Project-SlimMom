import { useNavigate } from 'react-router-dom';
import { Content, CloseModalButton, Btn, StileButtonWrapper } from '../Modal.styled';
// import {
//   Btn,
//   StileButtonWrapper,
// } from '../../Forms/CalculatorСalorieForm/CalculatorСalorieForm.styled';
import CalculatorСalorieFormModalContent from '../../Forms/CalculatorСalorieForm/CalculatorСalorieFormModalContent';


export const ModalContent = ({ setShowModal }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Content>
        <CalculatorСalorieFormModalContent />
        <StileButtonWrapper>
          <Btn centered={'true'} onClick={() => navigate('/signup')}>
            Почніть худнути
          </Btn>
        </StileButtonWrapper>
      </Content>
      <CloseModalButton
        aria-label="Close modal"
        onClick={() => {
          setShowModal(prev => !prev);
        }}
      />
    </div>
  );
};


