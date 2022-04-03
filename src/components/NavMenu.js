import React from 'react';
import {NavLink} from "react-router-dom";
import {Link as Scroll} from "react-scroll";
import ScrollLink from "./ScrollLink";


function NavMenu() {
    return (
        <div>
            <div className="container">
                <div className="nav-top">
                    <div className="nav-user">
                        <>
                                    <h3>Cześć</h3>
                                    <NavLink to='/oddaj-rzeczy/'>Oddaj rzeczy</NavLink>
                                            <Scroll to={"survey-form"} spy={true} smooth={true} duration={500} >
                                                {"Formularz"}
                                            </Scroll>
                                    <NavLink to="/">Home</NavLink>
                                    <button>Logout</button>
                                </>
                                <>
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to='/logowanie/'>Zaloguj</NavLink>
                                    <NavLink to='/rejestracja/'>Załóż konto</NavLink>
                                </>
                    </div>

                    <nav className="nav">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Start</NavLink>
                            </li>
                            <ScrollLink to='three-columns' text={"O co chodzi?"}/>
                            <ScrollLink to='about' text={"O nas"}/>
                            <ScrollLink to='foundations' text={"Fundacja i organizacje"}/>
                            <ScrollLink to='survey-form' text={"Wypełnij formularz"}/>
                            <ScrollLink to='footer' text={"Kontakt"}/>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default NavMenu;