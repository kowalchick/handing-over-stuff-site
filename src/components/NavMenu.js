import React from 'react';
import {NavLink} from "react-router-dom";
import {Link as Scroll} from "react-scroll";
import ScrollLink from "./ScrollLink";


const NavMenu = () => {
    const isHome = window.location.pathname === "/";
    const isOffHome = window.location.pathname === "/login/" || window.location.pathname === "/register/";

    return (
        <div className='nav-menu'>
            <div className="container">
                <div className="nav-top">
                    <div className="nav-user">
                        <>
                            <NavLink to='/hand-over/'>Hand over stuff</NavLink>
                            <Scroll to={"survey-form"} spy={true} smooth={true} duration={500} >
                                {"Form"}
                            </Scroll>
                            <NavLink to="/">Home</NavLink>
                            <button>Logout</button>
                        </>
                        <>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to='/login/'>Sign in</NavLink>
                            <NavLink to='/register/'>Sign up</NavLink>
                        </>
                    </div>

                    <nav className="nav">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Start</NavLink>
                            </li>
                            <ScrollLink to='three-columns' text={"What is all about?"}/>
                            <ScrollLink to='about' text={"About us"}/>
                            <ScrollLink to='foundations' text={"Foundations and organizations"}/>
                            <ScrollLink to='survey-form' text={"Fill the form"}/>
                            <ScrollLink to='footer' text={"Contact us"}/>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default NavMenu;