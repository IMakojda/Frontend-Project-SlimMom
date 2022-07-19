import FruitItem from './LoaderDivItem';
import { Overlay } from './loader.styled';

export default function Loader(props) {
  return (
    <Overlay {...props}>
      <FruitItem />
    </Overlay>
  );
}
