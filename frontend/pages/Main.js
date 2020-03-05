import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import Router from 'next/router';
import axios from "axios";
import { Snackbar } from "@material-ui/core";
import WelcomeForm from '../components/main/WelcomeForm'
import Alert from '../components/main/Alert';

const Main = () => {
    const [patientData, setPatientData]  = useState(null);
    const [patients, setPatients] = useState([]);
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();

    async function fetchPatient() {
        const url = 'https://localhost:5001/api/Patient';
        axios.get(url).then(res => {
            setPatientData(res.data);
        });
    }

    const generateList = () => {
        if (patientData) {
            const patientList = [];
            let i = 0;
            while (i < patientData.length) {
                let j = 0;
                let entry = patientData[i].entry;
                while (j < entry.length) {
                    patientList.push(entry[j].resource);
                    j++;
                }
                i++;
            }
            setPatients(patientList);
        }
    };

    const welcomeFormOnClick = info => {
        let name = info.name;
        let birthDate = info.date;

        console.log(info, 'Info');

        let result = patients.filter(value =>  value.name[0].given[0] === name && value.birthDate === birthDate);

        if (result.length === 1) {
            dispatch({ type: 'PATIENT_FOUND', payload: result[0] });
            Router.push('/Register');
        }
        else {
            setOpen(true);
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    useEffect(() => {
        fetchPatient();

    }, []);

    useEffect(() => {
        generateList();
    }, [patientData]);


    return (
        <div>
            <WelcomeForm onClick={ welcomeFormOnClick } />
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={ handleClose } severity="error">
                    Couldn't find patient record, please check details and try again
                </Alert>
            </Snackbar>
        </div>
    )
};

export default Main;
