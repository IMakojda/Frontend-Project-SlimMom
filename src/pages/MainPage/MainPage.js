import { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import CalculatorFormWrapper from '../../components/Forms/CalculatorFormWrapper';
import { ContentWrap } from 'pages/DiaryPage/DiaryPage.styled';
import SummaryForDay from 'components/SummaryForDay';
import authSelector from 'redux/auth/selectors';


export default function MainPage() {
  const token = useSelector(authSelector.getToken);
  console.log(token);
  
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
    <ContentWrap>
      <CalculatorFormWrapper
        openModal={openModal}
        showModal={showModal}
        setShowModal={setShowModal}
        title="Розрахуйте свою денну норму калорій прямо зараз"
      />

      {token ? <SummaryForDay/> : false}
    </ContentWrap>
  );
}

MainPage.propTypes = {
  showModal: PropTypes.bool,
};
