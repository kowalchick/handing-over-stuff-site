import React from 'react';
import {Link} from 'react-scroll';

function ScrollLink({to,text}) {
    return (
        <li>
            <Link to={to} spy={true} smooth={true} duration={500}>
                {text}
            </Link>
        </li>
    );
}

export default ScrollLink;