import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import LoginComponent from '../LoginComponent/LoginComponent.jsx';

const Nav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav id="nav">
            <div className="nav-header">
                <img src="../../logo50x50.png" alt="logo"></img>
                <span id="navtext">e-КАТАЛОГ</span>
                <button
                    className="mobile-menu-toggle"
                    onClick={toggleMobileMenu}
                >
                    ☰
                </button>
            </div>

            <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                <li>
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                        Головна
                    </Link>
                </li>
                <li>
                    <Link to="/search" onClick={() => setIsMobileMenuOpen(false)}>
                        Пошук по назві
                    </Link>
                </li>
            </ul>

            <div id="login-container">
                <LoginComponent />
            </div>
        </nav>
    );
};

export default Nav;
