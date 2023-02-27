import { ModelPatients } from "../../models";

export declare namespace PatientTypes {
    export interface State {
        patient: ModelPatients[];
        isSelected: boolean;
        patientSelected: ModelPatients | null;
    }
}
