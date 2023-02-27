import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile
} from "firebase/auth";
import { FirebaseAuth } from "./firebaseConfig";
import { InterfaceInitialData } from "../pages/no-secure/auth/pages";
import { IForm } from "../models/Modeluser";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
        }

    } catch (error: any) {
        console.error('error in GoogleAuthProvider>>>', error);
        return {
            ok: false,
            errorMessage: error?.message || ''
        }
    }
}


export const registerUserWithEmailAndPassword = async ({ email, name, password }: InterfaceInitialData) => {
    try {
        const response = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        console.log({ response });
        await updateProfile(FirebaseAuth.currentUser!, { displayName: name });
        return {
            ok: true,
            uid: response.user.uid,
            displayName: response.user.displayName || name,
            email: response.user.email,
            photoUrl: response.user.photoURL,
        }
    } catch (error: any) {
        console.error('error in registerUserWithEmailAndPassword>>>', error);
        return {
            ok: false,
            errorMessage: error?.message || ''
        }
    }
}

export const loginWithEmailAndPassword = async ({ email, password }: IForm) => {
    try {
        const response = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        return {
            ok: true,
            uid: response.user.uid,
            displayName: response.user.displayName || '',
            email: response.user.email,
            photoUrl: response.user.photoURL,
        }
    } catch (error: any) {
        console.error('error in loginWithEmailAndPassword>>>', error);
        return {
            ok: false,
            errorMessage: error?.message || ''
        }
    }
}

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
}