import styled from 'styled-components';
import { layoutStyles } from '../../../stlyles/layoutStyles';
import { Form } from "formik";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 0;

  @media screen and (min-width: ${layoutStyles.tablet}) {
    display: block;
    padding: 16px;
    margin: 0;
  }
`;

export const Title = styled.h1`
  font-family: ${layoutStyles.gothamPro};
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  color: ${layoutStyles.activeButton};
  margin-top: 40px;
  margin-bottom: 60px;

  @media screen and (min-width: ${layoutStyles.tablet}) {
    text-align: left;
    margin-top: 160px;
  }
`;

export const FormLogin = styled(Form)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${layoutStyles.tablet}) {
    display: block;
    width: 400px;
  }
`;

export const WrapperInputs = styled.div`
  width: 280px;
  margin-bottom: 60px;

  @media screen and (min-width: ${layoutStyles.tablet}) {
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

export const Label = styled.label`
  font-family: ${layoutStyles.verdana};
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: ${layoutStyles.placeholderColor};
  position: absolute;
  transition: 0.2s ease all;
  top: -4px;
  background-color: transparent;
`;

export const Input = styled.input`
  width: 280px;
  height: 36px;
  color: ${layoutStyles.closeButtonColor};
  padding-top: 5px;
  padding-bottom: 5px;
  border: none;
  border-bottom: 1px solid ${layoutStyles.formBorderColor};
  background: transparent;
  display: block;

  &:focus {
    outline: none;
    border-bottom: 1px solid ${layoutStyles.activeButton};
  }

  &:focus + ${Label},
  &:not(:placeholder-shown) + ${Label}{
    top: -25px;
    transform: scale(0.9);
    font-size: 12px;
    color: ${layoutStyles.activeButton};
  }

  @media screen and (min-width: ${layoutStyles.tablet}) {
    width: 240px;
  }
`;

export const Error = styled.div`
  color: red;
  font-size: 12px;
`;

export const WrapperButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: ${layoutStyles.tablet}) {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
  }
`;

export const Button = styled.button`
  font-family: ${layoutStyles.verdana};
  height: 44px;
  width: 182px;
  font-weight: 700;
  font-size: 14px;
  background: ${layoutStyles.activeButton};
  color: ${layoutStyles.mainBackground};
  border: 2px solid ${layoutStyles.activeButton};
  border-radius: 30px;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  padding-top: 13px;
  padding-bottom: 13px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${layoutStyles.tablet}) {
    margin-right: 32px;
    margin-top: 0;
  }

  &:hover,
  &:focus{
    background: ${layoutStyles.mainBackground};
    border: 2px solid ${layoutStyles.activeButton};
    border-radius: 30px;
    color: ${layoutStyles.activeButton};
    cursor: pointer;
}
`;

export const WrapperImage = styled.div`
  position: absolute;
  top: 9px;
  right: 1%;
  &:hover,
  &:focus {
    cursor: pointer;
  }
  @media screen and (min-width: ${layoutStyles.tablet}) {
    right: 15%;
  }
`;

export const Image = styled.img`
  width: 20px;
`;
