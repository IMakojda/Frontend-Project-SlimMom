import { motion } from 'framer-motion';
import Container from '../../components/Container';
import CalculatorFormWrapper from '../../components/Forms/CalculatorFormWrapper';

export default function DiaryPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <h1>Calc</h1>
      {/* <Container>
        <CalculatorFormWrapper title="Розрахуйте свою денну норму калорій прямо зараз" />
      </Container> */}
    </motion.div>
  );
}
