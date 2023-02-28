import { ModelPatients } from "../../models";
import { ActionTypes } from "../types/ReduxTypes";

export const getPatients = (patients: ModelPatients[]) => {
    return async (dispatch: any) => {
        dispatch({ type: ActionTypes.GET_PATIENTS, payload: patients });
    }
}

export const setPatient = (patient: ModelPatients) => {
    return async (dispatch: any) => {
        dispatch({ type: ActionTypes.SET_PATIENT, payload: patient });
    }
}