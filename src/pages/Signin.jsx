import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    const navigate = useNavigate();

    //API for signin
    const signInFun = async () => {
        setErr('');
        try {
            const response = await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/signin`,
                { email, password }
                , { origin: 'https://urlshortener-backend-tdjq.onrender.com', credentials: true }
            );
            if (response) {
                alert(response.data.message);
                //setting AuthToken in local storage
                localStorage.setItem('Token', response.data.accessToken);
                navigate(`/`);
            }
        } catch (error) {
            !error.response.data ? console.log(`Error while singIn ${error}`) : setErr(error.response.data.message);
        }
    }
    return (
        <div className='container bg-success-subtle text-center'>
            <div className='row align-items-center vh-100 justify-content-center'>
                <div className='row'>
                    <h3>Login</h3>
                </div>
                <div className="row">
                    <div className='row g-3'>
                        <div className="col-auto col-3">
                            <label htmlFor="signinEmail" className="col-form-label">Email</label>
                        </div>
                        <div className="col-auto col-md-6">
                            <input type="email" id="signinEmail" className="form-control" aria-describedby="emailInline" onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                    </div>
                    <div className='row g-3 align-items-center'>
                        <div className="col-auto col-3">
                            <label htmlFor="signinPassword" className="col-form-label">Password</label>
                        </div>
                        <div className="col-auto col-md-6">
                            <input type="password" id="signinPassword" className="form-control" aria-describedby="passwordHelpInline" onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                    </div>
                    {err ? (setTimeout(() => {
                        setErr('');
                    }, 3000), <p className='text-danger'>{err}</p>) : null}
                    <span>
                        <button className='btn btn-outline-primary m-2' onClick={signInFun}>Sign In</button>
                        <Link to={"/"} className='btn btn-outline-secondary' >Back</Link>
                    </span>
                </div>
                <div className='m-2'>
                    <Link to={"/forgot"} className='text-decoration-none' ><span className='fs-5 fw-1'>ForgotPassword ?</span></Link>
                </div>
            </div>
        </div>
    )
}
