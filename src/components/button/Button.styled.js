import styled from 'styled-components';
import { layoutStyles } from '../../stlyles/layoutStyles';

const Btn = styled.button`
  cursor: ${({ cursor }) => cursor || 'pointer'};
  display: ${props => props.display || 'flex'};
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.borderRadius || '50%'};
  border: none;
  box-shadow:  ${props => props.background || `0px 4px 10px ${layoutStyles.activeButton}`};
  background-color: ${props => props.background || layoutStyles.activeButton};
  min-width: ${props => props.width || '48px'};
  max-height: 48px;
  min-height: ${props => props.height || '48px'};
  margin: ${props => props.margin || 'auto'};
  padding: 0;
  :hover{
    background-color: ${props => props.backgroundHover || 'none'};
    color: ${props => props.fill || 'none'};
  }
`;
const Button = props => {
  return <Btn {...props} />;
};

export default Button;
