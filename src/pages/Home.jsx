// import { useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, Outlet } from 'react-router-dom';

export default function Home() {

    return (
        <>
            <Header />
            <div className="bg-info-subtle border border-info-subtle text-info-emphasis text-center
             d-flex  flex-column justify-content-center align-items-center" style={{ 'minHeight': '80vh' }}>
                {//Handling login or logout to display user using token
                    localStorage.getItem('Token') !== null ? <Outlet /> : <>
                        <h2 className='text-danger opacity-75 header'>WELCOME</h2>
                        <p><Link to={"/signin"} className='text-decoration-none'>Login</Link> to your account</p>
                        <p>New User ? <Link to={"/register"} className='text-decoration-none'>SignUp</Link></p>
                    </>}
            </div>

            <Footer />
        </>
    )
}
