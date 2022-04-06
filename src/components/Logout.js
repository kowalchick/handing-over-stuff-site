import React from 'react';
import NavMenu from "./NavMenu";
import {Link} from "react-router-dom";

const Logout = () => {
    return (
        <>
            <NavMenu/>
            <section className="logout">
                <div className="logout-title">
                    <h1 className="fancy">You have been logged out successfully</h1>
                </div>
                <Link className="logform-btn" to="/">Home</Link>
            </section>
        </>
    );
};

export default Logout;