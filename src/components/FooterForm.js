import React, {useState} from 'react';

const FooterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <footer className="footer" >
            <div className="container">
                <div className="contact-box">
                    <div className="contact-section">
                        <div className="contact-title">
                            <h2 className="fancy">Contact us</h2>
                        </div>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="input-wrapper">
                                <label className="form-label" htmlFor="name">Type your name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="John"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    className="form-input"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label className="form-label" htmlFor="email">Type your e-mail</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="johnkowalski@gmail.com"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className="form-input"
                                />
                            </div>
                            <label className="form-label" htmlFor="message">Leave a message</label>
                            <textarea
                                rows="4"
                                id="message"
                                name="message"
                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                className="form-input"
                            />
                            <div className="submit-wrapper">
                                <button type="submit" className="btn form-submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterForm;