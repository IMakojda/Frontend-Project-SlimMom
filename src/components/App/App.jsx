import { Routes ,Route } from "react-router-dom";
import Layout from '../../pages/Layout/Layout';
import MainPage from '../../pages/MainPage/MainPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import DiaryPage from '../../pages/DiaryPage/DiaryPage';
import CalculatorPage from '../../pages/CalculatorPage/CalculatorPage';
import NotFound from '../../pages/NotFound/NotFound';

export default function App(){
  return (<>

            <Routes>

              <Route exact path='/' element={<Layout />} >

                <Route index element={<MainPage />}/>

                <Route path='/signup' element={<RegistrationPage/>}/>

                <Route path='/login' element={<LoginPage/>}/>

                <Route path='/calculator' element={<CalculatorPage/>}/>

                <Route path='/dairy' element={<DiaryPage/>}/>

                <Route path='*' element={<NotFound />} />

              </Route>

            </Routes>
    </>
  );
};
