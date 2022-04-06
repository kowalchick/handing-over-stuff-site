import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getSigninAction} from "../../redux/actions";


const LogForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userContext = useSelector(state => state.userContext);
    const dispatch = useDispatch();

    const signin = () => {
      dispatch(getSigninAction(email, password));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        console.log(userContext);
    }, [userContext]);
    return (
        <section className="logform-box">
            <div className="logform-title ">
                <h1 className="fancy">Log in</h1>
            </div>
            <form className="logform-form" autoComplete="off" onSubmit={handleSubmit}>
                <div className="logform-form-inputs">
                    <label className="form-label" htmlFor="name">E-mail:</label>
                    <input
                        className="form-input"
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label className="form-label" htmlFor="password">Password:</label>
                    <input
                        className="form-input"
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="logform-btns">
                        <>
                            <Link className="logform-link" to="/register/">Sign in</Link>
                            <button className="logform-btn" onClick={signin}>Sign out</button>
                        </>
                </div>
            </form>
        </section>

    );
}

export default LogForm;