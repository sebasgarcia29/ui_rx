import { ActionTypes, Action } from '../types/ReduxTypes'
import type { PatientTypes } from '../types/PatientTypes'

export const initialState: PatientTypes.State = {
    patients: [],
    isSelected: false,
    patientSelected: null
}

export const PatientReducer = (state: PatientTypes.State = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.GET_PATIENTS: return { ...state, patients: action.payload };
        case ActionTypes.SET_PATIENT: return { ...state, patientSelected: action.payload, isSelected: true };
        default: return state
    }
}
