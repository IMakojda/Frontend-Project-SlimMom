import CalculatorСalorieForm from '../CalculatorСalorieForm';
import { CalculatorWrapperStyle } from './CalculatorWrapper.styled';

export default function CalculatorWrapper(props) {
  return (
    <CalculatorWrapperStyle>
      <CalculatorСalorieForm {...props} />
    </CalculatorWrapperStyle>
  );
}
