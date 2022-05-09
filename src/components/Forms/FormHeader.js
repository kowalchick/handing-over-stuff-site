import React from 'react';

export const FormHeader = () => {
    return (
        <header className="formheader" >
            <div className="formheader-wrapper ">
                <div className="formheader-box-wrapper">
                    <div className="formheader-box">
                        <div className="formheader-box-title">
                            <h2 className="fancy">Give your unwanted stuff to PERSONS IN NEED</h2>
                        </div>
                        <div className="formheader-box-subtitle">
                            It is just 4 simple steps:
                        </div>
                        <div className="formheader-box-steps">
                            <div className="formheader-box-step">
                                <h3>1</h3>
                                <p>Choose things</p>
                            </div>
                            <div className="formheader-box-step">
                                <h3>2</h3>
                                <p>Pack them in bags</p>
                            </div>
                            <div className="formheader-box-step">
                                <h3>3</h3>
                                <p>Choose a foundation</p>
                            </div>
                            <div className="formheader-box-step">
                                <h3>4</h3>
                                <p>Order a courier</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="formheader-alert">
                    <div className="container">
                        <h1 className="alert-title">Important!</h1>
                        <p className="alert-text">
                            Complete the details of your stuff. Thanks to this step, we will pass them on to those who need them the most.
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}

