export declare namespace AuthTypes {
    export interface State {
        status: 'checking' | 'authenticated' | 'not-authenticated',
        uid: null,
        email: null,
        displayName: null
        photoUrl: null,
        errorMessage: null,
    }
}
