import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function ForgetPassword() {

    const [value, setValue] = useState("");
    const [err, setErr] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            let response = await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/forgot-password`,
                { email: value });
            if (response) {
                alert('Click the link sent to your mail to reset password');
                navigate('/');
            }
        } catch (error) {
            console.log(`Error while sending email address: ${error}`);
            setErr(error.response.data.message);
        }
    }
    return (
        <div className='p-2 text-info-emphasis text-center d-flex flex-column gap-2 justify-content-center align-items-center bg-info-subtle border border-info-subtle' style={{ "height": "100dvh" }}>
            <h3 className='mb-5'>ForgotPassword</h3>
            <input id='forgot-email' placeholder='Enter email' onChange={(e) => { setValue(e.target.value) }} />
            {//Clearing Error after 5 second
                err ? (setTimeout(() => {
                    setErr('');
                }, 5000), <p className='text-danger'>{err}</p>) : <span className='text-sm p-1'> Click the link send to the email, to reset</span>}
            <div>
                <button className='btn btn-secondary' onClick={handleSubmit}>Send</button>
                <Link to={"/signin"} className='btn btn-outline-secondary m-2'>Back</Link>
            </div>
        </div>
    )
}
