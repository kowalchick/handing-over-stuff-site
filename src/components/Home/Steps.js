import React from 'react';
import {Link} from 'react-router-dom';
import icon1 from '../../assets/Icon-1.svg';
import icon2 from '../../assets/Icon-2.svg';
import icon3 from '../../assets/Icon-3.svg';
import icon4 from '../../assets/Icon-4.svg';

const Steps = () => {
    return (
        <section className="steps">
            <div className="container">
                <div className="steps-wrapper">
                    <div className="steps-title">
                        <h2 className="fancy">Wystarczą 4 proste kroki</h2>
                    </div>
                    <div className="steps-steps">
                        <div className="steps-two">
                            <div className="step">
                                <div className="step-icon">
                                    <img src={icon1} alt="tshirt"/>
                                </div>
                                <div className="step-title">
                                    <h3>Wybierz rzeczy</h3>
                                </div>
                                <div className="step-subtitle">
                                    <p>
                                        ubrania, zabawki, sprzęt i inne
                                    </p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="step-icon">
                                    <img src={icon2} alt="shopping tag"/>
                                </div>
                                <div className="step-title">
                                    <h3>Spakuj je</h3>
                                </div>
                                <div className="step-subtitle">
                                    <p>
                                        skorzystaj z worków na śmieci
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="steps-two">
                            <div className="step">
                                <div className="step-icon">
                                    <img src={icon3} alt="hand glass"/>
                                </div>
                                <div className="step-title">
                                    <h3>Zdecyduj komu chcesz pomóc</h3>
                                </div>
                                <div className="step-subtitle">
                                    <p>
                                        wybierz zaufane miejsce
                                    </p>
                                </div>
                            </div>

                            <div className="step">
                                <div className="step-icon">
                                    <img src={icon4} alt="cycle"/>
                                </div>
                                <div className="step-title">
                                    <h3>Zamów kuriera</h3>
                                </div>
                                <div className="step-subtitle">
                                    <p>
                                        kurier przyjedzie w dogodnym terminie
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/oddaj-rzeczy/" className="btn steps-btn">Oddaj<br/>rzeczy</Link>
                </div>
            </div>
        </section>
    );
}

export default Steps;