import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProtectedRoute from '../Header/ProtectedRoute';
import PublicRoute from '../Header/PublicRoute';
import authSelector from '../../redux/auth/selectors';
import authOperations from '../../redux/auth/authOperations';
import { AnimatePresence } from 'framer-motion';

const Layout = lazy(() => import('../../pages/Layout/Layout'));
const MainPage = lazy(() => import('../../pages/MainPage/MainPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
);
const DiaryPage = lazy(() => import('../../pages/DiaryPage/DiaryPage'));
//const CalculatorPage = lazy(() =>
//  import('../../pages/CalculatorPage/CalculatorPage')
//);
const AvatarUpload = lazy(() => import('../Header/Avatar'));
const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));

export default function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const isRefreshUser = useSelector(authSelector.getIsRefresh);

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return (
    !isRefreshUser && (
      <>
        <Suspense fallback="">
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route
                exact
                path="/"
                element={
                  <PublicRoute>
                    <Layout />
                  </PublicRoute>
                }
              >
                <Route
                  index
                  element={
                    <PublicRoute>
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
                    <PublicRoute redirectTo="/dairy" restricted>
                      <LoginPage />
                    </PublicRoute>
                  }
                />

                <Route
                  path="/calculator"
                  element={
                    <ProtectedRoute>
                      <MainPage />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/diary"
                  element={
                    <ProtectedRoute>
                      <DiaryPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/avatar"
                  element={
                    <ProtectedRoute restricted>
                      <AvatarUpload />
                    </ProtectedRoute>
                  }
                />

                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </AnimatePresence>
        </Suspense>
      </>
    )
  );
}
