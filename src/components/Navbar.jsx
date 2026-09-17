import React from 'react'
import logo from "../assets/logo_transparent.png";
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    {/* Admin Dashboard */}

                    <img
                        className="brand-mark"
                        src={logo}
                        alt="logo"
                    />
                    ADMIN <span className="brand-highlight">PANEL</span>
                </a>

                <div className="text-white">
                    <span className="me-3">Welcome, Admin</span>

                    <button className="btn btn-outline-danger" onClick={() => navigate("/login")}>Logout</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;