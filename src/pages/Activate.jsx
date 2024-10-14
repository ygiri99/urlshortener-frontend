import axios from 'axios';
import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function Activate() {

    let [activateQuery, setActivateQuery] = useSearchParams();
    const navigate = useNavigate();

    const activate = async () => {
        try {
            const id = activateQuery.get('id');
            const token = activateQuery.get("token");
            const response = await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/activate`, { id, token });
            if (response)
                navigate("/signin");
        } catch (error) {
            console.log(`Error while activating user: `, error);
        }
    }

    return (
        <div className="container-fluid text-end">
            <div className="row bg-warning-subtle vw-100 vh-100 justify-content-center align-items-center">
                <div className="col-auto">
                    <h3>To Access Account Click 👇</h3>
                    <button className='btn btn-outline-success' onClick={activate}>Activate</button>
                </div>
            </div>
        </div>
    )
}
