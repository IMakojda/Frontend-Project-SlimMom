import FruitItem from './LoaderDivItem';
import { Overlay } from './loader.styled';
import { useSelector} from 'react-redux';
import { selectorShowLoader } from '../../redux/loaderReducer/loaderSlice';

export default function Loader (){
  const loadingShow=useSelector(selectorShowLoader)
  return (loadingShow &&
    <div className='absolut'>
      <Overlay/>
        <FruitItem/>
    </div>
  )
}
