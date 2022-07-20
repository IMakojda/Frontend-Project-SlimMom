import Container from "../../components/Container";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import { motion } from 'framer-motion';

export default function LoginPage() {
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0, transition:{duration:0.3}}}
    >
      <Container>
        <LoginForm />
      </Container>
    </motion.div>
  );
  }







