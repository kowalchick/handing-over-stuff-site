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
                <div className="contact-wrapper">
                    <div className="section-contact">
                        <div className="section-contact-title">
                            <h2>Skontaktuj się z nami</h2>
                        </div>
                        <form className="section-contact-form" onSubmit={handleSubmit}>
                            <div className="input-wrapper">
                                <label className="form-label" htmlFor="name">Wpisz swoje imię</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Jan"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className="input-wrapper">
                                <label className="form-label" htmlFor="email">Wpisz swój email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="jankowalski@gmail.pl"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <label className="form-label" htmlFor="message">Wpisz swoją wiadomość</label>
                            <textarea
                                rows="4"
                                id="message"
                                name="message"
                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                            />
                            <div className="submit-wrapper">
                                <button type="submit">Wyślij</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterForm;