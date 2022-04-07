import React from 'react';
import {Link} from 'react-scroll';

function ScrollLink({to,text}) {
    return (
        <li className="nav-item">
            <Link to={to} spy={true} smooth={true} duration={500} className="nav-link">
                {text}
            </Link>
        </li>
    );
}

export default ScrollLink;