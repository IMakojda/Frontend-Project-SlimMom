import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Container from '../../components/Container';
import AppBar from '../../components/Header/AppBar';


export default function Layout() {
  return (
    <Container>
      <AppBar />
        <Suspense fallback={null}>
          <Outlet/>
        </Suspense>
    </Container>
  )
};
