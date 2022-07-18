import RegisterForm from 'components/Forms/RegisterForm/RegisterForm';
import { motion } from 'framer-motion';
import { RegisterWrapper } from './RegistrationPage.styled';

export default function RegistrationPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <RegisterWrapper>реєстрація</RegisterWrapper>
      <RegisterForm />
    </motion.div>
  );
}
