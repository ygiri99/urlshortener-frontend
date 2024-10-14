import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ShortUrlGenerator() {
    const [input, setInput] = useState('');
    const [display, setDisplay] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleShortUrl = async () => {
        try {
            // For Authentication
            let authToken = localStorage.getItem('Token');
            //If Input is Empty
            if (input === '') {
                alert('Should enter URL');
                return;
            }
            //API to shortern URL
            const response = await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/generate`,
                { authToken, longUrl: input });
            //Displaying response for 3 second and navigate to shortUrl table
            if (response) {
                setDisplay(true);
                setMessage(response.data);
                setTimeout(() => {
                    setDisplay(false);
                    navigate("/shorturls");
                }, 3000)
            }
            //Clearing Input
            setInput('');
        } catch (error) {
            console.log(`Error while generating shortUrl: ${error}`);

        }
    }
    return (
        <div className='container text-center'>
            <div className="row w-100 h-100 bg-info-emphasis g-3 align-items-center justify-content-center">
                {display ? <div className="fs-2 text-success">{message}</div> : null}
                <div className="col-auto col-md-4">
                    <input type='text' id='longUrl' placeholder='Enter URL to Shortern' value={input} className='form-control border border-info'
                        onChange={(e) => { setInput(e.target.value) }} />
                </div>
            </div>
            <div>
                <button className='btn btn-warning w-auto my-3' onClick={handleShortUrl}>Generate</button>
            </div>
            <div>
                <button className='btn btn-info px-4' onClick={() => navigate('/')}>Back</button>
            </div>
            <div className="row m-2">
                <div className="col">
                </div>
                <div className="col">
                </div>
            </div>
        </div>
    )
}
