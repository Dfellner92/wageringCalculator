import React from 'react';
import './styles.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="title">Wagering Calculator</div>
            <div className="links">
                <a className="link" href="/">Exacta</a>
                <a className="link" href="/trifecta">Trifecta</a>
                <a href="/superfecta">Superfecta</a>
            </div>
        </nav>
    )
}

export default Navbar;