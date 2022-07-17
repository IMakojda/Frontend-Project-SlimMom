// import { Routes, Route } from 'react-router-dom';
// import { lazy} from 'react';
//import { useDispatch, useSelector } from 'react-redux';
// import ProtectedRoute from '../Header/ProtectedRoute';
// import PublicRoute from '../Header/PublicRoute';
import AnimatedRoutes from 'components/AnimatedRoutes';
//import authSelectors from '../../redux/auth/selectors';
//import authOperations from '../../redux/auth/authOperations';
// const Layout = lazy(() => import('../../pages/Layout/Layout'));
// const MainPage = lazy(() => import('../../pages/MainPage/MainPage'));
// const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
// const RegistrationPage = lazy(() =>
//   import('../../pages/RegistrationPage/RegistrationPage')
// );
// const DiaryPage = lazy(() => import('../../pages/DiaryPage/DiaryPage'));
// const CalculatorPage = lazy(() =>
//   import('../../pages/CalculatorPage/CalculatorPage')
// );
// const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));



export default function App() {
  // const dispatch = useDispatch();
  // const isCurrentUserRefresh = useSelector(authSelectors.getIsRefresh);
  // useEffect(() => {
  //   dispatch(authOperations.refreshUser());
  // }, [dispatch]);

  return (
    <>
    <AnimatedRoutes />
    </>
  );
}
