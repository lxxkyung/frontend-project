import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Main
const Main = lazy(() => import('pages/main/Main'));


const Router = () => {
    return (
        <Routes>
            {/* Main */}
            <Route path="/" element={<Main />} />

        </Routes>
    );
};

export default Router;
