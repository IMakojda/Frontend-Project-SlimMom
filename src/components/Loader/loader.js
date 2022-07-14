import { DivComponent, GridDiv, Img } from './loader.styled';
// import itemLoader from './LoaderDivItem';

import {
  Watermelon,
  Banana,
  Apple,
  Avocado,
  Kiwi,
  Lemon,
  Lime,
  // Mandarin,
  Grapefruit,
  Orange} from '../../images';

export default function Loader (){
  return <GridDiv>
  <DivComponent>
    <Img src={Watermelon} delay='-1.2s' top='25px' left='20px' alt='hello' />
  </DivComponent>
    <DivComponent>
      <Img src={Banana} delay='-0.4s' top='25px' left='20px' alt='hello' />
    </DivComponent>
    <DivComponent>
      <Img src={Apple} delay='-0.8s' top='25px' left='20px' alt='hello' />
    </DivComponent>
    <DivComponent>
      <Img src={Avocado} delay='-0.4s' top='25px' left='20px' alt='hello' />
    </DivComponent>
    <DivComponent>
      <Img src={Kiwi} delay='-0.8s' top='25px' left='20px' alt='hello' />
    </DivComponent>
    <DivComponent>
      <Img src={Lemon} delay='-1.2s' top='25px' left='20px' alt='hello' />
    </DivComponent>
    <DivComponent>
      <Img src={Lime} delay='-0.8s' top='25px' left='20px' alt='hello' />
    </DivComponent>
    {/*<div>*/}
    {/*  <Img src={Mandarin} delay='-1.2s' top='25px' left='20px' alt='hello' />*/}
    {/*</div>*/}
    <DivComponent>
      <Img src={Grapefruit} delay='-1.6s' top='25px' left='20px' alt='hello' />
    </DivComponent>
    <DivComponent>
      <Img src={Orange} delay='-0.8s' top='25px' left='20px' alt='hello' />
    </DivComponent>


  </GridDiv>


}
