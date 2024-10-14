import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { RiAccountCircleLine } from 'react-icons/ri';

export default function Header() {

    //Check Login or not using token
    let authToken = localStorage.getItem('Token');

    const navigate = useNavigate();

    return (
        <div className="text-center">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <h3 className="navbar-brand header text-primary btn" onClick={() => navigate("/")}>URL SHORTENER</h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="me-auto"></div>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" id='header-search' type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        {!authToken ? <Link to={"/register"}><h3><RiAccountCircleLine /></h3></Link> :
                            <div className="dropdown">
                                <div data-bs-toggle="dropdown" aria-expanded="false">
                                    <h3><RiAccountCircleLine /></h3></div>
                                <ul className="dropdown-menu">
                                    <li className='dropdown-item'><Link to={"/signout"} className='text-decoration-none'>Signout</Link></li>
                                </ul>
                            </div>}
                        {//Display according authToken
                            authToken == null ? <Link to={"/signin"} className='nav-link'>Login</Link> :
                                <Link to={"/signout"} className='nav-link'>Logout</Link>}
                    </div>
                </div>
            </nav>
        </div>

    )
}
