import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signout() {

    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const signOutFun = async () => {
            try {
                //Removing authToken to signOut
                localStorage.removeItem('Token');
                const response = await axios.get(`${import.meta.env.REACT_APP_SERVER_URL}/signout`);
                setMessage(response.data.message);
                navigate('/');

            } catch (error) {
                console.log(`Error while signOut: ${error}`);
            }
        }
        signOutFun();
    })
    return (
        <>
            <h3 className='text-success'>{message}</h3>
        </>
    )
}
