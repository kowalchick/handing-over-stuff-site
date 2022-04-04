import React from 'react';

const ThreeColumns = () => {
    return (
        <section className="three-columns">
            <div className="container">
                <div className="columns-wrapper">
                    <div className="columns-column">
                        <div className="columns-count">
                            <h2>10</h2>
                        </div>
                        <div className="columns-title">
                            <h3>ODDANYCH WORKÓW</h3>
                        </div>
                        <div className="columns-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisc
                                Pellentesque vel enim a elit viverra elementuma.
                                Aliquam erat volutpat.
                            </p>
                        </div>
                    </div>

                    <div className="columns-column">
                        <div className="columns-count">
                            <h2>5</h2>
                        </div>
                        <div className="columns-title">
                            <h3>WSPARTYCH ORGANIZACJI</h3>
                        </div>
                        <div className="columns-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisc
                                Pellentesque vel enim a elit viverra elementuma.
                                Aliquam erat volutpat.
                            </p>
                        </div>
                    </div>

                    <div className="columns-column">
                        <div className="columns-count">
                            <h2>7</h2>
                        </div>
                        <div className="columns-title">
                            <h3>ZORGANIZOWANY ZBIÓREK</h3>
                        </div>
                        <div className="columns-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisc
                                Pellentesque vel enim a elit viverra elementuma.
                                Aliquam erat volutpat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThreeColumns;