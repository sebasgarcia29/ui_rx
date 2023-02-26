export type Action = {
    type: string
    payload: any
}

export enum ActionTypes {
    SET_TEST = 'SET_TEST',
    RESET_STORE = 'RESET_STORE',
    CHECKING_AUTHENTICATION = 'CHECKING_AUTHENTICATION',
    LOGIN_WITH_GOOGLE = 'LOGIN_WITH_GOOGLE',
    LOGOUT = 'LOGOUT',
}
