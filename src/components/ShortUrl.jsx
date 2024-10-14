import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function ShortUrl() {

    const [urlData, setUrlData] = useState([]);
    const navigate = useNavigate();


    async function getUrls() {//longUrl to generate shortUrl
        try {
            //Using token Authenticating user
            let authToken = localStorage.getItem('Token');

            if (authToken) {
                const response = await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/shorturls`, { authToken }, { origin: 'http://localhost:8000' });
                setUrlData(response.data);
            }
            else {
                alert('signIn first');
            }
        } catch (error) {
            console.log(`Error while loading users: ${error}`);
        }
    }

    useEffect(() => {
        getUrls();
    }, [])

    return (
        <>
            <div className='table-responsive'>
                <table className="table table-success table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Short Url</th>
                            <th scope="col">Clicks</th>
                            <th scope="col">Original Url</th>
                        </tr>
                    </thead>
                    <tbody>
                        {urlData.map((data, i) => (
                            <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td><Link to={`/shorturls/${data.shortUrl}`} >{data.shortUrl}</Link></td>
                                < td > {data.clicked}</td>
                                <td className='text-break'>{data.longUrl}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table >
            </div >
            <button className='btn btn-info' onClick={() => navigate('/')}>Back</button>
        </>
    )
}
