import styled from 'styled-components';
import { layoutStyles } from 'stlyles/layoutStyles';

const Wrapper = styled.div`
  margin-top: 60px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 100px;
  @media screen and (min-device-width: 768px) {
    margin-left: 32px;
    text-align: start;
  }
`;

const InputBlock = styled.div`
  position: relative;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-device-width: 768px) {
    margin-left: 0;
  }
`;

const Error = styled.div`
  width: 240px;
  text-align: start;
  font-size: 12px;
  color: red;
`;

const Cut = styled.div`
  background-color: #FFFFF;
  border-radius: 10px;
  height: 20px;
  left: 20px;
  position: absolute;
  top: -20px;
  transform: translateY(0);
  transition: transform 200ms;
  width: 76px;
`;

const Placeholder = styled.label`
  color: #9b9faa;
  left: 3px;
  line-height: 17px;
  font-family: ${layoutStyles.verdana};
  font-weight: 700;
  font-size: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;
  top: 3px;
`;

const Input = styled.input`
  position: relative;
  width: 280px;
  height: 36px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  background: transparent;
  outline: transparent;
  &:focus,
  &:hover {
    border-bottom: 1px solid #fc842d;
    caret-color: #fc842d;
  }
  &:focus ~ ${Cut}, &:not(:placeholder-shown) ~ ${Cut} {
    transform: translateY(8px);
  }
  &:focus ~ ${Placeholder}, &:not(:placeholder-shown) ~ ${Placeholder} {
    transform: translateY(-25px) translateX(2px) scale(0.75);
  }
  &:not(:placeholder-shown) ~ ${Placeholder} {
    color: #fc842d;
  }
  &:focus ~ ${Placeholder} {
    color: #fc842d;
  }

  @media screen and (min-device-width: 768px) {
    width: 240px;
  }
`;

const FormButtons = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-device-width: 768px) {
    display: block;
    margin-bottom: 400px;
  }
  @media screen and (min-device-width: 1199px) {
    margin-bottom: 180px;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 13px;
  padding-bottom: 13px;
  width: 180px;
  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border: 2px solid #fc842d;
  border-radius: 30px;
  font-family: ${layoutStyles.verdana};
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.04em;
  color: #ffffff;
  &:hover,
  &:focus {
    background: #ffffff;
    color: #fc842d;
    cursor: pointer;
  }
  @media screen and (min-device-width: 768px) {
    margin-right: 32px;
  }
`;

const PasswordEye = styled.div`
  position: absolute;
  top: 9px;
  right: 1%;

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

export {
  Wrapper,
  Form,
  Input,
  InputBlock,
  Error,
  Cut,
  FormButtons,
  Button,
  PasswordEye,
  Placeholder,
};
