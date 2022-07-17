import React, { Suspense,lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
// import MainPage from 'pages/MainPage/MainPage';
// import CalculatorPage from 'pages/CalculatorPage/CalculatorPage';
// import LoginPage from 'pages/LoginPage/LoginPage';
// import DiaryPage from 'pages/DiaryPage/DiaryPage';
// import RegistrationPage from 'pages/RegistrationPage';

import {AnimatePresence} from 'framer-motion';

import ProtectedRoute from '../Header/ProtectedRoute';
import PublicRoute from '../Header/PublicRoute';
const Layout = lazy(() => import('../../pages/Layout/Layout'));
const MainPage = lazy(() => import('../../pages/MainPage/MainPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
);
const DiaryPage = lazy(() => import('../../pages/DiaryPage/DiaryPage'));
const CalculatorPage = lazy(() =>
  import('../../pages/CalculatorPage/CalculatorPage')
);
const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
                    <Suspense fallback="">
      <Routes location={location} key={location.pathname}>
        <Route
          exact
          path="/"
          element={
            <PublicRoute restricted>
              <Layout />
            </PublicRoute>
          }
        >
          <Route
            index
            element={
              <PublicRoute restricted>
                <MainPage />
              </PublicRoute>
            }
          />

          <Route
            path="/signup"
            element={
              <PublicRoute restricted>
                <RegistrationPage />
              </PublicRoute>
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />

          <Route
            path="/calculator"
            element={
              <PublicRoute restricted>
                <CalculatorPage />
              </PublicRoute>
            }
          />

          <Route
            path="/dairy"
            element={
              <ProtectedRoute>
                <DiaryPage />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      </Suspense>
        </AnimatePresence>

















            // <Routes location={location} key={location.pathname}>
            // <Route path='/main' element={<MainPage />} />
            // <Route path='/calculator' element={<CalculatorPage />} />
            // <Route path='/login' element={<LoginPage />} />
            // <Route path='/diary' element={<DiaryPage />} />
            // <Route path='/registration' element={<RegistrationPage />} />
            // </Routes>
        

    );
}

export default AnimatedRoutes;
