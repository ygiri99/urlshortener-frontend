import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();
        let payload = { firstName, lastName, userId: email, password };
        try {
            const response = await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/register`, payload);
            if (response) {
                alert(`Activate the link sent to your Email`);
                navigate("/");
            }
        } catch (error) {
            let mail = /email/.test(error.response.data);
            if (mail) {
                alert('Email already exists');
            }
            else
                alert(`Error while singUp ${error.response.data}`);
        }
    }

    return (
        <div className='container-fluid bg-info-subtle text-center'>
            <div className='row vh-100 align-items-center'>
                <form>
                    <h3 className='text-primary mb-3 header'>Registration Form</h3>
                    <div className="row g-3 align-items-center justify-content-center mb-2">
                        <div className="col-sm-2">
                            <label htmlFor="inputFirstName" className="col-form-label">FirstName</label>
                        </div>
                        <div className="col-sm-4">
                            <input type="text" id="inputFirstName" name='inputFirstName'
                                className="form-control" aria-describedby="nameInline"
                                onChange={(e) => setFirstName(e.target.value)}
                                required />
                        </div>
                    </div>
                    <div className="row g-3 align-items-center justify-content-center mb-2">
                        <div className="col-sm-2">
                            <label htmlFor="inputLastName" className="col-form-label">LastName</label>
                        </div>
                        <div className="col-sm-4">
                            <input type="text" id="inputLastName" name='inputLastName'
                                className="form-control" aria-describedby="nameInline"
                                onChange={(e) => setLastName(e.target.value)}
                                required />
                        </div>
                    </div>
                    <div className="row g-3 align-items-center justify-content-center mb-2">
                        <div className="col-sm-2">
                            <label htmlFor="inputEmail" className="col-form-label">Email</label>
                        </div>
                        <div className="col-sm-4">
                            <input type="email" id="inputEmail" className="form-control"
                                aria-describedby="emailInline"
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </div>
                    </div>
                    <div className="row g-3 align-items-center justify-content-center mb-2">
                        <div className="col-sm-2">
                            <label htmlFor="inputPassword" className="col-form-label">Password</label>
                        </div>
                        <div className="col-sm-4">
                            <input type="password" id="inputPassword" className="form-control"
                                aria-describedby="passwordInline"
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                        </div>
                    </div>
                    <div className='row g-3 align-items-center justify-content-center mb-2'>
                        <div className='col-auto'>
                            <button type='submit' className='btn btn-outline-success' onClick={(e) => submit(e)}>Submit</button>
                            <Link to={"/"} className='text-decoration-none m-4 p-2 border rounded bg-warning'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
