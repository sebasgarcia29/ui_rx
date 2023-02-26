import { Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../pages/no-secure/auth/routes/AUthRoutes';
import { HomeRoutes } from '../pages/secure/home/routes/HomeRoutes';


export const AppRouter = () => {
    return (
        <Routes>

            {/* Login y Registro */}
            <Route path="/auth/*" element={<AuthRoutes />} />

            {/* JournalApp */}
            <Route path="/*" element={<HomeRoutes />} />

        </Routes>
    )
}