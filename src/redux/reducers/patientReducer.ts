import { ActionTypes, Action } from '../types/ReduxTypes'
import type { PatientTypes } from '../types/PatientTypes'

export const initialState: PatientTypes.State = {
    patient: [],
    isSelected: false,
    patientSelected: null
}

export const PatientReducer = (state: PatientTypes.State = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.SET_TEST: return { ...state };
        default: return state
    }
}
