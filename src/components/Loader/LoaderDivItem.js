import { DivComponent, Img } from './loader.styled';


export default function itemLoader(top,lef,animationDelay,img){
  return <DivComponent top={top} lef={lef} animationDelay={animationDelay} >
    <Img src={img}/>
  </DivComponent>
}
