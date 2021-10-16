import React from 'react';
import { Link } from 'react-router-dom';
import carLogo from '../../../images/654.jpg' 
const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="d-flex">
                        <img src={carLogo} style={{ height: '50px', width: '100px' }} alt="" />
                        <h1 className="navbar-brand">MAMA <br />JABEN?</h1>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">

                            <Link to="/home" className="nav-link">Home</Link>
                            <Link to="/home" className="nav-link">About us</Link>
                            <Link to="/home" className="nav-link">Vehicles</Link>
                            {
                                <Link to="/bookingsList" className="nav-link">User Dashboard</Link>
                            }
                            {
                                 <Link to="/admin/orderList" className="nav-link">Admin</Link>
                            }
                            <Link to="/home" className="nav-link">Contact</Link>
                            {
                                 <button className="btn btn-warning me-2" >Log In</button> 
                            }
                            { <button className="btn btn-success"></button>}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;