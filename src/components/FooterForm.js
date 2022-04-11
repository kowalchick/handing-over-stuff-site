import React, {useRef, useState} from 'react';
import axios from "axios";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Textarea from "react-validation/build/textarea";
import CheckButton from "react-validation/build/button";

import {isEmail} from 'validator';

import {useDispatch} from "react-redux";
import {register} from "../redux/actions/authAction";

const FooterForm = () => {

    const required = (value) => {
        if (!value) {
            return (
                <div className="error-input" role="alert">
                    This field is required
                </div>
            );
        }
    };

    const vName = (value) => {
        if (value.indexOf(" ") >= 0) {
            return (
                <div className="error-input" role="alert">
                    This is not a valid name.
                </div>
            );
        }
    };

    const vEmail = (value) => {
        if (!isEmail(value)) {
            return (
                <div className="error-input" role="alert">
                    This is not a valid email
                </div>
            );
        }
    };

    const vMessage= (value) => {
        if (value.length < 120) {
            return (
                <div className="error-input" role="alert">
                    The message must be at least 120 characters
                </div>
            );
        }
    };

    // const validate = (name, email, message) => {
    //     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     const errors = {};
    //     if (!name) {
    //         errors.name = 'This field is required';
    //     } else if (name.indexOf(" ") >= 0) {
    //         errors.name = 'This is not a valid name';
    //     }
    //
    //     if (!email) {
    //         errors.email = 'This field is required';
    //     } else if (!re.test(String(email).toLowerCase())) {
    //         errors.email = 'This is not a valid email';
    //     }
    //
    //     if (!message) {
    //         errors.message = 'This field is required';
    //     } else if (message.length < 120) {
    //         errors.message = 'The message must be at least 120 characters';
    //     }
    //     if (!errors.name && !errors.email && !errors.message) {
    //         errors.ok = true;
    //     }
    //     return errors;
    // }


    // const handleSubmit = e => {
    //     e.preventDefault();
    //     const result = validate(name, email, message);
    //     result.ok ? sendMessage() : setErrors(result);
    // }
    const form = useRef();
    const checkBtn = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [serverResponse, setServerResponse] = useState('');

    const setSuccessful = () => {
        axios.post('https://fer-api.coderslab.pl/v1/portfolio/contact', {
            name,
            email,
            message
        })
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    setServerResponse('Thank you for your message');
                    setName('');
                    setEmail('');
                    setMessage('');
                    setTimeout(()=>{
                        setServerResponse('');
                    },3000)
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    const dispatch = useDispatch();

    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangeMessage= (e) => {
        const message = e.target.value;
        setMessage(message);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(register(name, email, message))
                .then(() => {
                    setSuccessful(true);
                })
                .catch(() => {
                    setSuccessful(false);
                });
        }
    };

    return (
        <footer className="footer" >
            <div className="container">
                <div className="contact-box">
                    <div className="contact-section">
                        <div className="contact-title">
                            <h2 className="fancy">Contact us</h2>
                        </div>
                        {
                            serverResponse && <h3 className="message-sent">{serverResponse}</h3>
                        }
                        <Form autoComplete="off" className="contact-form" onSubmit={handleSubmit} ref={form}>
                            <div className="input-wrapper">
                                <label className="form-label" htmlFor="name">Type your name</label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="John"
                                    value={name}
                                    className="form-input"
                                    onChange={onChangeName}
                                    validations={[required, vName]}
                                />
                            </div>
                            <div className="input-wrapper">
                                <label className="form-label" htmlFor="email">Type your e-mail</label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="johnkowalski@gmail.com"
                                    value={email}
                                    className="form-input"
                                    onChange={onChangeEmail}
                                    validations={[required, vEmail]}
                                />
                            </div>
                            <label className="form-label" htmlFor="message">Leave a message</label>
                            <Textarea
                                rows="4"
                                id="message"
                                name="message"
                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                value={message}
                                className="form-input"
                                onChange={onChangeMessage}
                                validations={[required, vMessage]}
                            />
                            <div className="submit-wrapper">
                                <button type="submit" className="form-submit btn">Send</button>
                            </div>
                            <CheckButton style={{ display: "none" }} ref={checkBtn} />
                        </Form>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterForm;