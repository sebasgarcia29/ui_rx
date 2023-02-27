import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { AuthRoutes } from '../pages/no-secure/auth/routes/AuthRoutes';
import { HomeRoutes } from '../pages/secure/home/routes/HomeRoutes';
import { useSelector, useDispatch } from 'react-redux';
import { RootReducerTypes } from '../redux/RootReducer';
import { CheckingAuth } from '../components';
import { FirebaseAuth } from '../client/firebaseConfig';
import { logout, login } from '../redux/actions/actionsAuth';


export const AppRouter = () => {

    const { status } = useSelector((state: RootReducerTypes) => state.authReducer);
    const dispatch = useDispatch();

    useEffect(() => {

        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return dispatch(logout());
            const { email, uid, displayName, photoURL } = user;
            dispatch(login({
                email: email || '',
                uid: uid || '',
                displayName: displayName || '',
                photoUrl: photoURL || '',
            }));

        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    if (status === 'checking') {
        return <CheckingAuth />
    }

    return (
        <Routes>
            {(status === 'authenticated')
                ? <Route path="/*" element={<HomeRoutes />} />
                : <Route path="/auth/*" element={<AuthRoutes />} />}
            <Route path='/*' element={<Navigate to='/auth/login' />} />
        </Routes >


    )
}