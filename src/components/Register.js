import React, { useState, useRef } from "react";
import { useDispatch} from "react-redux";
import {Link} from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {isEmail} from 'validator';

import { register } from "../redux/actions/authAction";
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

const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="error-input" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="error-input" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

const vrepeatpassword = (repeatPassword, password) => {
    if ((typeof repeatPassword === "string") && (password !== repeatPassword)) {
        return (
            <div className="error-input" role="alert">
                Passwords must match.
            </div>
        );
    }
};

const Register = () => {
    const form = useRef();
    const checkBtn = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [successful, setSuccessful] = useState(false);

    // const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const onChangeRepeatPassword = (e) => {
        const repeatPassword = e.target.value;
        setRepeatPassword(repeatPassword);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(register(email, password, repeatPassword))
                .then(() => {
                    setSuccessful(true);
                })
                .catch(() => {
                    setSuccessful(false);
                });
        }
    };


    return (
        <>
            <NavMenu/>
            <section className="sign-box">
                <div className="sign-title ">
                    <h1 className="fancy">Sign up</h1>
                </div>
                <Form className="sign-form" onSubmit={handleRegister} ref={form}>
                    <div className="sign-form-inputs">
                        <label className="form-label" htmlFor="name">Email</label>
                        <Input
                            className="form-input"
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={onChangeEmail}
                            validations={[required,validEmail]}
                        />
                        <label className="form-label" htmlFor="password">Password</label>
                        <Input
                            className="form-input"
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={onChangePassword}
                            validations={[required,vpassword]}
                        />
                        <label className="form-label" htmlFor="repeatPassword">Repeat password</label>
                        <Input
                            className="form-input"
                            id="repeatPassword"
                            name="repeatPassword"
                            type="password"
                            value={repeatPassword}
                            onChange={onChangeRepeatPassword}
                            validations={[required, vrepeatpassword]}
                        />
                    </div>

                    <div className="sign-btns">
                        {
                            successful ? <>
                                <Link className="sign-link" to="/login/">Sign up</Link>
                                <button className="sign-btn">Sign in</button>
                            </> : <>
                                <Link className="sign-link" to="/register/">Sign in</Link>
                                <button className="sign-btn">Sign up</button>
                            </>
                        }
                    </div>
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
            </section>
        </>

    );
};

export default Register;