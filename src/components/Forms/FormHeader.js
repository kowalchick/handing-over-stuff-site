import React from 'react';



const FormHeader = () => {
    return (
        <header className="handform " >
            <div className="handform-wrapper ">
                <div className="handform-box-wrapper">
                    <div className="handform-box">
                        <div className="handform-box-title">
                            <h2 className="fancy">Give your unwanted stuff to PERSONS IN NEED</h2>
                        </div>
                        <div className="handform-box-subtitle">
                            It is just 4 simple steps:
                        </div>
                        <div className="handform-box-steps">
                            <div className="handform-box-step">
                                <h3>1</h3>
                                <p>Choose things</p>
                            </div>
                            <div className="handform-box-step">
                                <h3>2</h3>
                                <p>Pack them in bags</p>
                            </div>
                            <div className="handform-box-step">
                                <h3>3</h3>
                                <p>Choose a foundation</p>
                            </div>
                            <div className="handform-box-step">
                                <h3>4</h3>
                                <p>Order a courier</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="handform-alert">
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

export default FormHeader;