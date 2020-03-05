import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import PatientForm from '../components/main/PatientForm'

const Register = () => {
    const patient = useSelector(state => state.PatientReducer.patient);
    useEffect(() => {
        console.log(patient);
    }, []);

    const onClick = (basicInfo, contact, activity) => {
        console.log(basicInfo, "Basic Info");
        console.log(contact, "Contacts");
        console.log(activity, "Activity");
    };
    return (
        <PatientForm patient={ patient } onClick={ onClick }/>
    );
};

export default Register;
