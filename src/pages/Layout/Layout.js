import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Container from '../../components/Container';
import AppBar from '../../components/Header/AppBar';
import ImageContainer from "./Layout.styled";


export default function Layout() {
  return (<ImageContainer>
      <AppBar />
        <Container>
          <Suspense fallback={null}>
            <Outlet/>
          </Suspense>
        </Container>
  </ImageContainer>


  )
};
