import { ModelPatients } from "../../models";

export declare namespace PatientTypes {
    export interface State {
        patients: ModelPatients[];
        isSelected: boolean;
        patientSelected: ModelPatients | null;
    }
}
