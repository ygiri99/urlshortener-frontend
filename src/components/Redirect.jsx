import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function Redirect() {

    const { shorturl } = useParams();

    //Redirecting shortern Url to Original url
    const redirect = () => {
        const url = `${import.meta.env.VITE_REACT_APP_SERVER_URL}/shorturls/${shorturl}`;
        window.location.assign(url);
    }

    useEffect(() => {
        if (shorturl)
            redirect();
    }, [shorturl])


    return (
        <div>Redirecting...</div>
    )
}
