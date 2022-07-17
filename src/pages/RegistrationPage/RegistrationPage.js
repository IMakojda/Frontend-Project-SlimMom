import RegisterForm from 'components/Forms/RegisterForm';
import styled from 'styled-components';

import {motion} from 'framer-motion';

const RegisterWrapper = styled.h1`
  margin-top: 40px;
  font-family: 'Verdana';
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #fc842d;
  @media screen and (min-device-width: 768px) {
    margin-top: 160px;
    margin-left: 32px;
    text-align: start;
  }
`;

export default function RegistrationPage() {
  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth,  transition:{duration: 0.1}}}
    >
      <RegisterWrapper>реєстрація</RegisterWrapper>
      <RegisterForm />
    </motion.div>
  );
}
