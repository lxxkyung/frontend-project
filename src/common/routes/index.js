import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// 1. Main
const Main = lazy(() => import('pages/main/Main'));

// 2. 로그인
const Login = lazy(() => import('pages/member/Login'));


const Router = () => {
    return (
        <Routes>
            {/* Main */}
            <Route path="/" element={<Main />} />

            {/* 로그인 */}
            <Route path="/login" element={<Login />} />

        </Routes>
    );
};

export default Router;
