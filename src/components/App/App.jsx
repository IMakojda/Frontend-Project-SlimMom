import { PageTransition } from '@steveeeie/react-page-transition';

import { Routes, Route} from 'react-router-dom';
import { lazy, Suspense } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import ProtectedRoute from '../Header/ProtectedRoute';
import PublicRoute from '../Header/PublicRoute';
//import authSelectors from '../../redux/auth/selectors';
//import authOperations from '../../redux/auth/authOperations';
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



export default function App() {
  // const dispatch = useDispatch();
  // const isCurrentUserRefresh = useSelector(authSelectors.getIsRefresh);
  // useEffect(() => {
  //   dispatch(authOperations.refreshUser());
  // }, [dispatch]);

  return (
    
    <>
      <Suspense fallback="">
        
        <PageTransition>

                <Routes>
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
        </PageTransition>

      </Suspense>
    </>
  );
}
