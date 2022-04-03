import React from 'react';
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <header className="header">
            <div className='header-img'/>
            <div className="header-content">
                <h2>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h2>
                <div>
                    <Link to="/oddaj-rzeczy/">Oddaj<br/>rzeczy</Link>
                    <Link to="/oddaj-rzeczy/">Zorganizuj<br/>zbiórkę</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;