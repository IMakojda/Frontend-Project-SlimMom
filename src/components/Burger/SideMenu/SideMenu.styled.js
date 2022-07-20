import styled, { css } from "styled-components";

export const Menu = styled.nav`
position: absolute;
top: 80px;
right: 0px;
bottom: 0px;
z-index: 293;
display: block;
width: 1280px;
max-width: 100%;
height: 100%;
margin-top: 0px;
padding-right: 0px;
align-items: stretch;
background-color: #264061;
transform: translateX(-100%);
transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
@media screen and (min-width: 1280px){
    display: none;
}

${(props) =>
  props.open &&
  css`
    transform: translateX(0);
    `}
`;
