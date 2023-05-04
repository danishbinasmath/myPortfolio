import React from 'react';
import '../css/styles.css';

function Header() {
    return (
        <header className="header">
            <div className="header__title">My Portfolio</div>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item"><a href="#">Home</a></li>
                    <li className="header__nav-item"><a href="#about">About</a></li>
                    <li className="header__nav-item"><a href="#resume">Resume</a></li>
                    <li className="header__nav-item"><a href="#projects">Projects</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
