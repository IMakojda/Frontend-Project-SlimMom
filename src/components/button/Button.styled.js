import styled from 'styled-components';
import { layoutStyles } from '../../stlyles/layoutStyles';

const Btn = styled.button`
  cursor: ${({ cursor }) => cursor || 'pointer'};
  display: ${props => props.display || 'flex'};
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.borderRadius || '50%'};
  border: none;
  background-color: ${props => props.background || layoutStyles.activeButton};
  min-width: ${props => props.width || '48px'};
  min-height: ${props => props.height || '48px'};
  margin: ${props => props.margin || 'auto'};
  padding: 0;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  color: ${props => props.color || '#fff'};
`;
const Button = props => {
  console.log(props);
  return <Btn {...props} />;
};

export default Button;
