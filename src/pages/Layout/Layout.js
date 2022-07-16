import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Container from '../../components/Container';
import AppBar from '../../components/Header/AppBar';
import Loader from '../../components/Loader/loader';
import { useSelector } from 'react-redux';
import { selectorShowLoader } from '../../redux/loaderReducer/loaderSlice';


export default function Layout() {
  const loadingShow=useSelector(selectorShowLoader)

  return (<>
      <AppBar />
      {loadingShow?loadingShow&&<Loader/>:<Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
      }
  </>


  )
};
