import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
// import Button from '../../button/Button.styled';
// import SummaryForDay from '../../SummaryForDay/SummaryForDay';
// import Title from '../../DailyCalorieIntake/Title.styled';
import { Content, CloseModalButton } from '../Modal.styled';
import {
  Btn,
  StileButtonWrapper,
} from '../../Forms/CalculatorСalorieForm/CalculatorСalorieForm.styled';

import CalculatorСalorieFormModalContent from '../../Forms/CalculatorСalorieForm/CalculatorСalorieFormModalContent';

export const ModalContent = ({ onClose, setShowModal }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Content>
        {/* <h2>Ваша рекомендована добова норма споживання калорій становить</h2> */}
        {/* <SummaryForDay /> */}
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

ModalContent.propTypes = {
  onClose: PropTypes.func,
};
