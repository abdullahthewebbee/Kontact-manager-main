import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <div className="ui menu">
                <h2 className="header item">
                    Kontact Manager
                </h2>
                <Link to="/" className="item">
                    <h4>Home</h4>
                </Link>
                <Link to="/add" className="item">
                <h4> Add Contact</h4>
                </Link>
                </div>
        </div>
    )
}
