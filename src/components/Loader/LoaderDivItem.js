import { DivComponent, GridDiv, Img } from './loader.styled';
import {
  Watermelon,
  Banana,
  Apple,
  Avocado,
  Kiwi,
  Lemon,
  Lime,
   Grapefruit,
  Orange} from '../../images';

const fruits=[
  {img:Watermelon, delay:'-1.2s', alt:'Watermelon'},
  {img:Banana, delay:'-0.4s',  alt:'Banana'},
  {img:Apple, delay:'-0.8s', alt:'Apple'},
  {img:Avocado, delay:'-0.4s', alt:'Avocado'},
  {img:Kiwi, delay:'-0.8s', alt:'Kiwi'},
  {img:Lemon, delay:'-1.2s',  alt:'Lemon'},
  {img:Lime, delay:'-0.8s', alt:'Lime'},
  {img:Grapefruit, delay:'-1.6s', alt:'Grapefruit'},
  {img: Orange, delay:'-0.8s', alt:'Orange'}
]

export default function FruitItem(){
  return <GridDiv>
    {fruits.map(fruit => {
        return(
          <DivComponent key={fruit.alt} >
          <Img src={fruit.img} delay={fruit.delay} alt={fruit.alt}/>
          </DivComponent>)
      })}
  </GridDiv>

}

