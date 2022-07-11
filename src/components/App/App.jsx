import Container from '../Container';
import AppBar from 'components/Header/AppBar';
import { NavState } from 'components/Burger/NavState/NavState';
import MainMenu from 'components/Burger/MainMenu';

export default function App(){
  return (
    <div>
            <NavState>
        <MainMenu />
      </NavState>
      <AppBar />
      <Container>
        <h1>Project SlimMom</h1>
      </Container>
    </div>
  );
};
