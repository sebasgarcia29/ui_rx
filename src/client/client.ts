import axios from "axios";
import { ModelPatients } from "../models";

export const getPatiens = async () => {
    const url = 'https://localhost:7007/api/patients/'
    const response = await axios.get<ModelPatients[]>(url);
    return response.data;
}