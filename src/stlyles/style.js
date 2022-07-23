import { createGlobalStyle } from 'styled-components';
import Verdana from '../fonts/Verdana/Verdana.ttf';
import VerdanaBold from '../fonts/Verdana/Verdana-Bold.ttf';
import GothamPro from '../fonts/Gotham/gothampro.ttf';
import GothamProBold from '../fonts/Gotham/gothampro_bold.ttf';
import { layoutStyles } from './layoutStyles';

const GlobalStyle = createGlobalStyle`
     @font-face {
      font-family: 'gothampro';
      src: local('gothampro'),  url(${GothamPro}) format('truetype');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'gothamproBold';
      src: local('gothamproBold'),url(${GothamProBold}) format('truetype');
      font-weight: 700;
      font-style: normal;
    }

    @font-face {
      font-family: 'Verdana';
      src: local('Verdana'), url(${Verdana}) format('truetype');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'VerdanaBold';
      src: local('VerdanaBold')url(${VerdanaBold}) format('truetype');
      font-weight: 700;
      font-style: normal;
    }

     html {
       scroll-behavior: smooth;
       overflow-x: hidden;
       width: 100%;
       height: 100%;
     }

     #root{
       height: 100%;
     }

     *,
     *::before,
     *::after {
       box-sizing: border-box;
     }

    body {
      height: 100%;
      overflow-x: hidden;
      margin: 0;
      font-family: Verdana, Roboto;
      font-weight: bold;
      color: #212121;
      background-color: ${layoutStyles.mainBackground};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    img {
      display: block;
      max-width: 100%;
      height: auto;
    }

    ul {
      padding: 0;
      margin: 0;
      list-style: none;
    }


    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {-webkit-appearance: none;
    margin:0;}

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      margin: 0;
      padding: 0;
    }

    a {
      text-decoration: none;
    }

    button {
      cursor: pointer;
    }

`;

export default GlobalStyle;
