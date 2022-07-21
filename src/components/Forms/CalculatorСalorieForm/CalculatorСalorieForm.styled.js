import styled from 'styled-components';
import { layoutStyles } from '../../../stlyles/layoutStyles';

const { mainBackground, activeButton, placeholderColor, formBorderColor } =
  layoutStyles;

const PlaceholderContainer = styled.div`
  position: relative;
  margin-bottom: 35px;

  @media screen and (min-device-width: 768px) {
    margin-right: 30px;

    &:nth-child(4) {
      margin-right: 0px;
    }

    &:nth-child(3) {
      margin-bottom: 0px;
    }
  }
`;

const Header = styled.h1`
  font-style: normal;
  font-weight: 700;
  color: #212121;

  @media screen and (min-device-width: 320px) and (max-device-width: 768px) {
    font-size: 18px;
    line-height: 1.44;
    margin-bottom: 32px;
  }

  @media screen and (min-device-width: 768px) {
    font-size: 34px;
    line-height: 41px;
    margin-bottom: 80px;
  }
`;

const Label = styled.label`
  color: ${placeholderColor};
  font-family: 'Raleway', sans-serif;
  pointer-events: none;
  position: absolute;
  transition: all 200ms;
  top: 0px;
  left: 0px;
  background-color: transparent;
`;

const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid ${formBorderColor};
  padding:0px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: ${placeholderColor};
  padding-bottom:8px;
  width:240px;
  background:transparent;
  }

&:hover,&:focus  {
    color:  ${activeButton};
    border-bottom: 1px solid ${activeButton};
  }



&::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

[type=number] {
  -moz-appearance:textfield;
}

 &:focus + ${Label},&:not(:placeholder-shown) + ${Label} { top: -22px;
    left: -10px;
    font-size: 11px;
    background:transparent;
    color:${activeButton};
    padding:  10px;}

`;

const Form = styled.form`
  margin-bottom: 40px;
  @media screen and (min-device-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 160px;
    margin-bottom: 60px;
  }
`;

const BloodTypeTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: ${placeholderColor};
  padding-bottom: 10px;
  max-width: 240px;

  @media screen and (min-device-width: 768px) {
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
  }
`;

const BloodTypeRadioContainer = styled.div`
  width: 240px;
  min-height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BloodTypeLabel = styled.label`
  position: relative;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: ${placeholderColor};
  margin-left: 20px;
`;

const BloodTypeCheckBox = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 0;
  background: ${mainBackground};
  border: 1px solid ${formBorderColor};
  margin-left: -20px;
`;

const Text = styled.span`
   color: ${placeholderColor};
  margin-left 8px;
`;

const BloodTypeRadioBtn = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  z-index: -1;

  &:hover,&:focus ~ ${BloodTypeCheckBox} {
    cursor:pointer;
    background: fff;}

&: checked ~ ${Text}{color: ${activeButton};}

 &: checked ~ ${BloodTypeCheckBox}  {
    background: fff;
    &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    border-radius: 50%;
    border-color: transparent;
    width: 10px;
    height: 10px;
    background: ${activeButton};
 }
`;

const StileWrapper = styled.div``;
const StileButtonWrapper = styled.div`
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const ErrorWrapper = styled.div`
  position: absolute;
  top: 30px;
  font-size: 11px;
  color: red;
`;

const Btn = styled.button`
  height: 44px;
  width: 182px;
  font-weight: 700;
  font-size: 14px;
  background: #fc842d;
  color: #ffffff;
  border: 2px solid #fc842d;
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
  @media screen and (min-width: 1280px) {
    margin-left: 320px;
    margin-right: 0;
  }

  &:hover,
  &:focus {
    background: #ffffff;
    border: 2px solid #fc842d;
    border-radius: 30px;
    color: #fc842d;
    cursor: pointer;
  }
`;

export {
  Form,
  Header,
  Input,
  BloodTypeRadioBtn,
  BloodTypeCheckBox,
  Label,
  BloodTypeLabel,
  BloodTypeTitle,
  BloodTypeRadioContainer,
  StileWrapper,
  Text,
  PlaceholderContainer,
  ErrorWrapper,
  StileButtonWrapper,
  Btn,
};
