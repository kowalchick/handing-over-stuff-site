import React from 'react';
import {Link} from "react-router-dom";

const Header =()=> {
    return (
        <header className="header">
            <div className='header-img'/>
            <div className="header-content">
                <h2 className='header-title fancy'>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h2>
                <div className='header-box'>
                    <Link to="/oddaj-rzeczy/" className="header-btn btn">Oddaj<br/>rzeczy</Link>
                    <Link to="/oddaj-rzeczy/"className="header-btn btn">Zorganizuj<br/>zbiórkę</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;