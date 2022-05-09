import React from 'react';
import {Link} from 'react-router-dom';

// Możesz przenieść je tutaj, do folderu Home, bądź lepiej - do `components/Home/HomeSteps` razem z tym JS-em
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
                        <h2 className="fancy">Just 4 easy steps</h2>
                    </div>
                    <div className="steps-steps">
                        <div className="steps-box">
                            <div className="step">
                                <div className="step-icon">
                                    <img src={icon1} alt="tshirt"/>
                                </div>
                                <div className="step-title">
                                    <h3>Choose stuff</h3>
                                </div>
                                <div className="step-subtitle">
                                    <p>
                                        clothes, toys, gear and more
                                    </p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="step-icon">
                                    <img src={icon2} alt="shopping tag"/>
                                </div>
                                <div className="step-title">
                                    <h3>Pack up</h3>
                                </div>
                                <div className="step-subtitle">
                                    <p>
                                        use a garbage bag
                                    </p>
                                </div>
                            </div>


                    </div>
                        <div className="steps-box">
                            <div className="step">
                                <div className="step-icon">
                                    <img src={icon3} alt="hand glass"/>
                                </div>
                                <div className="step-title">
                                    <h3>Decide who you want to help</h3>
                                </div>
                                <div className="step-subtitle">
                                    <p>
                                        choose a safe place
                                    </p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="step-icon">
                                    <img src={icon4} alt="cycle"/>
                                </div>
                                <div className="step-title">
                                    <h3>Book a courier</h3>
                                </div>
                                <div className="step-subtitle">
                                    <p>
                                        a courier will come at a convenient time
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/hand-over/" className="btn steps-btn">Hand over<br/>stuff</Link>
                </div>
            </div>
        </section>
    );
}

export default Steps;
