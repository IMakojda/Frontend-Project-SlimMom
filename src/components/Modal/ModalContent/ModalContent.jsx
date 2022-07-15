import { useNavigate } from 'react-router-dom';
import Button from '../../button/Button.styled';
import DailyCalorieIntake from '../../DailyCalorieIntake/DailyCalorieIntake';
import { Content, CloseModalButton } from '../Modal.styled';

export const ModalContent = ({ setShowModal }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Content>
        <DailyCalorieIntake />
        <Button centered={'true'} onClick={() => navigate('/signup')}></Button>
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