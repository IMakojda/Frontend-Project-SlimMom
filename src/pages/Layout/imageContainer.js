import { useResizeDetector } from 'react-resize-detector';
import { ImageContainer } from './imageContainer.styled';
import authSelector from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import {
  BananaDesktop,
  BananaTablet,
  LeafDesk,
  LeafFooterTablet,
  LeafSideBar,
  LeafTablet,
  StrawberryDesk,
  StrawberryTablet,
  VectorTablet,
  VectorDesk
}
  from '../../images';

import {
  StrawberryImg,
  BananaImg,
  LeavesImg,
  VectorImg,
LeafSide,
LeafFooter} from './imageContainer.styled';

export default function ImageContainerWrapper({children}){
const isLogin=useSelector(authSelector.getIsLoggedIn);
const { width,ref } = useResizeDetector();
const desktop=width>=1280;

const banana=desktop?BananaDesktop:BananaTablet;
const strawberry=desktop?StrawberryDesk:StrawberryTablet;
const leafs=desktop?LeafDesk:LeafTablet;
const vector=desktop?VectorDesk:VectorTablet;

return ( <ImageContainer ref={ref} show={isLogin}>
    <VectorImg
      src={vector}
      alt='vector'
      showImg={!isLogin}
    />

  <StrawberryImg
    src={strawberry}
    alt='strawberry'
    showImg={!isLogin}
    />

    <LeavesImg
      src={leafs}
      alt='leafs'
      showImg={!isLogin}
    />

    <BananaImg
      src={banana}
      alt='banana'
      showImg={!isLogin}
    />

    <LeafSide
      src={LeafSideBar}
      alt='green leafs'
      showImg={isLogin}
    />

    <LeafFooter
      src={LeafFooterTablet}
      alt='green leafs'
      showImg={isLogin}
    />

    {children}

  </ImageContainer>
)
}
