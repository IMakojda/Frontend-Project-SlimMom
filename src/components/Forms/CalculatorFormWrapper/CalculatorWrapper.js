import CalculatorŠ”alorieForm from '../CalculatorŠ”alorieForm';
import { CalculatorWrapperStyle } from './CalculatorWrapper.styled';

export default function CalculatorWrapper(props) {
  return (
    <CalculatorWrapperStyle>
      <CalculatorŠ”alorieForm {...props} />
    </CalculatorWrapperStyle>
  );
}
