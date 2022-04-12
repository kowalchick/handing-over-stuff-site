import React, {useState} from 'react';
// import axios from "axios";


const validate = (name, email, message) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errors = {};
    if (!name) {
        errors.name = 'This field is required';
    } else if (name.indexOf(" ") >= 0) {
        errors.name = 'This is not a valid name';
    }

    if (!email) {
        errors.email = 'This field is required';
    } else if (!re.test(String(email).toLowerCase())) {
        errors.email = 'This is not a valid email';
    }

    if (!message) {
        errors.message = 'This field is required';
    } else if (message.length < 120) {
        errors.message = 'The message must be at least 120 characters';
    }
    if (!errors.name && !errors.email && !errors.message) {
        errors.ok = true;
    }
    return errors;
}

const FooterForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [serverResponse, setServerResponse] = useState('');
    const [errors, setErrors] = useState({});

    const setSuccess = async() => {
        try {
            const response = await fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
            });
            if (response.status === 200) {
                setServerResponse('Thank you for your message. We will reply soon.');
                setName('');
                setEmail('');
                setMessage('');
                setTimeout(()=>{
                    setServerResponse('');
                },3000)
            }
        } catch(error) {
            console.log(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = validate(name, email, message);
        result.ok ? setSuccess() : setErrors(result);
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
                        <form autoComplete="off" className="contact-form" onSubmit={handleSubmit}>
                            <div className="input-wrapper">
                                <label className="form-label" htmlFor="name">Type your name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="John"
                                    value={name}
                                    className={errors.name ? "form-input error-text" : "form-input"}
                                    onChange={e => setName(e.target.value)}
                                    onFocus={() => {
                                        setErrors({});
                                    }}
                                />
                                {
                                    errors.name && <span className="error-text">{errors.name}</span>
                                }
                            </div>
                            <div className="input-wrapper">
                                <label className="form-label" htmlFor="email">Type your e-mail</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="johnkowalski@gmail.com"
                                    value={email}
                                    className="form-input"
                                    onChange={e => setEmail(e.target.value)}
                                    onFocus={() => setErrors({})}
                                />
                                {
                                    errors.email && <span className="error-text">{errors.email}</span>
                                }
                            </div>
                            <label className="form-label" htmlFor="message">Leave a message</label>
                            <textarea
                                rows="4"
                                id="message"
                                name="message"
                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                value={message}
                                className="form-input textarea"
                                onChange={e => setMessage(e.target.value)}
                                onFocus={() => setErrors({})}
                            />
                            {
                                errors.message && <div className="error-text">{errors.message}</div>
                            }
                            <div className="submit-wrapper">
                                <button type="submit" className="form-submit btn">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterForm;