import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Container from '../../components/Container';
import AppBar from '../../components/Header/AppBar';
import ImageContainer from "./Layout.styled";
import Loader from '../../components/Loader/loader';
import {  useSelector } from 'react-redux';
import authSelector from '../../redux/auth/selectors';

export default function Layout() {
  const  loaderShow=useSelector(authSelector.loaderShow)

  return (<ImageContainer>
      <AppBar />
    {loaderShow ?(<Loader/>):
        (<Container>
          <Suspense fallback={null}>
            <Outlet/>
          </Suspense>
        </Container>)}
  </ImageContainer>
)
};
