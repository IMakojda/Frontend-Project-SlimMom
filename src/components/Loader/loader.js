import FruitItem from './LoaderDivItem';
import { Overlay } from './loader.styled';

export default function Loader (props){
  return <div className='absolut'>
    <Overlay/>
    <FruitItem/>
  </div>
}
