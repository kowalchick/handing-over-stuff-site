import React from 'react';
import Signature from '../../assets/Signature.svg';

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="about-wrapper">
                    <div className="about-content">
                        <div className="about-title">
                            <h2 className="fancy">O nas</h2>
                        </div>
                        <p className="about-text">
                            Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya
                            nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                        </p>
                        <div className="about-signature">
                            <img src={Signature} alt="Signature"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;