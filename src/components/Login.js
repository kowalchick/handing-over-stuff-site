// import React, {useContext} from 'react';
// import NavMenu from './NavMenu';
// import LogForm from './Forms/LogForm';
// // import {initialState} from "../redux/reducer";
//
// const Login = () => {
//     // const [user] = useContext(initialState);
//     return (
//         <>
//             <NavMenu />
//                 <LogForm />
//         </>
//     );
// };
// export default Login;
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from "../redux/actions/authAction";
import NavMenu from "./NavMenu";

const required = (value) => {
    if (!value) {
        return (
            <div className="error-input" role="alert">
                This field is required!
            </div>
        );
    }
};

const Login = () => {
    const form = useRef();
    const checkBtn = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { isLoggedIn } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(login(email, password))
                .then(() => {
                    this.history.push("/");
                    window.location.reload();
                })
                .catch(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    };

    if (isLoggedIn) {
        return <Link to="/" />;
    }

    return (
        <>
            <NavMenu/>
                <section className="sign-box">
                    <div className="sign-title ">
                        <h1 className="fancy">Sign in</h1>
                    </div>
                    <Form className="sign-form" onSubmit={handleLogin} ref={form}>
                        <div className="sign-form-inputs">
                            <label className="form-label" htmlFor="name">Email</label>
                            <Input
                                className="form-input"
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={onChangeEmail}
                                validations={[required]}
                            />
                            <label className="form-label" htmlFor="password">Password</label>
                            <Input
                                className="form-input"
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={onChangePassword}
                                validations={[required]}
                            />
                        </div>
                        <div className="sign-btns">
                            <>
                                <Link className="sign-link" to="/register/">Sign up</Link>
                                <button className="sign-btn">Sign in</button>
                            </>
                        </div>
                        {
                            loading && <div className="loading" style={{margin: "20px auto"}}/>
                        }
                        <CheckButton style={{ display: "none" }} ref={checkBtn} />
                    </Form>
                </section>
        </>

    );
};

export default Login;
