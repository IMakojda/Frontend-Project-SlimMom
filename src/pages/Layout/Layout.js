import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Container from '../../components/Container';
import AppBar from '../../components/Header/AppBar';
import Loader from '../../components/Loader/loader';
import {  useSelector } from 'react-redux';
import authSelector from '../../redux/auth/selectors';
import { motion } from 'framer-motion';
import ImageContainerWrapper from './imageContainer';

export default function Layout() {
  const  loaderShow=useSelector(authSelector.loaderShow)

  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0, transition:{duration:0.3}}}
      >
      <ImageContainerWrapper>
        <AppBar />
        {loaderShow ?(<Loader/>):
          (<Container>
            <Suspense fallback={null}>
              <Outlet/>
            </Suspense>
          </Container>)}
      </ImageContainerWrapper>
    </motion.div>

)
};
