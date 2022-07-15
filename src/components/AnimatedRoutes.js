import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainPage from 'pages/MainPage/MainPage';
import CalculatorPage from 'pages/CalculatorPage/CalculatorPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import DiaryPage from 'pages/DiaryPage/DiaryPage';
import RegistrationPage from 'pages/RegistrationPage';

import { PageTransition } from '@steveeeie/react-page-transition';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <PageTransition
        preset="moveToLeftFromRight"
        transitionKey={location.pathname}
        >
            <Routes location={location} key={location.pathname}>
            <Route path='/main' element={<MainPage />} />
            <Route path='/calculator' element={<CalculatorPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/diary' element={<DiaryPage />} />
            <Route path='/registration' element={<RegistrationPage />} />
            </Routes>
        </PageTransition>

    );
}

export default AnimatedRoutes;
