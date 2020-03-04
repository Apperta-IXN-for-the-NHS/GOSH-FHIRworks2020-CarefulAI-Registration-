import React, { useState } from 'react'
import doLogin  from '../utils/Auth/login';
import LoginForm from '../components/login/LoginForm';
import {useDispatch} from "react-redux";

export default function Login () {
    const [userData, setUserData] = useState({ username: '', error: '' , password: '', token: ''});
    const dispatch = useDispatch();

    async function handleSubmit(e) {
        e.preventDefault();
        const res = await doLogin(userData);
        if (res.status === 'success') {
            const payload = { username: userData.username, password: userData.password, token: res.token };
            dispatch({ type: 'LOGIN', payload: payload });
        }
        else {
            setUserData({ username: '', error: res, password: '', token: ''});
        }
    }


    return (
        <div className='login'>
            <LoginForm
                onClick={ e =>  handleSubmit(e) }
                username={ userData.username }
                changeUsername={ e => { const newUsername = e.target.value;  setUserData({ username: newUsername, error: userData.error, password: userData.password}) } }
                changePassword={ e => { const newPassword = e.target.value;  setUserData({ username: userData.username, error: userData.error, password: newPassword}) } }
            />
        </div>
    )
}
