import axios from "axios";
import { ModelPatients } from "../models";

export const getPatiens = async (uid: string = '') => {
    const url = 'https://localhost:7007/api/patients'
    const response = await axios<ModelPatients[]>({
        method: 'get',
        url,
        headers: {
            Authorization: `Bearer ${uid}`
        }
    });
    return response.data;
}

interface DataLogin {
    email: string;
    password: string;
}

export const loginWithServiceAPI = async ({ email, password }: DataLogin) => {
    const url = 'https://localhost:7007/login'
    try {
        const response = await axios({
            method: 'post',
            url,
            data: { email, password }
        });
        return {
            ok: true,
            uid: response.data,
            displayName: 'Test',
            email: email,
            photoUrl: 'Test',
        }
    } catch (error) {
        console.error(JSON.stringify(error));
        return {
            ok: false,
            errorMessage: 'Invalid user',
        }
    }

}