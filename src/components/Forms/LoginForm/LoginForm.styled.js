import styled from 'styled-components';
import { Form } from "formik";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 0;

  @media screen and (min-width: 768px) {
    display: block;
    padding: 16px;
    margin: 0;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  color: #FC842D;
  margin-top: 40px;
  margin-bottom: 60px;

  @media screen and (min-width: 768px) {
    text-align: left;
    margin-top: 160px;
  }
`;

export const FormLogin = styled(Form)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: block;
    width: 400px;
  }
`;

export const WrapperInputs = styled.div`
  width: 280px;
  margin-bottom: 60px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const WrapperInputEmail = styled.div`
  margin-bottom: 40px;
  position: relative;
`;

export const WrapperInputPassword = styled.div`
  margin-bottom: 0;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #9B9FAA;
  padding-top: 5px;
  padding-bottom: 5px;
  border: none;
  border-bottom: 1px solid #ececec;
  background: transparent;
  display: block;
  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 240px;
  }
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #9B9FAA;
  position: absolute;
  transition: 0.2s ease all;
  top: -10px;
  background-color: transparent;

  ${Input}:focus ~ & {
    top: -18px;
    font-size: 12px;
    color: #9B9FAA;
  }
`;

export const Error = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 6px;
`;

export const WrapperButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
  }
`;

export const Button = styled.button`
  height: 44px;
  width: 182px;
  font-weight: 700;
  font-size: 14px;
  background: #FC842D;
  color: #FFFFFF;
  border: 2px solid #FC842D;
  border-radius: 30px;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  padding-top: 13px;
  padding-bottom: 13px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    margin-right: 32px;
    margin-top: 0;
  }

  &:hover,
  &:focus{
    background: #FFFFFF;
    border: 2px solid #FC842D;
    border-radius: 30px;
    color: #FC842D;
    cursor: pointer;
}
`;

export const WrapperImage = styled.div`
  position: absolute;
  top: 5%;
  right: 1%;

  @media screen and (min-width: 768px) {
    top: 9%;
    right: 15%;
  }
`;

export const Image = styled.img`
  width: 20px;
`;
