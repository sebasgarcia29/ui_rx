import {
    signInWithGoogle,
    registerUserWithEmailAndPassword,
    // loginWithEmailAndPassword,
} from '../../client/provider'
import { InterfaceInitialData } from '../../pages/no-secure/auth/pages'
import { IForm } from '../../models/Modeluser'
import { ActionTypes } from '../types/ReduxTypes'
import { loginWithServiceAPI } from '../../client/client'

export const AuthActions = () => {
    return async (dispatch: any) => {
        dispatch({
            type: ActionTypes.SET_TEST,
            payload: {
                isLogged: true
            }
        })

    }
}

export const checkingCredentials = () => {
    return async (dispatch: any) => {
        dispatch({
            type: ActionTypes.SET_TEST,
            payload: {
                isLogged: false
            }
        })

    }
}
export const logout = () => {
    return async (dispatch: any) => {
        dispatch({
            type: ActionTypes.LOGOUT,
            payload: {
                isLogged: false
            }
        })

    }
}

export const checkingAuthentication = () => {
    return async (dispatch: any) => {
        dispatch({ type: ActionTypes.CHECKING_AUTHENTICATION, })
    }
}

export const startGoogleSingIn = () => {
    return async (dispatch: any) => {
        dispatch({ type: ActionTypes.CHECKING_AUTHENTICATION, })
        const response = await signInWithGoogle();
        if (response.ok) {
            const { displayName, email, photoURL, uid } = response;
            dispatch({
                type: ActionTypes.LOGIN_WITH_GOOGLE,
                payload: {
                    displayName, email, photoURL, uid
                }
            })
        } else {
            const { errorMessage } = response;
            dispatch({
                type: ActionTypes.LOGOUT,
                payload: {
                    errorMessage
                }
            })
        }
    }
}

export const startCreatingUserWithEmailAndPassword = ({ name, email, password }: InterfaceInitialData) => {
    return async (dispatch: any) => {
        dispatch({ type: ActionTypes.CHECKING_AUTHENTICATION, })
        const response = await registerUserWithEmailAndPassword({ name, email, password });
        if (!response.ok) {
            return dispatch({
                type: ActionTypes.LOGOUT,
                payload: {
                    errorMessage: response.errorMessage
                }
            });
        }
        if (response.ok) {
            dispatch({
                type: ActionTypes.CREATE_USER_WITH_EMAIL_AND_PASSWORD,
                payload: {
                    uid: response.uid,
                    displayName: response.displayName,
                    email: response.email,
                    photoUrl: response.photoUrl,
                }
            })
        } else {
            const { errorMessage } = response;
            dispatch({
                type: ActionTypes.LOGOUT,
                payload: {
                    errorMessage
                }
            })
        }
    }
}

export const startLoginWithEmailAndPassword = ({ email, password }: IForm) => {
    return async (dispatch: any) => {
        dispatch({ type: ActionTypes.CHECKING_AUTHENTICATION, })
        // const response = await loginWithEmailAndPassword({ email, password });
        const response = await loginWithServiceAPI({ email, password });
        if (!response.ok) {
            return dispatch({
                type: ActionTypes.LOGOUT,
                payload: {
                    errorMessage: response.errorMessage
                }
            });
        }
        if (response.ok) {
            dispatch({
                type: ActionTypes.LOGIN_WITH_EMAIL_AND_PASSWORD,
                payload: {
                    uid: response.uid,
                    displayName: response.displayName,
                    email: response.email,
                    photoUrl: response.photoUrl,
                }
            })
        } else {
            const { errorMessage } = response;
            dispatch({
                type: ActionTypes.LOGOUT,
                payload: {
                    errorMessage
                }
            })
        }
    }
}

interface InterfaceLogin {
    uid: string;
    displayName: string;
    email: string;
    photoUrl: string;
}

export const login = ({ displayName = '', email = '', photoUrl = '', uid = '' }: InterfaceLogin) => {

    return async (dispatch: any) => {
        dispatch({
            type: ActionTypes.LOGIN,
            payload: {
                uid,
                displayName,
                email,
                photoUrl
            }
        })
    }

}