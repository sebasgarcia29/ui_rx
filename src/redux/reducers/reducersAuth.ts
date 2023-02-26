import { ActionTypes, Action } from '../types/ReduxTypes'
import type { AuthTypes } from '../types/AuthTypes'

export const initialState: AuthTypes.State = {
    status: 'not-authenticated',
    displayName: null,
    email: null,
    errorMessage: null,
    photoUrl: null,
    uid: null,
}

export const AuthReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.SET_TEST: return { ...state };
        case ActionTypes.CHECKING_AUTHENTICATION: return { ...state, status: 'checking' };
        case ActionTypes.LOGOUT:
            const { errorMessage } = action.payload;
            return {
                ...state,
                status: 'not-authenticated',
                errorMessage,
            };
        case ActionTypes.LOGIN_WITH_GOOGLE:
            return {
                ...state,
                status: 'authenticated',
                displayName: action.payload.displayName,
                email: action.payload.email,
                photoUrl: action.payload.photoUrl,
                uid: action.payload.uid,
            };
        case ActionTypes.LOGIN_WITH_EMAIL_AND_PASSWORD:
            const { displayName, email, photoURL, uid } = action.payload;
            return {
                ...state,
                status: 'authenticated',
                displayName: action.payload.displayName,
                email: action.payload.email,
                photoUrl: action.payload.photoURL,
                uid: action.payload.uid,
            };
        default: return state
    }
}
