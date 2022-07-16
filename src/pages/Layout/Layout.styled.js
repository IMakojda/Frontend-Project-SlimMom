import {
    BananaDesktop,
    BananaTablet,
    LeafDesk,
    // LeafFooterTablet,
    // LeafPageRegister,
    // LeafSideBar,
    LeafTablet,
    StrawberryDesk,
    StrawberryTablet,
    VectorTablet,
    VectorDesk
  }
   from '../../images';

    import styled from 'styled-components';
  const ImageContainer = styled.div`
  position: absolute;

  width: 100%;
//   height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
//   margin-right: auto;
//   margin-left: auto;

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }


  @media screen and (min-width: 768px) {

    background-image: url(${BananaTablet}),
      url(${LeafTablet}), url(${StrawberryTablet}),
      url(${VectorTablet});
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-size: auto, auto, auto, auto;
    background-position: top 598px right -16px,top 494px right 162px,top 536px right 35px,top 458px right 0px

//       @media screen and (min-device-pixel-ratio: 2),
//   screen and (min-resolution: 192dpi),
//   screen and (min-resolution: 2dppx){

//   }
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${LeafDesk}), url(${BananaDesktop}),
      url(${StrawberryDesk}), url(${VectorDesk});
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-size: auto, auto, auto, auto;
    background-position: top right 200px,top -5px right 1px, top 470px right,top 35px right;}};

    transition-timing-function:cubic-bezier(0.1, 0.16, 0.35, 0.94);
    transition-duration: 1500ms;


  `;


  export default ImageContainer;
