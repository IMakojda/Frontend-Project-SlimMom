import styled from 'styled-components';
import { layoutStyles } from '../../stlyles/layoutStyles';

export const BoxA = styled.div`
  @media only screen and (min-width: ${layoutStyles.tablet}) {
    display: flex;
    justify-content: space-around;
    align-items: stretch;
  } ;
`;

export const ButtonForm = styled.button`
  font-family: ${layoutStyles.gothamPro};
  font-size: 14px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0.04em;
  color: ${layoutStyles.placeholderColor};
  border: 1px solid ${layoutStyles.activeButton};
  background-color: transparent;
  padding: 7px;
  border-radius: 5px;
  width: 100px;
  cursor: pointer;
  &:hover {
    color: ${layoutStyles.activeButton};
  }
`;

export const Input = styled.input`
  font-family: ${layoutStyles.gothamPro};
  font-size: 14px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0.04em;
  color: ${layoutStyles.placeholderColor};
  border: 1px solid ${layoutStyles.activeButton};
  background-color: transparent;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    color: ${layoutStyles.activeButton};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
