import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="mainclass">
                <nav className="navbar">
                    
                    <ul className="nav-list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/feedback">Feedbacks</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <div className="rightNav">
                        <input type="text" name="search" placeholder="Search" />
                        <button className="btn-search" type="submit">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </nav>
                <h1 className="subclass">Welcome to Info Private Limited</h1>
                <hr />
            </div>
        </header>
    );
}

export default Header;
