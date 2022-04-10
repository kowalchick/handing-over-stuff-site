import React from 'react';
import {NavLink} from "react-router-dom";
import {Link as Scroll} from "react-scroll";
import ScrollLink from "./ScrollLink";
import {useSelector} from "react-redux";
import {logout} from "../redux/actions/authAction";


const NavMenu = () => {
    const isHome = window.location.pathname === "/";
    const isOffHome = window.location.pathname === "/login/" || window.location.pathname === "/register/";
    const { user: currentUser } = useSelector((state) => state.auth);

    return (
        <div className='nav-menu'>
            <div className="container">
                <div className="nav-top">
                    <div className="nav-user">
                        {
                            currentUser ?
                        <>
                            <h3 className="nav-user-email">Hi {currentUser.email}</h3>
                            {
                                isHome ? <NavLink to='/hand-over/'
                                                  className="nav-user-item decoration">Hand over stuff
                                    </NavLink> : <Scroll
                                                    className="nav-user-item decoration"
                                                    to={"survey-form"}
                                                    spy={true}
                                                    smooth={true}
                                                    duration={500}>{"Form"}
                                                  </Scroll>
                            }
                            <NavLink to="/"
                                     activeClassName=""
                                     className="nav-user-item">Home
                            </NavLink>
                            <button className="nav-user-logout" onClick={logout}>Logout</button>
                        </>
                        : <>
                            <NavLink to="/"
                                    className="nav-user-item"
                                    activeClassName="">Home</NavLink>
                            <NavLink to='/login/'
                                     className="nav-user-item"
                                     activeClassName="decoration">Sign in</NavLink>
                            <NavLink to='/register/'
                                     className={`nav-user-item ${!isOffHome && "decoration"}`}
                                     activeClassName="decoration">Sign up</NavLink>
                        </>
                        }
                    </div>

                    <nav className="nav">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <NavLink className="nav-link"  to="/">Start</NavLink>
                            </li>
                            {
                                isHome && <ScrollLink to='three-columns' text={"What is all about?"}/>
                            }
                            {
                                isHome && <ScrollLink to='about' text={"About us"}/>
                            }
                            {
                                isHome && <ScrollLink to='foundations' text={"Foundations and organizations"}/>
                            }
                            {
                                !isHome && <ScrollLink to='survey-form' text={"Fill the form"}/>
                            }
                            <ScrollLink to='footer' text={"Contact us"}/>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default NavMenu;