import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import nextCookie from 'next-cookies';
import Router from 'next/router';
import { withAuthSync } from '../utils/Auth/auth';
import getHost from '../utils/Auth/get-host';
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

// Register.getInitialProps = async ctx => {
//     const { token } = nextCookie(ctx);
//     const apiUrl = getHost(ctx.req) + '/api/profile';
//
//     const redirectOnError = () =>
//         typeof window !== 'undefined'
//             ? Router.push('/Login')
//             : ctx.res.writeHead(302, { Location: '/Login' }).end();
//
//     try {
//         const response = await fetch(apiUrl, {
//             credentials: 'include',
//             headers: {
//                 Authorization: JSON.stringify({ token })
//             }
//         });
//
//         if (response.ok) {
//             const js = await response.json();
//             console.log('js', js);
//             return js
//         } else {
//             // https://github.com/developit/unfetch#caveats
//             return await redirectOnError()
//         }
//     } catch (error) {
//         // Implementation or Network error
//         return redirectOnError()
//     }
// };
//
// export default withAuthSync(Main);

export default Register;
