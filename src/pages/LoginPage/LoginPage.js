
import Container from "../../components/Container";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";

import {motion} from 'framer-motion';

export default function LoginPage() {


  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth,  transition:{duration: 0.1}}}
    >
    <>
      <Container>
        <LoginForm />
      </Container>
    </>
    </motion.div>
  );
  }







