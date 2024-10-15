import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Donutchart from './Donutchart';


export default function User() {

    const [user, setUser] = useState({});
    axios.defaults.withCredentials = true;

    async function getUsers() {//longUrl and userId to generate shortUrl
        try {
            //Using token getting the user detail to display
            let authToken = localStorage.getItem('Token');

            if (authToken) {
                const response = await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_URL}`, { authToken }, { origin: 'http://localhost:8000' });
                setUser(response.data);

            }
            else {
                alert('signIn first');
            }
        } catch (error) {
            console.log(`Error while loading users: ${error}`);
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col col-md-8">
                    <div className='bg-warning-subtle boarder rounded p-3'>
                        <h2 className='text-dark header'>Today generated ShortUrls: {user.todayCount}</h2>
                        <h2 className='text-danger header'>This Month generated ShortUrls: {user.monthlyCount}</h2>
                    </div>
                    <div className='md-w-50'><Donutchart data={{ today: user.todayCount, month: user.monthlyCont }} /></div>
                    <div className='d-flex justify-content-around py-5'>
                        <div><Link to={"/generateshorturl"} className='text-decoration-none btn btn-outline-success my-1' >GenerateShortUrl</Link></div>
                        <div><Link to={"/shorturls"} className='text-decoration-none btn btn-outline-primary my-1'>Short URLs</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
