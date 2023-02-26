import { signInWithGoogle } from '../../client/provider'
import { ActionTypes } from '../types/ReduxTypes'

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
            type: ActionTypes.SET_TEST,
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