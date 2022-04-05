import React from 'react';
import {Link} from "react-router-dom";

const Header =()=> {
    return (
        <header className="header">
            <div className='header-img'/>
            <div className="header-content">
                <h2 className='header-title fancy'>Start to help!<br/>Hand over unwanted stuff to someone else!</h2>
                <div className='header-box'>
                    <Link to="/oddaj-rzeczy/" className="header-btn btn">Hand over<br/>stuff</Link>
                    <Link to="/oddaj-rzeczy/"className="header-btn btn">Raise<br/>funds</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;