const INITIAL_STATE = {
    patient: {}
};
export default function PatientReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'PATIENT_FOUND':
            return { ...state, patient: action.payload };
        default:
            return { ...state };
    }
}
